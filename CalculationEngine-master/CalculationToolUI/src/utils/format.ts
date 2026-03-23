import { getCurrentValue, getValueDisplayName } from "./ace";

var lang: string;
export const setLanguage = (language: string) => lang = language;

export const format = (value: string | number | boolean | undefined, options?: FormattingInfo) => {
  if (typeof options === "undefined")
    return value;
  if (typeof options.number !== "undefined" && typeof value === "number") {
    try {
      return Intl.NumberFormat(lang, options.number).format(value);
    }
    catch (err) {
      console.error("Unable to format number", err);
    }
  }
  return value;
}

export const getFormatOptions = (variable: Variable): FormattingInfo | undefined => {
  if (variable.valueType === "Number" && variable.scale !== null) {
    return {
      number: {
        maximumFractionDigits: variable.scale,
        minimumFractionDigits: variable.scale
      }
    };
  }
}

export const formatVariableValue = (v: Variable, formatting: FormattingInfo | undefined): string => {
  let val = getCurrentValue(v);
  if (typeof val === "undefined")
    return "";
  let formatted = getValueDisplayName(val);
  if (typeof formatting !== "undefined")
    formatted = format(val.value, formatting)?.toString() ?? formatted;
  let uom = v.properties.find(p => p.id === "UNIT_OF_MEASURE")?.value;
  if (typeof uom !== "undefined")
    formatted += " " + uom;
  return formatted;
}
