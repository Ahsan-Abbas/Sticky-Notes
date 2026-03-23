import { useContext, useState } from "react";
import { findChildModelSections, findSection, findSectionByPath, findVariable, getCurrentValue, getCurrentValueInternalName, getGroupDisplayInfo, getIdWithoutPrefix, removeSectionRowAssignments } from "../utils/ace";
import ListView from "../components/ListView";
import { ConfigAssignmentContext, ConfigStateContext } from "./ConfigSessionProvider";
import { formatVariableValue } from "../utils/format";

interface IConfigTableProps {
  section: Section;
  instanceId: string;
  variable: Variable;
  definitionText: string;
}

const getData = (definition: TableDefinition, columns: IListViewColumn[], section: Section): { data: Record<string, any>[], childSections: Section[] } => {
  let data: Record<string, any>[] = [];

  if (typeof (definition.section) !== "undefined")
    section = findSection(section, definition.section) || section;

  let childSections = findChildModelSections(section, definition.model);

  for (let sect of childSections) {
    let show = false;
    let header = findVariable(sect, definition.header);
    if (typeof header !== "undefined")
      show = "" != getCurrentValueInternalName(findVariable(sect, definition.header));
    else
      show = getGroupDisplayInfo(sect).show;
    if (!show)
      continue;
    let row: Record<string, any> = {};
    for (let col of columns) {
      let v = findVariable(sect, col.value);
      let val = "";
      if (v)
        val = formatVariableValue(v, col.formatting);
      row[col.value] = val;
    }
    data.push(row);
  }
  return { data, childSections };
}

const getColumns = (definition: TableDefinition, section: Section): IListViewColumn[] => {
  let cols = definition.columns.map<IListViewColumn>(c => {
    let v = findVariable(section, c.configAttribute);
    return {
      name: v?.name || c.configAttribute,
      value: c.configAttribute,
      formatting: c.formatting
    };
  });//TODO: filter based on conditions
  if (definition.delete?.enabled)
    cols.push({
      name: "",
      value: "",
      functionality: "delete"
    });
  return cols;
}

const findDataPageId = (path: string | string[] | undefined, sections: Section[]): string | undefined => {
  if (typeof path !== "undefined" && path.length > 0)
    return sections.find(s => getIdWithoutPrefix(s.id) === path[0])?.id;
}

const ConfigTable = ({ section, definitionText }: IConfigTableProps) => {
  const [definition, _] = useState<TableDefinition>(() => {
    try {
      return JSON.parse(definitionText);
    }
    catch (err) {
      console.warn("Show As Table: unable to parse table definition", definitionText);
      return <></>;
    }
  });
  const { assignMultiple } = useContext(ConfigAssignmentContext);
  const state = useContext(ConfigStateContext);

  let dataSection = section;
  if (typeof definition.dataPath !== "undefined") {
    let tempSection = findSectionByPath(state.configuration.sections, definition.dataPath);
    if (tempSection)
      dataSection = tempSection;
    else {
      console.warn("Show As Table: unable to find the section for the data", definition.dataPath);
      return <></>;
    }
  }

  let cols = getColumns(definition, dataSection);
  let { data, childSections } = getData(definition, cols, dataSection);

  return <ListView
    data={data}
    columns={cols}
    views={Array.isArray(definition.type) ? definition.type : [definition.type]}
    imageKey={definition.image || ""}
    selectionUpperLimit={0}
    onDelete={definition.delete?.enabled ? async row => {
      //TODO: refactor to remove code duplicated from renderAccordion
      let i = data.findIndex(a => a[definition.header] === row[definition.header]);

      let parent = dataSection;
      if (typeof (definition.section) !== "undefined")
        parent = findSection(dataSection, definition.section) || dataSection;
      let asn = removeSectionRowAssignments(state.assignments, parent, childSections[i], definition.model);
      if (typeof definition.delete?.decrementOnDelete !== "undefined") {
        let dv = findVariable(dataSection, definition.delete.decrementOnDelete);
        if (dv) {
          let val = getCurrentValue(dv)?.value;
          if (typeof val === "number")
            asn.push({
              instanceId: "ROOT", //TODO: handle dynamic instances
              value: val - 1,
              variableId: dv.id
            });
        }
        else
          console.warn("Show As Table: Can't find decrement variable '" + definition.delete.decrementOnDelete + "'");
      }
      await assignMultiple(asn, findDataPageId(definition.dataPath, state.configuration.sections));
    } : void 0}
  />;
}

export default ConfigTable;
