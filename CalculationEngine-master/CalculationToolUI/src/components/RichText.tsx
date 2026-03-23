import ReactMarkdown from "react-markdown";
import Link from "./Link";
import React from "react";

interface IRichTextProps {
  text: string | boolean | number | null | undefined;
}

const RichText = ({ text }: IRichTextProps) => {
  if (typeof text === "number" || typeof text === "boolean")
    text = text.toString();
  if (typeof text !== "string")
    return text;
  return <ReactMarkdown
    components={{
      p: ({ children }) => <React.Fragment children={children} />,
      a: Link //Use custom element for links to ensure target is set to _blank
    }}
  >{text}</ReactMarkdown>
};

export default RichText;
