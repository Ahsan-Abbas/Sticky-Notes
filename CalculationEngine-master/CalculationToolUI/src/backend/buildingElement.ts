import backend from "./backend";

export const getBuildingElementList = async (input: { elementType: string, group: string }) => {
  let res = await backend.post("/api/buildinginformation/building", input);
  return res.data;
}

export const getVariant = async (input: { buildingElementId: string, variantId: string }) => {
  let res = await backend.post("/api/buildinginformation/variant", input);
  return res.data;
}
