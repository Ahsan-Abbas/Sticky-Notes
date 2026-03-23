import { useContext, useState } from "react";
import { generateImage } from "../backend/imageGeneration";
import useDeepCompareEffect from "use-deep-compare-effect";
import { findChildModelSections, findVariable, getCurrentValue, getPropertyString } from "../utils/ace";
import Image from "../components/Image";
import { ConfigAssignmentContext } from "./ConfigSessionProvider";

interface IGeneratedImageProps {
  variable: Variable;
  section: Section;
  info: IVariableDisplayInfo;
  instanceId: string;
}

const getVariableNumberValueOrError = (section: Section, id: string, fieldName: string): number => {
  let v = findVariable(section, id);
  if (typeof v === "undefined")
    throw `Error finding ${fieldName} "${id}"`;
  let val = getCurrentValue(v);
  if (typeof val === "undefined")
    throw `Error finding value for ${fieldName} "${id}"`;
  if (v.valueType !== "Number" || typeof val.value !== "number")
    throw `${fieldName} needs to contain a number value "${id}"`;
  return val.value;
}

export const getImageGenerationStructureString = (section: Section, info: IVariableDisplayInfo): string | null => {
  try {
    let structure = getImageGenerationStructureWithProperties(section, JSON.parse(info.showAsSpecification), "", false);
    if (structure == null)
      return null;
    return "pip://" + JSON.stringify(structure);
  }
  catch (err) {
    return null;
  }
}
const getImageGenerationStructureWithProperties = (section: Section, definition: PictureOnPictureDefinition, currentValue: string, logErrors: boolean): PictureOnPictureImageGenerationModel | null => {
  try {
    let structure: PictureOnPictureImageGenerationModel = {
      dimensions: {
        width: getVariableNumberValueOrError(section, definition.width, "Width"),
        height: getVariableNumberValueOrError(section, definition.height, "Height")
      },
      layers: findChildModelSections(section, definition.layerSection)
        .filter(s => getPropertyString(getCurrentValue(findVariable(s, definition.imageVariable)), "IMAGE"))
        .map<ImageGenerationLayer>(s => ({
          layerPosition: getVariableNumberValueOrError(s, definition.layerNumber, "Layer Number"),
          visible: 1,
          path: getPropertyString(getCurrentValue(findVariable(s, definition.imageVariable)), "IMAGE") || "",
          position: {
            x: getVariableNumberValueOrError(s, definition.positionX, "Position X"),
            y: getVariableNumberValueOrError(s, definition.positionY, "Position Y")
          }
        }
        )),
      coordinateBase: definition.coordinateBase || "TopLeft"
    };
    return structure;
  }
  catch (err) {
    if (currentValue.indexOf("pip://") === 0) {
      try {
        return JSON.parse(currentValue.substring(6));
      }
      catch (err2) {
        if (logErrors)
          console.log("Picture-on-picture: Unable to fall back to saved value ", currentValue)
      }
    }
    if (logErrors)
      console.warn("Picture-on-picture: " + err);
    return null;
  }
}

const GeneratedImage = ({ variable, section, info, instanceId }: IGeneratedImageProps) => {
  const { assign } = useContext(ConfigAssignmentContext);
  const [definition, _] = useState<PictureOnPictureDefinition>(() => {
    try {
      return JSON.parse(info.showAsSpecification);
    }
    catch (err) {
      console.warn("Picture-on-picture: unable to parse show-as specification", info.showAsSpecification)
      return null;
    }
  });
  const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/400x200");

  let structure = getImageGenerationStructureWithProperties(section, definition, info.valueText, true);
  useDeepCompareEffect(() => {
    if (structure != null)
      generateImage(structure).then(result => {
        if (typeof result !== "undefined") {
          setImageUrl(result);
          assign(variable.id, "pip://" + JSON.stringify(structure), instanceId);
        }
      });
  }, [structure, {}]); //this includes an empty object, as useDeepCompareEffect will throw an error if called only with primitives (in case structure is null)

  return <Image
    src={imageUrl}
    controlPositionHorizontal={info.controlPositionHorizontal}
    onLoad={() => window.URL.revokeObjectURL(imageUrl)}
  />;
}

export default GeneratedImage;
