import { AxiosResponse } from "axios";
import backend from "./backend";

let translations: Record<string, string> = {};
let pm: Promise<AxiosResponse<Record<string, string>, any>>;

export const loadTranslations = async (language: string) => {
  setTranslations();
  pm = backend.post<Record<string, string>>("/api/translations", { language });
  setTranslations({
    ...translations,
    ...(await pm).data
  });
}

export const setTranslations = (newTranslations: Record<string, string> = {
  next: "Next",
  previous: "Back",
  noData: "No data found",
  error: "Something went wrong",
  listCount: "{0} found",
  reset: "Reset",
  tablePagingPagePrefix: "Page",
  tablePagingPageSuffix: "of {0}",
  tablePagingPrevious: "Previous",
  tablePagingNext: "Next"
}) =>
  translations = newTranslations;

export const translate = async (key: string): Promise<string> => {
  if (Object.keys(translations).length == 0)
    await pm;
  return translations[key];
}
