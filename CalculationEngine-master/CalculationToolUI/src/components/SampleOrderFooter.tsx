import React from 'react';
import Button from "./Button";
import Constant from "../Constant";

const Footer: React.FC<FooterComponent> = ({ orderDone = false,
    configTrain = {
        currentStep: 0,
        totalStep: 2
    },
    disableSubmitButton = false,
    enableNextButton = { "0": true },
    handleGoBack = () => { },
    handleSubmit = () => { },
    handleNextButton = () => { }
}: FooterComponent) => {
    return (
        <div className={orderDone ? "footer flex-end-center" : "footer"}>
            <span className={"back-button"}>
                {configTrain.currentStep !== 1 ? <Button
                    ghost
                    iconLeft=""
                    label={Constant.GO_BACK}
                    size="small"
                    onClick={handleGoBack}
                /> : null}
            </span>
            {configTrain.currentStep === configTrain.totalStep ? <span className="submit-order-button">
                <Button disabled={disableSubmitButton} label={Constant.SUBMIT_ORDER} onClick={handleSubmit} size="small" />
            </span> : <span className="next-button">
                <Button label={Constant.NEXT} onClick={handleNextButton} disabled={!enableNextButton[`${configTrain.currentStep}`]} size="small" />
            </span>}
        </div>
    )
}

export default Footer