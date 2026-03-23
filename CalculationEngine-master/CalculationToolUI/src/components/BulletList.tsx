import { useState } from "react";
import { textStyleToCssClass } from "../utils/styling";
import "./BulletList.scss";
import { assets } from "../backend/backend";

interface BulletListProps {
  values: string[];
  textStyle?: TextStyle;
  definitionText?: string;
}

interface BulletListDefinition {
  listStyle: string;
}

const BulletList = ({
  values,
  textStyle = "Normal",
  definitionText = ""
}: BulletListProps) => {
  const [definition, _] = useState<BulletListDefinition>(() => {
    try {
      if (definitionText === "")
        return { listStyle: "bullet" };
      return JSON.parse(definitionText);
    } catch (err) {
      console.warn("Bullet List: unable to parse bullet definition", definitionText);
      return <></>;
    }
  });

  let cls = [];

  cls.push(textStyleToCssClass(textStyle));

  // Add logic to handle different list styles
  if (definition.listStyle === "numbered")
    cls.push("numbered-list");
  else
    // Default to "bullet" if no valid listStyle is specified
    cls.push("bullet-list");

  return (
    <div className="bullet">
      <ul className={cls.join(" ")}>
        {values.map((val) => (
          <li key={val}>
            {textStyle === "Warning" && (
              <img src={assets.warningIcon} />
            )}
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
