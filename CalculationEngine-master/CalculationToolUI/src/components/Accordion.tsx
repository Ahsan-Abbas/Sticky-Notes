import { ReactNode, useEffect, useRef, useState } from "react";
import "./Accordion.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { textStyleToCssClass } from "../utils/styling";
import { assets } from "../backend/backend";
import IconButton from "./IconButton";
import { scrollToElement } from "../utils/browser";

interface AccordionProps {
  defaultExpandFirst?: boolean;
  expandedIndex?: number;
  onExpandCollapse?: (index: number, expanded: boolean) => void;
  onDelete?: (index: number) => void;
  sections: IAccordionSection[];
  header: {
    textStyle?: TextStyle;
    positionHorizontal?: HorizontalPosition
  }
}

export interface IAccordionSection {
  header: string;
  subHeader: ReactNode;
  content: ReactNode;
}


const Accordion = ({
  expandedIndex,
  onExpandCollapse,
  onDelete,
  sections,
  header: {
    textStyle = "Normal",
    positionHorizontal = "Left"
  }
}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState(expandedIndex);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof expandedIndex !== "undefined" && activeIndex !== expandedIndex) {
      setActiveIndex(expandedIndex);
      if (ref.current !== null) {
        let target: Element = ref.current;
        if (target.children.length < expandedIndex)
          target = target.children[expandedIndex];
        scrollToElement(target);
      }
    }
  }, [expandedIndex])

  let cls = ["header", textStyleToCssClass(textStyle)];
  if (positionHorizontal === "Center")
    cls.push("center");
  else if (positionHorizontal === "Right")
    cls.push("right");

  return (
    <div className="accordion-wrapper" ref={ref}>
      {sections.map((section, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header">
            <div className="header-section">
              <div className={cls.join(" ")}>{section.header}</div>
              {section.subHeader}
            </div>
            <div className="header-actions">
              <button onClick={(e) => {
                setActiveIndex(index === activeIndex ? -1 : index);
                onExpandCollapse?.(index, index !== activeIndex);
                scrollToElement(e.currentTarget);
              }}>
                <FontAwesomeIcon
                  icon={index === activeIndex ? faChevronUp : faChevronDown}
                  className={`icon${index === activeIndex ? "-active" : ""}`}
                />
              </button>
              {onDelete &&
                <IconButton
                  icon={assets.trash}
                  onClick={() => onDelete(index)}
                />
              }
            </div>
          </div>
          <div className={`accordion-expand ${index === activeIndex ? "expand" : "collapse"}`}>
            <div className="accordion-content">{section.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
