import { compare } from "../utils/lists";

export const getCurrentValueInternalName = (variable: Variable | undefined): string =>
  getValueInternalName(getCurrentValue(variable));

export const getCurrentValueDisplayName = (variable: Variable | undefined): string =>
  getValueDisplayName(getCurrentValue(variable));

export const getValueInternalName = (value: Value | undefined): string =>
  value?.value?.toString() || "";

export const getValueDisplayName = (value: Value | undefined): string =>
  value?.name?.toString() || "";

export const getCurrentValue = (variable: Variable | undefined): Value | undefined =>
  variable?.values?.find(v => v.assigned);

export const getPropertyValue = (o: { properties: Property[] } | undefined, propertyId: string): string | undefined =>
  o?.properties.find(p => p.id === propertyId)?.value?.toString();

export const getVariableDisplayInfo = (variable: Variable | undefined): IVariableDisplayInfo => {
  let val = getCurrentValue(variable);
  let info: IVariableDisplayInfo = {
    action: "",
    show: true,
    showAs: "Default",
    showAsSpecification: "",
    unitOfMeasure: "",
    mandatory: false,
    readOnly: variable?.readOnly ?? false,
    image: "",
    currentValue: val,
    values: variable?.values.filter(v => v.type === "SingletonValue") ?? [],
    valueText: getValueInternalName(val),
    textStyleFeature: "Normal",
    textStyleFamily: "Normal",
    controlPositionHorizontal: "Left",
    //controlPositionVertical: "Top",
    labelAlignment: "Left",
    labelPosition: "Top",
    featureSorting: "Alphanumeric",
    incompatibleValues: "Show Last",
    spacingAfter: 0,
    spacingBefore: 0
  };
  if (typeof variable === "undefined")
    return info;

  for (let p of variable.properties) {
    if (p.id === "SHOW_HIDE_FAMILY") {
      if (p.value === "Hide")
        info.show = false;
    }
    else if (p.id === "SHOW_AS") {
      switch (p.value) {
        case "Tile":
        case "Tile with description":
        case "Dropdown":
        case "Radio Button":
        case "Button":
        case "Checkbox":
        case "Lookup":
        case "Label only":
        case "Table":
        case "Image":
        case "Value as label":
        case "Picture-on-picture":
        case "Bullet list":
          info.showAs = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "SHOW_AS_SPECIFICATION") {
      if (p.value != null && typeof p.value === "string")
        info.showAsSpecification = p.value;
    }
    else if (p.id === "UNIT_OF_MEASURE") {
      if (p.value != null && typeof p.value === "string")
        info.unitOfMeasure = p.value;
    }
    else if (p.id === "MANDATORY") {
      if (p.value === "True")
        info.mandatory = true;
    }
    else if (p.id === "READ_ONLY") {
      if (p.value === true)
        info.readOnly = true;
    }
    else if (p.id === "IMAGE") {
      if (p.value != "" && typeof p.value === "string")
        info.image = p.value;
    }
    else if (p.id === "CONTROL_POSITION_HORIZONTAL") {
      switch (p.value) {
        case "Center":
        case "Right":
        case "Left":
          info.controlPositionHorizontal = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    /*else if (p.id === "CONTROL_POSITION_VERTICAL") {
      switch (p.value) {
        case "Top":
        case "Center":
        case "Bottom":
          info.controlPositionVertical = p.value;
          break;
        default:
          logUnknown(p);
      }
    }*/
    else if (p.id === "TEXT_STYLE_FEATURE") {
      switch (p.value) {
        case "Normal":
        case "H1":
        case "H2":
        case "H3":
        case "No label":
        case "Warning":
        case "Long text":
          info.textStyleFeature = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "TEXT_STYLE_FAMILY") {
      switch (p.value) {
        case "Normal":
        case "H1":
        case "H2":
        case "H3":
        case "No label":
        case "Warning":
        case "Long text":
          info.textStyleFamily = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "LABEL_ALIGNMENT") {
      switch (p.value) {
        case "Center":
        case "Right":
        case "Left":
          info.labelAlignment = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "LABEL_POSITION") {
      switch (p.value) {
        case "Left":
        case "Center":
        case "Right":
        case "Top":
        case "Bottom":
          info.labelPosition = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "FEATURE_SORTING") {
      switch (p.value) {
        case "Alphanumeric":
        case "Custom":
          info.featureSorting = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "INCOMPATIBLE_VALUES") {
      switch (p.value) {
        case "Hide":
        case "Show Mixed":
        case "Show Last":
          info.incompatibleValues = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    else if (p.id === "SPACING_AFTER") {
      if (typeof p.value === "number")
        info.spacingAfter = p.value;
      else
        logUnknown(variable.id, p);
    }
    else if (p.id === "SPACING_BEFORE") {
      if (typeof p.value === "number")
        info.spacingBefore = p.value;
      else
        logUnknown(variable.id, p);
    }
    else if (p.id === "ACTION") {
      switch (p.value) {
        case "":
        case "Reset":
        case "Send to Marketo":
        case "Go_To":
          info.action = p.value;
          break;
        default:
          logUnknown(variable.id, p);
      }
    }
    //Log unknown properties
    else if (p.id !== "ACTION_SPECIFICATION" && p.id !== "ANALYTICS_TRACKING" && p.id !== "COLUMN_AMOUNT" && p.id !== "SHOW_HIDE_GROUP" && !p.id.startsWith("SOURCE_SYSTEM_ID_") && !p.id.startsWith("SECTION_") && p.id !== "PAGE_CONTROL") {
      logUnknown(variable.id, p);
    }
  }

  if (info.showAs === "Default") {
    if (variable.valueType === "Boolean")
      info.showAs = "Checkbox";
    else if (variable.valueType !== "Number" && variable.values.length > 0 && variable.values[0].type === "SingletonValue")
      info.showAs = "Dropdown";
  }

  //apply sorting
  if (info.showAs === "Tile" || info.showAs === "Tile with description" || info.showAs === "Radio Button" || info.showAs === "Dropdown") {
    info.values = sortAndFilterValues(info.values, info.featureSorting, info.incompatibleValues);
  }
  return info;
}

const logUnknown = (id: string, p: Property) => console.log("Unknown property on '" + id + "': " + p.id + " = " + p.value + " (" + p.type + ")");

const sortAndFilterValues = (values: Value[], featureSorting: FeatureSorting, incompatibleValues: IncompatibleValues): Value[] => {
  if (incompatibleValues === "Hide")
    values = values.filter(v => !v.incompatible)

  if (featureSorting === "Alphanumeric" && incompatibleValues === "Show Last") {
    values.sort((a, b) => {
      if (a.incompatible && !b.incompatible)
        return 1;
      if (!a.incompatible && b.incompatible)
        return -1;
      return compare(a.name, b.name);
    });
  }
  else if (featureSorting === "Alphanumeric") {
    values.sort((a, b) => compare(a.name, b.name));
  }
  return values;
}

export const getGroupDisplayInfo = (section: Section, parentInfo: IGroupDisplayInfo = {
  columns: 1,
  show: true,
  showAs: "Normal",
  showAsSpecification: "",
  width: "",
  style: []
}): IGroupDisplayInfo => {
  let info: IGroupDisplayInfo = {
    ...parentInfo,
    style: [...parentInfo.style],
    //These should not be inherited:
    showAs: "Normal",
    width: ""
  };
  let v = findFirstVariable(section);
  if (v) {
    for (let p of v.properties) {
      if (p.id === "COLUMN_AMOUNT") {
        if (typeof p.value === "number")
          info.columns = p.value;
        else if (typeof p.value === "string")
          info.columns = Number(p.value);
      }
      else if (p.id === "SHOW_HIDE_GROUP") {
        if (p.value === "Hide")
          info.show = false;
      }
      else if (p.id === "SECTION_SHOW_AS") {
        switch (p.value) {
          case "Expand/collapse":
          case "Normal":
            info.showAs = p.value;
        }
      }
      else if (p.id === "SECTION_SHOW_AS_SPECIFICATION") {
        if (typeof p.value === "string") {
          info.showAsSpecification = p.value;
        }
      }
      else if (p.id === "SECTION_STYLE") {
        if (typeof p.value === "string") {
          let styles = p.value.split("+").map(s => s.trim());
          for (let style of styles) {
            switch (style) {
              case "Horizontal lines":
              case "Highlight background":
                info.style.push(style);
            }
          }
        }
      }
      else if (p.id === "SECTION_WIDTH") {
        if (typeof p.value === "string")
          info.width = p.value.replaceAll(" ", "");
      }
    }
  }
  return info;
}

/** Finds a variable based on the id, either in current section or child sections. */
export const findVariable = (section: Section, id: string): Variable | undefined => {
  const idSuffix = "." + id;
  let v = section.variables.find(v => v.id === id || v.id.endsWith(idSuffix));
  if (v)
    return v;
  for (let s of section.sections) {
    v = findVariable(s, id);
    if (v)
      return v;
  }
}

/** Finds a section based on the id, either in current section or child sections. */
export const findSection = (section: Section, id: string): Section | undefined => {
  const idSuffix = "." + id;
  let s = section.sections.find(s => s.id === id || s.id.endsWith(idSuffix));
  if (s)
    return s;
  for (let childSection of section.sections) {
    s = findSection(childSection, id);
    if (s)
      return s;
  }
}

export const findSectionByPath = (sections: Section[], path: string | string[]): Section | null => {
  let pathArr = Array.isArray(path) ? path : [path];
  let searchSections = [...sections];

  for (let outputIdx = 0; outputIdx < pathArr.length; outputIdx++) {
    const outId = getIdWithoutPrefix(pathArr[outputIdx]);
    let found = false;
    for (let searchIdx = 0; searchIdx < searchSections.length; searchIdx++) {
      let sect = searchSections[searchIdx];
      if (getIdWithoutPrefix(sect.id) === outId) {
        if (outputIdx === pathArr.length - 1)
          return sect;
        searchSections = [sect];
        found = true;
        break;
      }
      searchSections.push(...sect.sections);
    }
    if (!found)
      return null;
  }
  return null;
}

export const findFirstVariable = (section: Section): Variable | undefined => {
  if (section.variables.length > 0)
    return section.variables[0];
  for (let s of section.sections) {
    let v = findFirstVariable(s);
    if (typeof v !== "undefined")
      return v;
  }
}


export const getPropertyString = (v: { properties: Property[] } | undefined, propertyName: string): string | undefined => {
  let p = v?.properties.find(p => p.id === propertyName);
  if (p && typeof p.value === "string" && p.value) {
    return p.value;
  }
}

const NUMBER_ONLY = /^[0-9]{1,}$/;

export const findChildModelSections = (section: Section, model: string): Section[] => {
  section = section.sections.find(s => s.id.endsWith(model)) || section; //if child models have been grouped together, look in that section
  return section.sections.filter(s => {
    let idx = s.id.lastIndexOf("." + model + "_");
    if (idx === -1)
      return false;
    return NUMBER_ONLY.test(s.id.substring(idx + model.length + 2));
  });
}

type Structure = {
  [K: string]: string | Structure;
}

type VStructure = {
  [K: string]: VStructure | Structure;
}

export const getConfigStructure = (sections: Section[]): Structure => {
  let structure = {} as Structure;
  for (let s of sections) {
    let ss = getConfigStructure(s.sections);
    for (let v of s.variables)
      ss[v.id] = getCurrentValueInternalName(v);
    structure[s.id] = ss;
  }
  return structure;
}

export const getConfigStructureWithProperties = (sections: Section[]): VStructure => {
  let structure = {
    variables: {}
  } as VStructure;
  for (let s of sections) {
    let ss = getConfigStructureWithProperties(s.sections);
    for (let v of s.variables) {
      let val = getCurrentValue(v);
      ss.variables[getIdWithoutPrefix(v.id)] = {
        name: v.name,
        description: v.description ?? "",
        value: getValueInternalName(val),
        valueName: val?.name ?? "",
        valueProperties: typeof val === "undefined" ? {} : getPropertiesMap(val.properties),
        properties: getPropertiesMap(v.properties)
      };
    }
    if (Object.keys(ss.variables).length == 0) {
      delete ss.variables;
      let sKeys = Object.keys(ss);
      //If section contains no variables and only a single child section, assume it is a view section and remove from the structure to avoid awkward naming (e.g. "VIEW_1", "VIEW_1_1", "VIEW_1_2")
      if (sKeys.length === 1)
        ss = ss[sKeys[0]] as VStructure;
    }
    structure[getIdWithoutPrefix(s.id)] = ss;
  }
  return structure;
}

export const getIdWithoutPrefix = (id: string): string => {
  let parts = id.split(".");
  return parts[parts.length - 1];
}

const getPropertiesMap = (properties: Property[]): Structure => {
  let props: Structure = {};
  for (let p of properties)
    props[p.id] = p.value?.toString();
  return props;
}

export const getVariablesWithProperty = (sections: Section[], propertyId: string): Variable[] => {
  let vs: Variable[] = [];
  for (let s of sections) {
    vs.push(...s.variables.filter(v => v.properties.some(p => p.id === propertyId && typeof p.value !== "undefined" && p.value !== null && p.value !== "")));
    vs.push(...getVariablesWithProperty(s.sections, propertyId));
  }
  return vs;
}

export const mapVariableIdToPropertyValue = (sections: Section[], propertyId: string, map?: Record<string, string | number | boolean | Date>): Record<string, string | number | boolean | Date> => {
  map = map || {};
  for (let s of sections) {
    for (let v of s.variables) {
      let p = v.properties.find(p => p.id === propertyId);
      if (typeof p !== "undefined")
        map[v.id] = p.value;
    }
    mapVariableIdToPropertyValue(s.sections, propertyId, map);
  }
  return map;
}

export const isValidNumberValue = (num: number, v: Variable): boolean => {
  if (v.valueType !== "Number")
    return false;

  for (let val of v.values) {
    if (val.type === "SingletonValue" && !val.incompatible && val.value === num)
      return true;
    if (val.type === "IntervalValue" && !val.incompatible
      && ((typeof val.lower !== "undefined" && num >= val.lower!) || val.isLowerInfinity === true)
      && ((typeof val.upper !== "undefined" && num <= val.upper!) || val.isUpperInfinity === true))
      return true;
  }
  return false;
}

//TODO: handle dynamic instances
/**
 * Creates a list of assignments to be made in order to remove a section, moving the assignments of the following sections up one position
 * @param assignments Current list of assignments
 * @param parent The section that contains the section to remove
 * @param remove The section that should have its selections removed
 * @param model The name of the child model, in case the parent contains other sections that should be ignored
 * @returns The list of assignments needed to be made to remove the section
 */
export const removeSectionRowAssignments = (assignments: Assignment[], parent: Section, remove: Section, model: string): IAssignment[] => {
  let newAssignments: IAssignment[] = [];
  let found = false;
  let childSections = findChildModelSections(parent, model);
  for (let i = 0; i < childSections.length; i++) {
    let section = childSections[i];
    if (section.id === remove.id) {
      found = true;
      let vars = getVariables(section);
      for (let v of vars) {
        let asn = assignments.find(a => a.variableId === v.id);
        if (asn && asn.variableId) {
          newAssignments.push({
            instanceId: "ROOT",
            variableId: asn.variableId,
            value: null
          });
        }
      }
    }
    else if (found) {
      let vars = getVariables(section);
      for (let v of vars) {
        let asn = assignments.find(a => a.variableId === v.id);
        if (asn && asn.variableId) {
          //assignment found - move to previous section
          let prevVar = findVariable(childSections[i - 1], getIdWithoutPrefix(asn.variableId));
          if (typeof prevVar === "undefined") {
            console.warn("Unable to find previous variable");
            return [];
          }
          let newId = prevVar.id;
          newAssignments = newAssignments.filter(n => n.variableId !== newId);
          let newAsn: IAssignment = {
            instanceId: "ROOT",
            variableId: newId,
            value: null
          };
          newAsn.value = asn.value;
          newAssignments.push(newAsn);
          newAssignments.push({
            instanceId: "ROOT",
            variableId: asn.variableId,
            value: null
          });
          if (newAsn.variableId === asn.variableId)
            console.warn("Unable to move assignment to previous section: " + newAsn.variableId);
        }
      }
    }
  }
  newAssignments.sort((a, b) => compare(a.variableId, b.variableId));
  return newAssignments;
}

export const getVariables = (section: Section, arr?: Variable[]): Variable[] => {
  arr = arr || [];

  arr.push(...section.variables);
  for (let s of section.sections)
    getVariables(s, arr);

  return arr;
}

export const getActionSpecificationOrEmpty = (fv: Variable): any => {
  let spec = fv.properties.find(p => p.id == "ACTION_SPECIFICATION")?.value;
  if (typeof spec !== "undefined" && typeof spec === "string" && spec != "")
    try {
      return JSON.parse(spec);
    }
    catch { }
  return {};
}
