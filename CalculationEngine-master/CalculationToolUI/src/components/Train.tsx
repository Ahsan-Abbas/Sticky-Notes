import { forwardRef } from "react";
import "./Train.scss";

interface TrainProps {
  totalSteps: number;
  currentStep: number;
}

const Train = forwardRef<HTMLUListElement, TrainProps>(({
  totalSteps,
  currentStep
}, ref) => {
  const steps = [];

  for (let i = 1; i <= totalSteps; i++) {
    if (i === currentStep || i < currentStep) {
      steps.push(
        <li key={i} className="active">
          <span>{i}</span>
        </li>
      );
    } else {
      steps.push(<li key={i}><span>{i}</span></li>);
    }
  }

  return <ul className="train" ref={ref}>{steps}</ul>;
});
export default Train;
