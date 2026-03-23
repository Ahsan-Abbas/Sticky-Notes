import { findSectionByPath, findVariable, getCurrentValue, getCurrentValueInternalName, getPropertyString, getValueInternalName, getVariablesWithProperty, isValidNumberValue } from "../utils/ace";
import { publish } from "../utils/events";
import { sortList } from "../utils/lists";
import { getBuildingElementList, getVariant } from "./buildingElement";
import { generateDocument } from "./document";
import { createOrUpdateLead } from "./marketing";
import { findProducts } from "./products";

type LookupFunction = (sourceScope: string, filters: LookupField[], resultColumns: LookupField[], sorting: LookupField[], language: string) => Promise<Record<string, any>[]>

interface ISourceSystem {
  getLookupData: LookupFunction;
  loadDetails: (row: Record<string, any>) => Promise<Record<string, any>>;
}

//adds front-end sorting to a lookup function
const sortable = (fn: LookupFunction): LookupFunction => {
  return async (sourceScope: string, filters: LookupField[], resultColumns: LookupField[], sorting: LookupField[], language: string) => {
    let products = await fn(sourceScope, filters, resultColumns, sorting, language);
    return sortList(products, sorting);
  }
}

const integrationList: Record<LookupSourceSystem, ISourceSystem> = {
  PIM: {
    getLookupData: sortable(findProducts),
    loadDetails: async row => row
  },
  BIM: {
    getLookupData: sortable(async (_, filters) => {
      let p = {
        elementType: filters.find(f => f.sourceAttribute === "elementType")?.value?.toString() || "",
        group: filters.find(f => f.sourceAttribute === "group")?.value?.toString() || ""
      }
      return await getBuildingElementList(p);
    }),
    loadDetails: async (row) => {
      if (typeof row["variantId"] === "undefined")
        return row;
      let p = {
        buildingElementId: row["buildingElementId"],
        variantId: row["variantId"]
      }
      return {
        ...row,
        ...await getVariant(p)
      };
    }
  }
}

export default (integration: LookupSourceSystem): ISourceSystem => {
  let i = integrationList[integration];
  if (typeof i !== "undefined")
    return i;

  console.warn("Unknown lookup integration type: " + integration);
  return { //return a dummy integration object
    getLookupData: async () => [],
    loadDetails: async row => row
  };
};

export const isSupportedIntegration = (name: string) => Object.keys(integrationList).some(k => k === name);

export const handleActionTrigger = async (actions: ActionSpecification | ActionSpecification[], variable: Variable, section: Section, instanceId: string, state: IConfigState, interaction: IConfigInteraction | IConfigInteractionSampleOrder): Promise<void> => {
  actions = Array.isArray(actions) ? actions : [actions];
  let assignments: IAssignment[] = [];
  for (let action of actions) {
    publish({
      event: "action",
      eventValue: action,
      variable,
      section,
      state
    });
    if (action.action === "Send to Marketo") {
      let vars = getVariablesWithProperty(state.configuration.sections, "SOURCE_SYSTEM_ID_MARKETO");

      let data: Record<string, any> = {};
      data.toolName = state.input.model;
      for (let v of vars) {
        let value = getCurrentValue(v);
        if (typeof value === "undefined")
          continue;

        let key = getPropertyString(v, "SOURCE_SYSTEM_ID_MARKETO")!;

        let val = getPropertyString(value, "SOURCE_SYSTEM_ID_MARKETO");
        if (typeof val === "undefined")
          val = getValueInternalName(value);

        if (val === "")
          continue;

        data[key] = val;
      }
      await createOrUpdateLead(data);
    }
    else if (action.action === "Increment") {
      let currentValue = 0;
      let targetVariable = typeof action.target === "undefined" ? variable : findVariable(section, action.target);
      if (typeof targetVariable === "undefined") {
        console.warn("Increment: unable to find target variable: " + action.target);
        break;
      }
      let targetValue = getCurrentValue(targetVariable);
      if (typeof targetValue?.value == "number")
        currentValue = targetValue.value + (action.step || 1);
      if (isValidNumberValue(currentValue, targetVariable))
        assignments.push({
          variableId: targetVariable.id,
          value: currentValue,
          instanceId
        });
    }
    else if (action.action === "GenerateDocument") {
      try {
        await generateDocument(action.template, action.fileName, state.configuration.sections);
      }
      catch (err) {
        console.error("Unable to generate document", err);
      }
    }
    else if (action.action === "Reset") {
      await interaction.reset();
    }
    else if (action.action === "OpenFile") {
      let valueText = "";
      if (typeof action.link !== "undefined")
        valueText = action.link;
      if (valueText === "")
        valueText = getValueInternalName(getCurrentValue(variable));
      if (valueText !== "")
        window.open(valueText, "_blank");
    }
    else if (action.action === "SetValue") {
      let value = action.value;

      if (typeof value === "undefined") {
        if (typeof action.fromVariable === "undefined") {
          console.error("SetValue specification need to have either a value or a fromVariable defined");
          break;
        }
        let fromSection = section;

        if (typeof action.fromPath !== "undefined") {
          let tempSection = findSectionByPath(state.configuration.sections, action.fromPath);
          if (tempSection)
            fromSection = tempSection;
          else {
            console.warn("SetValue: unable to find the section referenced in the fromPath", action.fromPath);
            break;
          }
        }
        let v = findVariable(fromSection, action.fromVariable);
        let asn = assignments.find(a => a.variableId === v?.id && a.instanceId == instanceId);
        if (asn)
          value = asn.value;
        else
          value = getCurrentValueInternalName(v);
      }
      if (typeof value === "undefined" || value == "")
        console.log("SetValue: No value found");
      else {
        let target: Variable | undefined = variable;
        if (typeof action.toVariable !== "undefined") {
          let toSection = section;
          if (typeof action.toPath !== "undefined") {
            let tempSection = findSectionByPath(state.configuration.sections, action.toPath);
            if (tempSection)
              toSection = tempSection;
            else {
              console.warn("SetValue: unable to find the section referenced in the toPath", action.toPath);
              break;
            }
          }
          target = findVariable(toSection, action.toVariable);
        }
        if (typeof target === "undefined")
          console.warn("SetValue: unable to find target variable: " + action.toVariable);
        else
          assignments.push({
            variableId: target.id,
            value,
            instanceId
          });
      }
    }
    else if (action.action === "Go_To") {
      //ignore - handled from PageFlow component
    }
    else
      console.error("Action type not recognized", action);
  }
  if (assignments.length > 0)
    await interaction.assignMultiple(assignments);
}
