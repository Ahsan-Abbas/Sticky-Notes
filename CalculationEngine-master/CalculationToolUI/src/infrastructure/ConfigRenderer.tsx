import { Fragment, ReactNode, useContext } from "react";
import { findVariable, getCurrentValue, getCurrentValueDisplayName, getGroupDisplayInfo, getIdWithoutPrefix, getVariableDisplayInfo, removeSectionRowAssignments } from "../utils/ace";
import { ConfigAssignmentContext, ConfigStateContext } from "./ConfigSessionProvider";
import ConfigVariableInput from "./ConfigVariableInput";
import Accordion, { IAccordionSection } from "../components/Accordion";
import Label from "../components/Label";
import React from "react";
import PageFlow from "./PageFlow";

const renderPageContent = (pageSection: Section, instanceId: string, pageDisplayInfo: IGroupDisplayInfo, state: IConfigState, interaction: IConfigInteraction): ReactNode => {
  return <div key={instanceId + "-" + pageSection.id} className="container">
    {renderSection(pageSection, instanceId, pageDisplayInfo, state, interaction)}
  </div>;
}

const renderSection = (section: Section, instanceId: string, groupDisplayInfo: IGroupDisplayInfo, state: IConfigState, interaction: IConfigInteraction): ReactNode => {
  let childSectionUis: ReactNode[] = [];
  let ignoreChildSections: string[] = [];
  let ignoreVariables = false;
  if (groupDisplayInfo.showAs === "Expand/collapse") {
    let acc = renderAccordion(section, instanceId, groupDisplayInfo, state, interaction);
    ignoreChildSections.push(acc.name);
    childSectionUis.push(acc.value);
  }
  else if (groupDisplayInfo.showAs === "Expand/collapse families") {
    let acc = renderFamilyAccordion(section, instanceId, groupDisplayInfo, state, interaction);
    childSectionUis.push(acc);
    ignoreVariables = true;
  }
  for (let s of section.sections) {
    const sectionDisplayInfo = getGroupDisplayInfo(s, groupDisplayInfo);
    const idWithoutPrefix = getIdWithoutPrefix(s.id);
    if (ignoreChildSections.some(cs => idWithoutPrefix.startsWith(cs)))
      continue;
    if (sectionDisplayInfo.show)
      childSectionUis.push(renderSection(s, instanceId, sectionDisplayInfo, state, interaction));
  }

  let classes: string[] = groupDisplayInfo.style.map(s => s.toLowerCase().replace(" ", "-"));
  let style: React.CSSProperties = {};
  if (groupDisplayInfo.width == "")
    classes.push("container");
  else
    style.width = `calc(${groupDisplayInfo.width} - (var(--column-spacing) / 2))`;

  return <div key={instanceId + "-" + section.id} data-section={section.id} className={classes.join(" ")} style={style}>
    {!ignoreVariables && section.variables.map(v => <ConfigVariableInput section={section} variable={v} key={instanceId + "-" + v.id} instanceId={instanceId} sectionDisplayInfo={groupDisplayInfo} />)}

    {childSectionUis}
  </div>;
}

const renderFamilyAccordion = (section: Section, instanceId: string, groupDisplayInfo: IGroupDisplayInfo, state: IConfigState, interaction: IConfigInteraction): ReactNode => {
  let accordionDefinition: AccordionFamilyDefinition | null = null;
  try {
    accordionDefinition = JSON.parse(groupDisplayInfo.showAsSpecification);
  }
  catch (err) {
    console.error("Unable to read the Accordion settings", groupDisplayInfo.showAsSpecification);
    return <></>;
  }
  if (accordionDefinition === null)
    return <></>;

  let accordions: ReactNode[] = [];

  for (let v of section.variables) {
    let info = getVariableDisplayInfo(v);
    if (!info.show)
      continue;

    let selectionCount = v.values.filter(val => val.assigned).length;
    accordions.push(
      <div className="col-1">
        <Accordion
          expandedIndex={(accordionDefinition.defaultExpandedFamilies?.some(id => id === v.id || id == getIdWithoutPrefix(v.id)) ?? false) ? 0 : undefined}
          header={{
            positionHorizontal: accordionDefinition.headerPositionHorizontal,
            textStyle: accordionDefinition.headerTextStyle
          }}
          sections={[{
            header: v.name + " " + (accordionDefinition.showSelectionCount && selectionCount) ? selectionCount.toString() : "",
            subHeader: "",
            content: <ConfigVariableInput
              section={section}
              variable={v}
              instanceId={instanceId}
              hideLabel
              sectionDisplayInfo={groupDisplayInfo}
            />
          }]}
        />
      </div>
    );
  }

  return <>{accordions}</>
}

const renderAccordion = (section: Section, instanceId: string, groupDisplayInfo: IGroupDisplayInfo, state: IConfigState, interaction: IConfigInteraction): NameValuePair<ReactNode> => {
  let accordionDefinition: AccordionDefinition | null = null;
  try {
    accordionDefinition = JSON.parse(groupDisplayInfo.showAsSpecification);
  }
  catch (err) {
    console.error("Unable to read the Accordion settings", groupDisplayInfo.showAsSpecification);
    return { name: "", value: <></> };
  }
  if (accordionDefinition === null)
    return { name: "", value: <></> };

  let indexVariable = findVariable(section, accordionDefinition.currentExpandedIndexVariable);

  let accordionSections: IAccordionSection[] = [];
  let childSections: Section[] = [];
  for (let s of section.sections) {
    let info = getGroupDisplayInfo(s, groupDisplayInfo);
    let idWithoutPrefix = getIdWithoutPrefix(s.id);
    if (!info.show || !idWithoutPrefix.startsWith(accordionDefinition.sectionName))
      continue; //skip sections that are hidden
    let subHeaderInfo = { ...info };
    if (typeof accordionDefinition.subHeaderColumns !== "undefined")
      subHeaderInfo.columns = accordionDefinition.subHeaderColumns;

    childSections.push(s);
    accordionSections.push({
      header: accordionDefinition.header.map(h => {
        if (typeof h.value !== "undefined")
          return h.value;
        if (typeof h.variable !== "undefined") {
          let hv = findVariable(s, h.variable);
          return getCurrentValueDisplayName(hv);
        }
      }).join(""),
      subHeader: <div className="container">{accordionDefinition.subHeader.map((vov, i) => {
        if (typeof vov.value !== "undefined")
          return (<div className={"col-" + (typeof accordionDefinition?.subHeaderColumns === "undefined" ? 1 : accordionDefinition?.subHeaderColumns)} key={"value-" + i}>
            <Label
              text={vov.value}
            />
          </div>);
        if (typeof vov.variable !== "undefined") {
          let v = findVariable(s, vov.variable);
          if (!v)
            return <Fragment key={vov.variable} />;
          return <ConfigVariableInput
            section={s}
            variable={v}
            instanceId={instanceId}
            sectionDisplayInfo={subHeaderInfo}
            alwaysShow
            key={vov.variable}
          />
        }
      })}</div>,
      content: renderSection(s, instanceId, info, state, interaction)
    });
  }
  let expandedIndex: number | undefined;
  if (indexVariable) {
    let val = getCurrentValue(indexVariable);
    if (typeof val !== "undefined" && typeof val.value === "number" && val.value > 0)
      expandedIndex = val.value;
  }

  return {
    name: accordionDefinition.sectionName,
    value: <div className="container" key={"accordion-" + accordionDefinition.sectionName}>
      <div className="col-1">
        <Accordion
          expandedIndex={typeof expandedIndex == "undefined" ? expandedIndex : (expandedIndex - 1)}
          onExpandCollapse={(index, expanded) => {
            expandedIndex = expanded ? index + 1 : 0;
            if (indexVariable) {
              if (typeof expandedIndex !== "undefined")
                interaction.assign(indexVariable.id, expandedIndex + "", instanceId);
              else
                interaction.unassign(indexVariable.id, instanceId);
            }
          }}
          sections={accordionSections}
          header={{
            textStyle: accordionDefinition.headerTextStyle,
            positionHorizontal: accordionDefinition.headerPositionHorizontal
          }}
          onDelete={accordionDefinition.delete?.enabled ? async i => {
            let asn = removeSectionRowAssignments(state.assignments, section, childSections[i], accordionDefinition!.sectionName);
            if (typeof accordionDefinition?.delete?.decrementOnDelete !== "undefined") {
              let dv = findVariable(section, accordionDefinition.delete.decrementOnDelete)
              if (dv) {
                let val = getCurrentValue(dv)?.value;
                if (typeof val === "number")
                  asn.push({
                    instanceId,
                    value: val - 1,
                    variableId: dv.id
                  });
              }
              else
                console.warn("Accordion: Can't find decrement variable '" + accordionDefinition.delete.decrementOnDelete + "'");
            }
            //console.log("Assignments to remove: ", asn);
            await interaction.assignMultiple(asn);
          } : void 0}
        />
      </div>
    </div>
  };
}

const renderPages = (state: IConfigState, interaction: IConfigInteraction): Page[] => {
  if (state.configuration.sections.length === 0)
    return [];
  let elms: Page[] = [];
  for (let section of state.configuration.sections) {
    const info = getGroupDisplayInfo(section);
    if (!info.show)
      continue;
    if (section.variables.length === 0 && section.sections.length === 1 && section.sections[0].type === "InstanceCollection") {
      elms.concat(section.sections[0].sections.map(s => ({
        section: s,
        content: <React.Fragment key={s.id}>{renderPageContent(s.sections[0], s.id, info, state, interaction)}</React.Fragment>
      })));
    }
    elms.push(({
      section,
      content: <React.Fragment key={section.id}>
        {renderPageContent(section, "ROOT", info, state, interaction)}
      </React.Fragment>
    }));
  }
  return elms;
}

export default function ConfigRenderer() {
  const configState = useContext(ConfigStateContext);
  const interaction = useContext(ConfigAssignmentContext);
  return (
    <PageFlow
      flow="paged"
      load={configState.input.load}
      pages={renderPages(configState, interaction)}
    />);
}
