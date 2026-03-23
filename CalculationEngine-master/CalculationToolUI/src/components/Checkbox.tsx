import React, { useEffect } from "react";
import "./Checkbox.scss";
import { textStyleToCssClass } from "../utils/styling";
import RichText from "./RichText";

interface CheckboxProps {
  labelText?: string;
  checked?: boolean;
  required?: boolean;
  positionHorizontal?: HorizontalPosition;
  onChange?: (checked: boolean) => void;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const Checkbox = ({
  labelText,
  checked = false,
  required = false,
  positionHorizontal = "Left",
  onChange,
  textStyle = "Normal",
  disabled = false
}: CheckboxProps) => {
  const [checkedValue, setChecked] = React.useState(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleChange = () => {
    const newCheckedValue = !checkedValue;
    setChecked(newCheckedValue);
    onChange?.(newCheckedValue);
  };

  return (
    <div className={"checkbox-wrapper " + positionHorizontal.toLowerCase()}>
      <label className={"checkbox-label " + textStyleToCssClass(textStyle)}>
        <RichText text={labelText} />
        {required && <span className="required">*</span>}
        <input
          type="checkbox"
          checked={checkedValue}
          onChange={handleChange}
          disabled={disabled}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
export default Checkbox;
