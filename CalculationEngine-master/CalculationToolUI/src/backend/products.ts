import backend from "./backend";

export const findProducts = async (channelId: string, filters: LookupField[], resultColumns: LookupField[], sorting: LookupField[], language: string): Promise<Record<string, any>[]> => {
  let res = await backend.post("/api/products", {
    channelId,
    filters,
    resultColumns,
    sorting,
    language
  });

  if ("ErrorMessages" in res.data) {
    console.error("Error returned from PIM lookup", res.data);
    return [];
  }

  let data = res.data;
  for (let row of data) {
    for (let col of resultColumns)
      row[col.sourceAttribute] = getLookupObjectValue(row, col.sourceAttribute);
  }
  return data;
}

export const getLookupObjectValue = (row: Record<string, any>, key: string) => {
  let res: any = row;
  let path = key.replaceAll("}", "").split("{")
  for (let p of path)
    if (typeof res !== "undefined" && res !== null && typeof p !== "undefined")
      res = res[p.trim()];
  return res;
}
