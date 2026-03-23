import { Fragment, ReactElement, useEffect } from 'react';
import "./DataChips.scss";
import Image from "./Image";
import RichText from "./RichText";
import Constant from "../Constant";
import { maxHeight } from "../utils/styling";


const DataChips = ({
    showRadioSelection = false,
    isColorAll = false,
    count = 0,
    showError = false,
    selectRadioVal = '',
    setSelectRadioVal = () => { },
    countForAll = {},
    showErrorForCounterAllIsTrue = '',
    handleCounter = () => { },
    maxQuantity = 0,
    section = {
        type: "Section",
        id: '',
        name: '',
        variables: [],
        sections: [],
        properties: []
    },
    currentStep = 1
}: DataChipsProps): ReactElement => {

    useEffect(() => {
        maxHeight("chip-discription", 44);
        maxHeight("chip-title", 24);
    }, [section.id])
    return (
        <div className={isColorAll && currentStep !== 1 ? "chip-container display-grid" : "chip-container flex-start-start"}>
            {section.variables.map((variableItem: VariableSectionPage, ind: number) => {
                return <Fragment key={ind}>
                    {variableItem.values.map((item: ValueSampleOrderpage, index: number) => <div key={index} className={isColorAll && currentStep !== 1 ? "chip color-chip-width" : "chip chip-width"}>
                        {item.RF_S_IMAGE_LINK && <Image imageDisplayMode="Thumbnail"
                            src={`${item.RF_S_IMAGE_LINK}`} />}

                        {item.name && <span id={`chip-title-${index}`} className={isColorAll && currentStep !== 1 ? "chip-title font-size-20" : "chip-title"}><RichText text={item.name} /></span>}
                        {item.RF_COLOR_ALL_EDGE_DESCRIPTION && <div className="color-details">
                            <span className="color-key"><RichText text={`${item.RF_COLOR_ALL_EDGE_DESCRIPTION.split(/\s/)[0]}`} /></span>
                            <span className="color-value"><RichText text={`\t${item.RF_COLOR_ALL_EDGE_DESCRIPTION.split(':')[1]}`} /></span>
                        </div>}
                        {item.RF_S_FEATURE_DESCRIPTION && <span id={`chip-discription-${index}`} className="chip-discription">
                            <RichText text={item.RF_S_FEATURE_DESCRIPTION} />
                        </span>}
                        {variableItem.RF_SHOW_FAMILY_AS === Constant.RADIO_BUTTON && <label className={"label-container"}>
                            <input
                                type="radio"
                                checked={item.name === selectRadioVal}
                                value={item.name}
                                onChange={() => setSelectRadioVal(item.name, item)}
                            />
                            <span className="checkmark"></span><p><RichText text={"Select"} /></p>
                        </label>}
                        {((variableItem.RF_SHOW_FAMILY_AS === Constant.QUANTITY && variableItem.RF_B_QUANTITY_EXISTS && variableItem.allowMultipleAssignments) || (variableItem.RF_B_QUANTITY_EXISTS && item.name === selectRadioVal)) && <> <div className="quantity-counter">
                            <button className={isColorAll && currentStep !== 1 ? "counter-button font-size-20" : "counter-button"} disabled={!showRadioSelection ? !countForAll.hasOwnProperty(item.name) : count === 0} onClick={() => handleCounter(-1, item.name, item)}>
                                -
                            </button>
                            <span className={`number-counter ${(showRadioSelection && showError) || (showErrorForCounterAllIsTrue === item.name) ? "error" : ""} ${isColorAll && currentStep !== 1 ? "font-size-20" : ""}`}>
                                < RichText text={!showRadioSelection ? countForAll[`${item.name}`] || 0 : count -
                                    (Object.values(countForAll).length ? Object.values(countForAll).reduce((a: number, b: number): number => a + b) : 0)} />
                            </span>
                            <button className={isColorAll && currentStep !== 1 ? "counter-button font-size-20" : "counter-button"}
                                disabled={count === variableItem.RF_N_MAX_LIMIT}
                                onClick={() => handleCounter(1, item.name, item)}>
                                +
                            </button>
                        </div>
                            {((showRadioSelection && showError) || (showErrorForCounterAllIsTrue === item.name)) && <span className={`counter-error ${isColorAll && currentStep !== 1 ? "font-size-17" : ""}`}>
                                <RichText text={`${Constant.ERROR_MESSAGE_START} ${maxQuantity} ${Constant.ERROR_MESSAGE_SAMPLES}`} />
                            </span>}</>}
                    </div>)}
                </Fragment>
            })
            }
        </div >
    );
};
export default DataChips;
