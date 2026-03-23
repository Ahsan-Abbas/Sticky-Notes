import backend from "./backend";

export const createOrUpdateLead = async (data: Record<string, any>): Promise<void> => {
  let res = await backend.post("/api/marketing", data);
  if (res.data.success !== true)
    console.error("Error marketing response", res.data);
}

export const submitSampleOrder = (data: Record<string, any>): Promise<any> => {
  return new Promise(async (resolve, reject)=>{
    let res = await backend.post("/api/marketing", data);
    if (res.data.success){
      resolve(res);
    }else{
      reject(res)
    }
  })
}
