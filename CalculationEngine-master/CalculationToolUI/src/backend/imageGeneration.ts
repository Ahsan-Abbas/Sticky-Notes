import backend from "./backend";

export const generateImage = async (req: PictureOnPictureImageGenerationModel): Promise<string> => {

  let res = await backend.post<Blob>("/api/imagegeneration",
    req,
    { responseType: "blob" });
  const url = window.URL.createObjectURL(res.data);
  return url;
}

