import { ReactNode, useState } from "react";
import "./Button.scss";
import { textStyleToCssClass } from "../utils/styling";
import RichText from "./RichText";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: ReactNode;
  /**
   * Button size
   */
  size?: "large" | "medium" | "small";
  /**
   * Optional click handler
   */
  onClick?: () => Promise<void> | void;
  iconLeft?: string;
  iconRight?: string;
  positionHorizontal?: HorizontalPosition;
  textStyle?: TextStyle;
  disabled?: boolean;
  ghost?: boolean;
}

const Button = ({
  primary = false,
  label,
  size = "medium",
  iconLeft,
  iconRight,
  positionHorizontal = "Left",
  textStyle = "Normal",
  onClick,
  disabled = false,
  ghost
}: ButtonProps) => {
  const [actionRunning, setActionRunning] = useState(false);
  return (
    <button
      type="button"
      className={[
        "button",
        "button-" + size, "button-" + (primary ? "primary" : "secondary"),
        "button-" + positionHorizontal.toLowerCase(),
        ((actionRunning || disabled) ? "button-disabled" : ""),
        (ghost ? "button-ghost" : "")
      ].join(" ")}
      disabled={actionRunning || disabled}
      onClick={async () => {
        setActionRunning(true);
        await onClick?.();
        setActionRunning(false);
      }}
    >
      {
        iconLeft &&
        <img src={iconLeft} alt="Left Icon" className="icon icon-left" />
      }

      <span className={textStyleToCssClass(textStyle)}>{typeof label === "string" ? <RichText text={label} /> : label}</span>

      {
        iconRight &&
        <img src={iconRight} alt="Right Icon" className="icon icon-right" />
      }
    </button>
  );
};
export default Button;
