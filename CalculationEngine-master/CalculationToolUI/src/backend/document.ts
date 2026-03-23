import backend from "./backend";
import { getConfigStructureWithProperties } from "../utils/ace";

export const generateDocument = async (template: string, fileName: string | undefined, sections: Section[]): Promise<void> => {
  let res = await backend.post<Blob>("/api/documentgenerator", {
    template,
    fileName,
    jsonData: JSON.stringify(getConfigStructureWithProperties(sections))
  }, { responseType: "blob" });

  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(res.data);
  a.download = getFileName(res.headers["content-disposition"]) || "Report.pdf";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }, 1000 * 60); //Revoking the url after a minute to avoid leaking memory
}

const matchFileName = /^\s*filename\s*$/i;

const getFileName = (contentDisposition?: string): string | null => {
  let dispositions = contentDisposition?.split(";");
  if (!dispositions)
    return null;
  for (let p of dispositions) {
    let ps = p.split("=");
    if (ps.length == 2 && matchFileName.test(ps[0]) && ps[1] != null && ps[1].length > 0)
      return ps[1].replaceAll("\"", "").replaceAll("'", "");
  }
  return null;
}
