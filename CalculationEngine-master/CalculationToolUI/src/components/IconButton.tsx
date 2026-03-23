import { useState } from "react";
import "./IconButton.scss";

interface IconButtonProps {
  size?: "large" | "medium" | "small";
  /**
   * Optional click handler
   */
  onClick?: () => Promise<void> | void;
  icon: string;
  positionHorizontal?: HorizontalPosition;
  disabled?: boolean;
}

const IconButton = ({
  size = "medium",
  icon,
  positionHorizontal = "Left",
  onClick,
  disabled = false
}: IconButtonProps) => {
  const [actionRunning, setActionRunning] = useState(false);
  return (
    <div
      className={[
        "iconbutton",
        "iconbutton-" + size,
        "iconbutton-" + positionHorizontal.toLowerCase(),
        (actionRunning || disabled ? "iconbutton-disabled" : "")
      ].join(" ")}
      onClick={async () => {
        if (actionRunning || disabled)
          return;
        setActionRunning(true);
        await onClick?.();
        setActionRunning(false);
      }}
    >
      <img src={icon} className="icon" />
    </div>
  );
};
export default IconButton;
