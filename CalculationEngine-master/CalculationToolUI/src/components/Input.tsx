import { useEffect, useState } from "react";
import "./Input.scss";
import { textStyleToCssClass } from "../utils/styling";

interface InputProps {
  type?: "text" | "number";
  placeholder?: string;
  value?: string;
  unit?: string;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  autofill?: boolean;
  textStyle?: TextStyle;
}

const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  unit,
  onChange,
  readOnly = false,
  textStyle = "Normal",
  autofill = false

}: InputProps) => {
  const [state, setState] = useState(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  return (
    <div className="input-wrapper">
      <input type={type}
        placeholder={placeholder}
        value={state}
        readOnly={readOnly}
        onChange={e => {
          setState(e.target.value);
          if (autofill && onChange) {
            onChange?.(e.target.value)
          }
        }}
        onBlur={e => onChange?.(e.target.value)}
        className={textStyleToCssClass(textStyle)}
      />
      {unit &&
        <label className="label-uom">{unit}</label>
      }
    </div>
  );
};
export default Input;
