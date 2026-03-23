import "./Select.scss"
import { textStyleToCssClass } from "../utils/styling";

interface SelectProps {
  allowEmpty?: boolean;
  options: { name: string, value: string | number, incompatible?: boolean }[];
  onChange?: (value: string) => void;
  value?: string;
  textStyle?: TextStyle;
}

const Select = ({
  allowEmpty = true,
  options,
  onChange,
  value,
  textStyle = "Normal"
}: SelectProps) => {
  let cls = " " + textStyleToCssClass(textStyle);
  /* Might need to be replaced with custom elements as select options can't be styled beyond font, size, and color */
  return <div className="select">
    <select className={cls} value={value} onChange={(e) => { onChange?.(e.target.value) }}>
      {allowEmpty && <option key="blank" value=""></option>}
      {options.map((opt, index) => <option className={opt.incompatible ? "incompatible" : ""} key={index} value={opt.value}>{opt.name}</option>)}
    </select>
    <span className="focus"></span>
  </div>;
}
export default Select;
