import "./Label.scss";
import { textStyleToCssClass } from "../utils/styling";
import RichText from "./RichText";
import { assets } from "../backend/backend";

interface LabelProps {
  text: string;
  required?: boolean;
  textStyle?: TextStyle;
  positionHorizontal?: HorizontalPosition;
}

const Label = ({
  text,
  required = false,
  textStyle = "Normal",
  positionHorizontal = "Left"
}: LabelProps) => {
  if (textStyle === "No label" || text === "")
    return <></>;

  let cls = ["label"];
  if (positionHorizontal === "Center")
    cls.push("center");
  else if (positionHorizontal === "Right")
    cls.push("right");
  else if (textStyle === "Warning")
    cls.push("label-icon")

  cls.push(textStyleToCssClass(textStyle));

  return (
    <div className={cls.join(" ")}>
      <label title={text}>
        {(textStyle === "Warning") &&
          <img src={assets.warningIcon} />
        }
        <RichText text={text} />
      </label>
      {required && <span className="required">*</span>}
    </div>
  );
};
export default Label;
