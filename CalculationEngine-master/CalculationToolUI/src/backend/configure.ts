import backend from "./backend";

export const configure = async (packageVersion: string, workItem: number | null, req: AceConfigureRequest, language: string, signal: AbortSignal) => {
  let res = await backend.post<ConfigureResponse>("/api/configure/configure", {
    packageVersion,
    workItem,
    aceConfigureRequest: req,
    language: language
  }, { signal });
  return res.data;
}

export const configureSampleOrder = async (req: AceConfigureRequest, signal: AbortSignal, workItem: number | null) => {
  let res = await backend.post<ConfigureResponse>("/api/configure/configure", {
       aceConfigureRequest: req,
       workItem
  }, { signal });
  return res.data;
}

export const getProductModels = async () => {
  let res = await backend.get<AceProductsResponse>("/api/configure/products");
  return res.data;
}

export const getProductModelInfo = async (productId: string) => {
  let res = await backend.get<AceProductResponse>("/api/configure/product?productId=" + productId);
  return res.data;
}
