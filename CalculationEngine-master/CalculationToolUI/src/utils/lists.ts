import { findVariable, getCurrentValueInternalName } from "./ace";

export const getDistinctFilter = (key: string) =>
  (value: Record<string, any>, index: number, arr: Record<string, any>[]) => arr.findIndex(v => v[key] === value[key]) === index;

export const distinctFilter = (value: Record<string, any>, index: number, arr: Record<string, any>[]) =>
  arr.indexOf(value) === index;

export const getMatching = (matching: string | undefined, section: Section): FilterMatching => {
  if (!matching)
    return "All";
  if (matching === "All" || matching === "Any")
    return matching;
  const v = section.variables.find(v => v.id === matching);
  if (v) {
    const val = getCurrentValueInternalName(v);
    if (!val)
      return "All";
    if (val === "All" || val === "Any")
      return val;
  }
  return "All";
}

export const matchesFilter = (matching: FilterMatching, conditions: Condition[] | undefined, section: Section): boolean => {
  if (!conditions || conditions.length === 0)
    return true;
  if (matching === "All")
    return matchesAll(conditions, section);
  else
    return matchesAny(conditions, section);
}

export const matchesAny = (conditions: Condition[], section: Section): boolean => {
  for (let condition of conditions) {
    let v = findVariable(section, condition.configAttribute);
    if (v) {
      let val = getCurrentValueInternalName(v);
      switch (condition.comparison) {
        case "=":
          if (val == condition.value)
            return true;
          break;
        case "!=":
          if (val != condition.value)
            return true;
          break;
        case "<":
          if (val < condition.value)
            return true;
        case "<=":
          if (val <= condition.value)
            return true;
          break;
        case ">":
          if (val > condition.value)
            return true;
          break;
        case ">=":
          if (val >= condition.value)
            return true;
          break;
      }
    }
  }
  return false;
}

export const matchesAll = (conditions: Condition[], section: Section): boolean => {
  for (let condition of conditions) {
    let v = findVariable(section, condition.configAttribute);
    if (v) {
      let val = getCurrentValueInternalName(v);
      switch (condition.comparison) {
        case "=":
          if (val != condition.value)
            return false;
          break;
        case "!=":
          if (val == condition.value)
            return false;
          break;
        case "<":
          if (val >= condition.value)
            return false;
        case "<=":
          if (val > condition.value)
            return false;
          break;
        case ">":
          if (val <= condition.value)
            return false;
          break;
        case ">=":
          if (val < condition.value)
            return false;
          break;
      }
    }
  }
  return true;
}

export const sortList = (list: Record<string, any>[], sorting: LookupField[]): Record<string, any>[] => {
  if (sorting.length == 0)
    return list;
  return list.sort((a, b) => {
    for (let sort of sorting) {
      //TODO: also support sorting child objects
      let sa = a[sort.sourceAttribute], sb = b[sort.sourceAttribute];
      let diff = compare(sa, sb);
      if (diff != 0)
        return sort.value === "Ascending" ? diff : -diff;
    }
    return 0;
  })
}

export const compare = (a: any, b: any): number => {
  if (typeof a === "string" && typeof b === "string")
    return a.localeCompare(b);
  else if (a < b)
    return -1;
  else if (a > b)
    return 1;
  return 0;
}
