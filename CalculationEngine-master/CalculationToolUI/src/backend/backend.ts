import axios from "axios";
import questionmark from "../assets/question-mark.svg"
import blockView from "../assets/block-view.svg";
import listView from "../assets/list-view.svg";
import arrowLeft from "../assets/arrow-left.svg";
import arrowRight from "../assets/arrow-right.svg";
import trash from "../assets/trash.svg";
import warningIcon from "../assets/Warning.svg";
import reset from "../assets/arrow-rotate-left-solid.svg";
import rightTic from "../assets/right-tic.svg"
let base = "";
try {
  base = new URL(import.meta.url).origin;
}
catch (err) {
  console.warn("Unable to find script base url", err);
}

export const getPublicUrl = (resource: string): string =>
  base + (resource.startsWith("/") ? "" : "/") + resource;

const backend = axios.create({
  withCredentials: false, //Can't be true with CORS Access-Control-Allow-Origin set to *
  baseURL: base
});

export default backend;

//asset urls are resolved when needed using getters, in case code need to change the base of the calls (storybook needs this)
export const assets = {
  get questionmark() { return getPublicUrl(questionmark) },
  get blockView() { return getPublicUrl(blockView) },
  get listView() { return getPublicUrl(listView) },
  get arrowLeft() { return getPublicUrl(arrowLeft) },
  get arrowRight() { return getPublicUrl(arrowRight) },
  get trash() { return getPublicUrl(trash) },
  get warningIcon() { return getPublicUrl(warningIcon) },
  get reset() { return getPublicUrl(reset) },
  get rightTic() { return getPublicUrl(rightTic) },
};

export const setBase = (newBase: string) => base = newBase;
