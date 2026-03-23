import { useContext } from "react";
import Button from "../components/Button";
import Checkbox from "../components/Checkbox";
import Input from "../components/Input";
import Label from "../components/Label";
import Radio from "../components/Radio";
import Select from "../components/Select";
import Tiles from "../components/Tiles";
import Image from "../components/Image";
import { getActionSpecificationOrEmpty, getPropertyString, getVariableDisplayInfo } from "../utils/ace";
import { ConfigAssignmentContext, ConfigStateContext } from "./ConfigSessionProvider";
import Lookup from "./Lookup";
import LabelInputLayout from "../components/LabelInputLayout";
import GeneratedImage, { getImageGenerationStructureString } from "./GeneratedImage";
import { handleActionTrigger } from "../backend/integrations";
import ConfigTable from "./ConfigTable";
import { assets } from "../backend/backend";
import BulletList from "../components/BulletList";

export interface IConfigVariableInputProps {
  section: Section;
  variable: Variable;
  instanceId: string;
  sectionDisplayInfo: IGroupDisplayInfo;
  alwaysShow?: boolean;
  hideLabel?: boolean;
}

export default function ConfigVariableInput({ section, variable, instanceId, sectionDisplayInfo, alwaysShow = false, hideLabel }: IConfigVariableInputProps) {
  const interaction = useContext(ConfigAssignmentContext);
  const state = useContext(ConfigStateContext);
  const info = getVariableDisplayInfo(variable);

  if (alwaysShow)
    info.show = true;

  if (!info.show || variable.id === "EVENT") {
    //If possible, calculate the picture even if it isn't shown
    if (info.showAs === "Picture-on-picture") {
      let img = getImageGenerationStructureString(section, info);
      if (img != null && img != info.valueText) {
        interaction.assign(variable.id, img, instanceId);
      }
    }

    return <></>;
  }

  if (typeof hideLabel === "undefined")
    hideLabel = info.showAs === "Button" || info.showAs === "Lookup" || info.showAs === "Checkbox" || info.showAs === "Table" || info.showAs === "Picture-on-picture" || info.textStyleFamily === "No label";
  const hideControl = info.showAs === "Label only";

  let style: React.CSSProperties = {};
  if (info.spacingBefore > 0)
    style.marginTop = info.spacingBefore + "px";
  if (info.spacingAfter > 0)
    style.marginBottom = info.spacingAfter + "px";

  let divClasses = "hr col-" + sectionDisplayInfo.columns;
  if (!hideControl && !hideLabel)
    divClasses += " label-with-ctrl";

  return <div className={divClasses} style={style}>
    <LabelInputLayout
      labelPosition={info.labelPosition}
      label={hideLabel ?
        <></> :
        <Label
          text={variable.name}
          required={info.mandatory}
          positionHorizontal={info.labelAlignment}
          textStyle={info.textStyleFamily}
        />}
      control={hideControl ?
        <></> :
        renderConfigInput(section, variable, instanceId, info, interaction, state)}
    />
  </div>;
}

export const renderConfigInput = (section: Section, variable: Variable, instanceId: string, info: IVariableDisplayInfo, interaction: IConfigInteraction, state: IConfigState) => {
  if (info.showAs === "Label only")
    return <></>;

  if (info.showAs === "Value as label")
    return <Label
      text={(info.currentValue?.name || info.valueText) + (info.unitOfMeasure ? (" " + info.unitOfMeasure) : "")}
      positionHorizontal={info.controlPositionHorizontal}
      textStyle={info.textStyleFeature}
    />;

  if (info.showAs === "Image")
    return <Image
      src={getPropertyString(info.currentValue, "IMAGE") || info.image || "https://via.placeholder.com/400x200"}
      controlPositionHorizontal={info.controlPositionHorizontal}
    />;

  if (info.showAs === "Dropdown")
    return <Select
      options={info.values.map(v => ({
        name: v.name + (info.unitOfMeasure ? (" " + info.unitOfMeasure) : ""),
        value: v.value,
        incompatible: v.incompatible
      }))}
      allowEmpty
      value={info.valueText}
      onChange={async (value) => await interaction.assign(variable.id, value, instanceId)}
      textStyle={info.textStyleFeature}
    />;

  if (info.showAs === "Button")
    return <Button
      label={variable.name}
      positionHorizontal={info.controlPositionHorizontal}
      textStyle={info.textStyleFeature}
      disabled={info.readOnly}
      primary
      onClick={async () => {
        if (typeof info.showAsSpecification !== "string" || info.showAsSpecification.length == 0)
          return;
        try {
          let spec = JSON.parse(info.showAsSpecification) as ActionSpecification | ActionSpecification[];
          await handleActionTrigger(spec, variable, section, instanceId, state, interaction);
        }
        catch (err) {
          console.warn("Error parsing button specification: " + info.showAsSpecification);
        }

        if (info.action !== "")
          await handleActionTrigger({
            ...getActionSpecificationOrEmpty(variable),
            action: info.action
          }, variable, section, instanceId, state, interaction);
      }}
    />;

  if (info.showAs === "Radio Button")
    return <Radio
      options={info.values}
      display="inline"
      selectedValue={info.valueText}
      onChange={async (value) => await interaction.assign(variable.id, value, instanceId)}
      positionHorizontal={info.controlPositionHorizontal}
      textStyle={info.textStyleFeature}
    />;

  if (info.showAs === "Tile" || info.showAs == "Tile with description")
    return <Tiles
      data={info.values.map(val => ({
        imageUrl: getPropertyString(val, "IMAGE") || assets.questionmark,
        selectedImageUrl: getPropertyString(val, "IMAGE_SELECTED"),
        label: val.name,
        value: val.value,
        incompatible: val.incompatible,
        description: val.description
      }))}
      selectedValue={info.valueText}
      onSelect={async (val) => await interaction.assign(variable.id, val.value, instanceId)}
      positionHorizontal={info.controlPositionHorizontal}
      textStyle={info.textStyleFeature}
      size={info.showAs === "Tile with description" ? "Large" : "Normal"}
    />;

  if (info.showAs === "Checkbox")
    return <Checkbox
      labelText={variable.name}
      checked={info.valueText === "TRUE"}
      required={info.mandatory}
      onChange={async (checked) => await interaction.assign(variable.id, checked ? "TRUE" : "FALSE", instanceId)}
      positionHorizontal={info.controlPositionHorizontal}
      textStyle={info.textStyleFeature}
    />;

  if (info.showAs === "Lookup")
    return <Lookup
      section={section}
      instanceId={instanceId}
      variable={variable}
      definitionText={info.showAsSpecification}
      assignMultiple={interaction.assignMultiple}
    />;

  if (info.showAs === "Picture-on-picture")
    return <GeneratedImage
      variable={variable}
      section={section}
      info={info}
      instanceId={instanceId}
    />;

  if (info.showAs === "Table")
    return <ConfigTable
      section={section}
      instanceId={instanceId}
      variable={variable}
      definitionText={info.showAsSpecification}
    />;

  if (info.showAs === "Bullet list")
    return <BulletList
      values={info.values.map(v => v.name)}
      textStyle={info.textStyleFeature}
      definitionText={info.showAsSpecification}
    />;

  return <Input
    onChange={async (value) => await interaction.assign(variable.id, value, instanceId)}
    value={info.valueText}
    readOnly={info.readOnly}
    type={variable.valueType === "Number" ? "number" : "text"}
    textStyle={info.textStyleFeature}
    unit={info.unitOfMeasure}
  />;
}
