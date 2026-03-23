import { ReactNode, useEffect, useState } from "react";
import { translate } from "../backend/translations";
import RichText from "./RichText";

interface ITranslatableProps {
  name: string;
  parameters?: (string | number)[];
}

const Translatable = ({ name, parameters = [] }: ITranslatableProps): ReactNode => {
  const [text, setText] = useState("");
  useEffect(() => {
    translate(name).then(translation => {
      if (parameters.length > 0)
        translation = translation.replace(/{(\d+)}/g, (match, index) =>
          typeof parameters[index] !== 'undefined' ? parameters[index]?.toString() : match
        );
      setText(translation);
    });
  }, [name, parameters]);
  return <RichText text={text} />;
}

export default Translatable;
