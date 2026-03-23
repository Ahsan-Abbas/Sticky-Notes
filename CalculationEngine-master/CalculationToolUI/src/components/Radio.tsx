import { useId } from "react";
import "./Radio.scss";
import { textStyleToCssClass } from "../utils/styling";
import RichText from "./RichText";

interface RadioProps {
  options: { name: string, value: string | number, incompatible?: boolean }[];
  display?: "inline" | "stacked";
  selectedValue?: string;
  positionHorizontal?: HorizontalPosition;
  name?: string;
  onChange?: (value: string | number) => void;
  textStyle?: TextStyle;
}

const Radio = ({
  options = [],
  display = "stacked",
  selectedValue,
  positionHorizontal = "Left",
  name,
  onChange,
  textStyle = "Normal"
}: RadioProps) => {
  let generatedName = useId();
  let cls = " " + textStyleToCssClass(textStyle);
  return (
    <div className={(display === "inline" ? "radio-wrapper inline-radio" : "radio-wrapper block-radio") + " " + positionHorizontal.toLowerCase()}>
      {options.map(opt => (
        <label className={"label-container" + (opt.incompatible ? " incompatible" : "") + cls} key={opt.value}>
          <input
            type="radio"
            name={name || generatedName}
            defaultChecked={opt.value === selectedValue}
            value={opt.value}
            onChange={e => onChange?.(opt.value)}
          />
          <span className="checkmark"></span><p><RichText text={opt.name} /></p>
        </label>
      ))}
    </div>
  );
};
export default Radio;
