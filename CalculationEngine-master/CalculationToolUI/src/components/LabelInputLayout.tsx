import { ReactNode } from "react";
import "./LabelInputLayout.scss";

interface ILabelInputLayoutProps {
  label: ReactNode;
  control: ReactNode;
  labelPosition: HorizontalPosition | VerticalPosition;
}

const LabelInputLayout = ({ label, control, labelPosition = "Top" }: ILabelInputLayoutProps) => {
  //TODO: change order depending on labelPosition
  return <div className={"label-input-layout " + labelPosition.toLowerCase()}>
    {label}
    {control}
  </div>;
}

export default LabelInputLayout;
