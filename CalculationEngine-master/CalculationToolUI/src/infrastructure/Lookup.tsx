import { useContext, useState } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";
import { findChildModelSections, findSectionByPath, findVariable, getCurrentValue, getPropertyValue, getVariableDisplayInfo } from "../utils/ace";
import { ConfigStateContext } from "./ConfigSessionProvider";
import ListView from "../components/ListView";
import integration, { isSupportedIntegration } from "../backend/integrations";
import { getMatching, matchesFilter } from "../utils/lists";

interface ILookupProps {
  section: Section;
  instanceId: string;
  variable: Variable;
  definitionText: string;
  assignMultiple: (assignments: IAssignment[]) => void;
}

const findValue = (row: Record<string, any>, param: LookupOutParameter, variable: Variable, sourceSystem: LookupSourceSystem) => {
  let res = row[param.sourceAttribute];
  if (typeof res === "number" && variable.valueType === "Number")
    return variable.scale ? res.toPrecision(variable.scale) : Math.round(res);
  let val = variable.values.find(v => v.properties.some(p => p.id === "SOURCE_SYSTEM_ID_" + sourceSystem && p.value === res));
  if (val)
    return val.value;
  return res;
}

const getDataWithFallback = (data: Record<string, any>[], definition: LookupDefinition, section: Section) => {
  if (typeof definition.selectionColumnSourceAttribute === "undefined")
    return data;
  const newData = data.map(oldRow => {
    let row = { ...oldRow };
    for (let att of definition.output) {
      if (typeof att.fallback !== "undefined") {
        let v = findVariable(section, att.fallback);
        if (typeof v !== "undefined") {
          if (typeof att.sourceEntity === "undefined" && (typeof row[att.sourceAttribute] === "undefined" || row[att.sourceAttribute] == null))
            row[att.sourceAttribute] = v.name;
          else if (typeof att.sourceEntity !== "undefined" && Array.isArray(row[att.sourceEntity])) {
            for (let i = 0; i < row[att.sourceEntity].length; i++) {
              if (typeof row[att.sourceEntity][i][att.sourceAttribute] === "undefined" || row[att.sourceEntity][i][att.sourceAttribute] == null)
                row[att.sourceEntity][i][att.sourceAttribute] = v.name;
            }
          }
        }
      }
    }
    return row;
  });
  return newData;
}

const handleSelectionRow = (row: Record<string, any> | undefined, rowSection: Section, definition: LookupDefinition): IAssignment[] => {
  let assignments: IAssignment[] = [];
  let childCollections: Record<string, LookupOutParameter[]> = {};
  for (let p of definition.output) {
    if (typeof p.configSection !== "undefined") {
      if (!Object.keys(childCollections).includes(p.configSection))
        childCollections[p.configSection] = [];
      childCollections[p.configSection].push(p);
      continue;
    }
    let v = findVariable(rowSection, p.configAttribute);
    if (v)
      assignments.push({ variableId: v.id, instanceId: "ROOT", value: row ? findValue(row, p, v, definition.sourceSystem) : null }); //TODO: properly handle instanceId
    else if (typeof definition.displayNames !== "undefined" && !(p.sourceAttribute in definition.displayNames))
      console.warn("Lookup: Can't find output variable " + p.configAttribute + " in section " + rowSection.id);
  }
  for (let collectionKey in childCollections) {
    let sections = findChildModelSections(rowSection, collectionKey);
    if (sections.length === 0)
      console.warn("Lookup: can't find child sections named " + collectionKey);

    for (let coll of childCollections[collectionKey]) {
      let collName = coll.sourceEntity?.split(".").at(-1);
      if (typeof (collName) === "undefined") {
        console.warn("Lookup: can't find child list in source data: " + collName);
        continue;
      }
      let childArray = row?.[collName];
      if (!Array.isArray(childArray))
        continue;

      for (let i = 0; i < sections.length; i++) {
        let sect = sections[i];
        let childRow = childArray.at(i);
        let v = findVariable(sect, coll.configAttribute);
        if (v)
          assignments.push({ variableId: v.id, instanceId: "ROOT", value: childRow ? findValue(childRow, coll, v, definition.sourceSystem) : null }); //TODO: properly handle instanceId
        else
          console.warn("Lookup: Can't find child output variable " + coll.configAttribute + " in section " + sect.id);
      }
    }
  }
  return assignments;
}

const findSectionRowData = (rowSection: Section, output: LookupOutParameter[], displayNames?: Record<string, string>): Record<string, any> => {
  let rec: Record<string, any> = {};
  for (let p of output) {
    let v = findVariable(rowSection, p.configAttribute);
    if (v)
      rec[p.sourceAttribute] = getCurrentValue(v)?.value;
    else if (typeof displayNames !== "undefined" && !(p.sourceAttribute in displayNames))
      console.warn("Lookup: Can't find output variable " + p.configAttribute + " in section " + rowSection.id, displayNames);
  }
  return rec;
}

const findCurrentlyAssignedRecords = (section: Section, definition: LookupDefinition): Record<string, any>[] => {
  let records: Record<string, any>[] = [];

  if (definition.outputModel) {
    //when the user can select multiple items, selections need to be saved to a child model
    let sects = findChildModelSections(section, definition.outputModel);
    for (let s of sects)
      records.push(findSectionRowData(s, definition.output, definition.displayNames));
  }
  else {
    records.push(findSectionRowData(section, definition.output, definition.displayNames));
  }
  return records.filter(r => isRecordValid(r, definition.selectionColumnSourceAttribute));
}

const isRecordValid = (rec: Record<string, any>, mainAttribute?: string): boolean => {
  if (typeof mainAttribute === "undefined")
    return Object.values(rec).some(v => !!v);
  return !!rec[mainAttribute];
}

const setFieldDefaults = (data: Record<string, any>[], definition: LookupDefinition, selected: Record<string, string>[],
  assignMultiple: (assignment: IAssignment[]) => void, outputSection: Section): Record<string, any>[] => {

  let assignmentArray: IAssignment[] = [];
  //If user has previously selected something in editable fields, copy those values so they are retained
  const selection = definition.selectionColumnSourceAttribute;
  if (typeof selection !== "undefined") {
    const filterableOutput = definition.output.find(x => x.filterable);
    for (let d of data) {
      const ds = selected.find(s => d[selection] === s[selection]);
      const dsIndex = selected.findIndex(s => d[selection] === s[selection]);
      if (typeof ds !== "undefined") {
        let childObject: Record<string, any> = {};
        if (filterableOutput !== undefined && filterableOutput.sourceEntity !== undefined) {
          const childArray = d[filterableOutput.sourceEntity];
          if (Array.isArray(childArray)) {
            childObject = childArray.find(x => x[filterableOutput.sourceAttribute] == ds[filterableOutput.sourceAttribute]);
          }
        }
        let rowAssignment = false;
        for (const key in ds) {
          for (let o of definition.output) {
            if (o.sourceAttribute !== key) {
              continue;
            }
            if (o.custom) {
              if (typeof ds[key] !== "undefined")
                d[key] = Array.isArray(ds[key]) ? [...ds[key]] : (typeof ds[key] === "object") ? { ...(ds[key] as unknown as object) } : ds[key];
            }
            else if (o.sourceEntity !== undefined && childObject !== undefined) {
              d[key] = Array.isArray(childObject[key]) ? [...childObject[key]] : (typeof childObject[key] === "object") ? { ...(childObject[key] as unknown as object) } : childObject[key];
            }
            if (ds[key] !== d[key]) {
              rowAssignment = true;
            }
          }
        }
        if (rowAssignment) {
          if (definition.outputModel) {
            //when the user can select multiple items, selections need to be saved to a child model
            let sects = findChildModelSections(outputSection, definition.outputModel);

            assignmentArray = assignmentArray.concat(handleSelectionRow(d, sects[dsIndex], definition));
          }
          else
            assignmentArray = assignmentArray.concat(handleSelectionRow(d, outputSection, definition));
        }
      }
    }
  }

  for (let c of definition.output.filter(o => o.custom)) {
    if (typeof c.defaultValue === undefined)
      continue;
    for (let d of data)
      if (typeof d[c.sourceAttribute] === "undefined")
        d[c.sourceAttribute] = c.defaultValue;
  }
  if (assignmentArray.length > 0) {
    assignMultiple(assignmentArray);
  }
  return data;
}

const getColumnFunctionality = (col: LookupOutParameter): ListViewColumnFunctionality | undefined => {
  if (col.custom)
    return "input";
  if (col.filterable)
    return "filter";
}

const findInputOutputSectionOrThrow = (sections: Section[], path: string | string[]): Section => {
  let sect = findSectionByPath(sections, path);
  if (sect)
    return sect;
  throw "Lookup: unable to find output section";
}

const parseLookupDefinition = (definitionText: string): LookupDefinition => {
  let obj = JSON.parse(definitionText);
  if (!("selectTable" in obj))
    return obj as LookupDefinition;
  let displayNames: Record<string, string> = {};

  let old = obj as LookupDefinitionOld;
  let output: LookupOutParameter[] = [];
  let outputColumns = typeof old.selectTable.selectionColumn === "undefined" ? old.output : [old.selectTable.selectionColumn, ...old.output];

  for (let oldCol of old.selectTable.columns) {
    let c = outputColumns.find(o => o.sourceAttribute === oldCol.sourceAttribute && o.sourceEntity === oldCol.sourceEntity);
    if (typeof c?.configAttribute === "undefined")
      displayNames[oldCol.sourceAttribute] = oldCol.displayName;
    let cust = old.customColumns?.find(o => o.sourceAttribute === oldCol.sourceAttribute);
    let o: LookupOutParameter = {
      configAttribute: c?.configAttribute ?? "",
      configSection: c?.configSection,
      show: true,
      sourceAttribute: oldCol.sourceAttribute,
      sourceEntity: oldCol.sourceEntity,
      displayConditionMatching: oldCol.displayConditionMatching,
      displayConditions: oldCol.displayConditions,
      filterable: oldCol.filterable,
      formatting: oldCol.formatting,
      usage: oldCol.usage
    };
    if (typeof cust !== "undefined") {
      o.custom = true;
      if (typeof cust.defaultValue !== undefined)
        o.defaultValue = cust.defaultValue;
    }
    output.push(o);
  }

  for (let oldCol of outputColumns) {
    if (output.some(o => o.configAttribute === oldCol.configAttribute && o.configSection === oldCol.configSection && o.sourceAttribute === oldCol.sourceAttribute && o.sourceEntity === oldCol.sourceEntity))
      continue;
    let cust = old.customColumns?.find(o => o.sourceAttribute === oldCol.sourceAttribute);
    let o: LookupOutParameter = {
      configAttribute: oldCol.configAttribute,
      configSection: oldCol.configSection,
      sourceAttribute: oldCol.sourceAttribute,
      sourceEntity: oldCol.sourceEntity
    };
    if (typeof cust !== "undefined") {
      o.custom = true;
      if (typeof cust.defaultValue !== undefined)
        o.defaultValue = cust.defaultValue;
    }
    output.push(o);
  }
  let converted: LookupDefinition = {
    input: old.input,
    sourceScope: old.sourceScope,
    sourceSystem: old.sourceSystem,
    inputMatching: old.inputMatching,
    output,
    outputCount: old.outputCount,
    outputModel: old.outputModel,
    outputPath: old.outputPath,
    selectionColumnSourceAttribute: old.selectTable.selectionColumn?.sourceAttribute,
    selectionLowerLimit: old.selectTable.selectionLowerLimit,
    selectionUpperLimit: old.selectTable.selectionUpperLimit,
    sorting: old.selectTable.sorting,
    views: old.selectTable.views,
    displayNames
  };
  console.log("Lookup: old definition", old);
  console.log("Lookup: converted definition", converted);
  return converted;
}

const Lookup = ({ section, instanceId, variable, definitionText, assignMultiple }: ILookupProps) => {
  const configState = useContext(ConfigStateContext);
  const [definition, _] = useState<LookupDefinition | null>(() => {
    try {
      return {
        displayNames: {},
        ...parseLookupDefinition(definitionText)
      };
    }
    catch (err) {
      console.warn("Lookup: Unable to parse show-as specification", definitionText);
      return null;
    }
  });

  if (!definition || !isSupportedIntegration(definition.sourceSystem)) {
    console.log("Can't render lookup for " + variable.id);
    return <></>;
  }

  let outputSection = section;
  try {
    if (typeof definition.outputPath !== "undefined")
      outputSection = findInputOutputSectionOrThrow(configState.configuration.sections, definition.outputPath);
  }
  catch (err) {
    console.warn(err);
    return <></>;
  }

  let inputSection = section;
  try {
    if (typeof definition.inputPath !== "undefined")
      inputSection = findInputOutputSectionOrThrow(configState.configuration.sections, definition.inputPath);
  }
  catch (err) {
    console.warn(err);
    return <></>;
  }

  const [data, setData] = useState<Record<string, any>[]>([]);
  const [selected, setSelected] = useState<Record<string, any>[]>(() => findCurrentlyAssignedRecords(outputSection, definition));

  let fetchColumns: LookupField[] = [];
  for (let out of definition.output)
    if (out.custom !== true //ignore custom columns
      && !fetchColumns.some(f => f.sourceAttribute === out.sourceAttribute && f.sourceEntity === out.sourceEntity)) //Distinct values
      fetchColumns.push({ sourceAttribute: out.sourceAttribute, sourceEntity: out.sourceEntity });
  let matching = getMatching(definition.inputMatching, section);

  let filters: LookupField[] = [];

  let missingRequiredFields = false;

  for (let input of definition.input) {
    let obj: LookupField = { ...input };

    if (input.value) {
      filters.push(obj);
    }
    else if (input.configAttribute) {
      let v = findVariable(inputSection, input.configAttribute);
      if (v) {
        let info = getVariableDisplayInfo(v);
        if (info.currentValue) {
          obj.value = getPropertyValue(info.currentValue, "SOURCE_SYSTEM_ID_" + definition.sourceSystem) || info.currentValue?.value || "";
          filters.push(obj);
        }
        else if (info.mandatory)
          missingRequiredFields = true;
      }
      else
        console.warn("Lookup: Can't find filter " + input.configAttribute);
    }
  }

  useDeepCompareEffect(() => {
    if (missingRequiredFields)
      setData([]);
    else
      integration(definition.sourceSystem)
        .getLookupData(definition.sourceScope, filters, fetchColumns, definition.sorting?.map<LookupField>(s => ({
          sourceAttribute: s.sourceAttribute,
          sourceEntity: s.sourceEntity,
          value: s.direction
        })) || [], configState.input.language)
        .then(newData => setData(setFieldDefaults(newData, definition, selected, assignMultiple, outputSection)));

  }, [filters, matching, fetchColumns]);

  const filteredColumns: LookupOutParameter[] = definition.output
    .filter(col => matchesFilter(getMatching(col.displayConditionMatching, section), col.displayConditions, section));
  const displayColumns: IListViewColumn[] = filteredColumns
    .filter(col => typeof col.usage === "undefined" && col.show === true)
    .map<IListViewColumn>(col => {
      let v = findVariable(outputSection, col.configAttribute);
      let info = getVariableDisplayInfo(v);
      if (typeof v === "undefined" && typeof definition.displayNames !== "undefined" && !(col.sourceAttribute in definition.displayNames))
        console.warn("Lookup: Unable to find variable '" + col.configAttribute + "' for column", col);
      return {
        name: v?.name ?? definition.displayNames?.[col.sourceAttribute] ?? "",
        value: col.sourceAttribute ?? "",
        childObject: col.sourceEntity,
        functionality: getColumnFunctionality(col),
        formatting: col.formatting,
        headerStyle: info.textStyleFamily,
        textStyle: info.textStyleFeature,
        mandatory: info.mandatory
      };
    });

  const handleSelection = async (row: Record<string, any>, rowSelected: boolean, selectedRows: Record<string, any>[]): Promise<void> => {
    let assignments: IAssignment[] = [];

    if (rowSelected)
      row = await integration(definition.sourceSystem).loadDetails(row);

    if (definition.outputModel) {
      //when the user can select multiple items, selections need to be saved to a child model
      let sects = findChildModelSections(outputSection, definition.outputModel);
      for (let i = 0; i < sects.length; i++)
        assignments = assignments.concat(handleSelectionRow(selectedRows.at(i), sects[i], definition));
    }
    else
      assignments = assignments.concat(handleSelectionRow(rowSelected ? row : undefined, outputSection, definition));

    setSelected(selectedRows);
    if (typeof definition.selectionColumnSourceAttribute !== "undefined") {
      let s = definition.selectionColumnSourceAttribute;
      setData(data.map(d => d[s] == row[s] ? row : d));
    }
    assignMultiple(assignments);
  }

  if (Array.isArray(definition.views) && definition.views.length === 0)
    return <></>;
  return <>
    <div className="col-1">
      <ListView
        data={getDataWithFallback(data, definition, section)}
        selectedRows={selected}
        selectionKey={definition.selectionColumnSourceAttribute}
        selectionLowerLimit={definition.selectionLowerLimit}
        selectionUpperLimit={definition.selectionUpperLimit}
        childSelectionKey={filteredColumns.find(col => col.filterable)?.sourceAttribute}
        onSelect={handleSelection}
        columns={displayColumns}
        views={definition.views}
        titleKey={filteredColumns.find(c => c.usage === "title")?.sourceAttribute}
        imageKey={filteredColumns.find(c => c.usage === "image")?.sourceAttribute}
        descriptionKey={filteredColumns.find(c => c.usage === "description")?.sourceAttribute}
        showCount
      />
    </div>
  </>;
}

export default Lookup;
