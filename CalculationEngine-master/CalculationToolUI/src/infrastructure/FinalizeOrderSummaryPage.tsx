import React, { useContext } from 'react';
import Checkbox from "../components/Checkbox";
import DetailContainer from "../components/DetailContainer";
import Image from "../components/Image";
import Input from "../components/Input";
import Label from "../components/Label";
import PhoneNumberInput from "../components/PhoneNumberInput";
import RichText from "../components/RichText";
import SelectSampleOrder from "../components/SelectSampleOrder";
import Textarea from "../components/Textarea";
import Constant from "../Constant";
import { ConfigAssignmentForSampleOrderContext } from "./ConfigSessionProviderForSampleOrder";

type Props = {
    isColorAll: boolean,
    pageData: pageData,
    countForAll: countForAll,
    orderDetails: orderDetails,
    configTrain: {
        currentStep: number,
        totalStep: number
    },
    formData: formData,
    errors: error,
    setFormData: (item: error) => void,
    setErrors: (item: error) => void
}

const FinalizeOrderSummaryPage: React.FC<Props> = ({
    isColorAll = false,
    pageData,
    countForAll,
    orderDetails,
    configTrain,
    setFormData,
    setErrors,
    errors = {},
    formData = {}
}: Props) => {
    const interaction = useContext(ConfigAssignmentForSampleOrderContext);
    // Handle input changes and update state
    const handleInputChange = (value: string, field: string, variableId?: string, optionID?: number | string): void => {
        if (errors.hasOwnProperty(field)) {
            delete errors[field];
            setErrors({ ...errors })
        }
        formData[field] = value
        setFormData({ ...formData });
        if (field === 'kpmg_shdm_cat_contactcountry' && variableId && optionID) {
            interaction.assign(
                variableId,
                optionID,
                Constant.ROOT,
                1,
                undefined
            )
        }
    };

    return (
        <>
            <div className="top-formContainer">
                <form className={'form-container'}>
                    {
                        pageData.sections[pageData.section_name[configTrain.currentStep - 1]].variables.filter((item: VariableSectionPage) =>
                            Constant.FILTER_FORM_FIELD.indexOf(item.RF_SHOW_FAMILY_AS || '') > -1).map(
                                (item: VariableSectionPage, index: number) =>
                                    <div key={index} className={`${errors?.hasOwnProperty(Constant.EMAIL) && item.RF_MARKETO_SOURCE_SYSTEM_ID === Constant.EMAIL ? "input-field input-field-email-error" : "input-field"}`}>
                                        <span className="label">
                                            <Label text={item.name} required={item.RF_B_MANDATORY} positionHorizontal="Left" /></span>
                                        <div className="Input-Fname">
                                            {item.RF_SHOW_FAMILY_AS === Constant.TELEPHONE ?
                                                <PhoneNumberInput
                                                    RF_TELEPHONE_COUNTRY_CODE={item.RF_TELEPHONE_COUNTRY_CODE}
                                                    phoneNumber={formData[item?.RF_MARKETO_SOURCE_SYSTEM_ID || ''] || ''}
                                                    onChange={(val: string, code: string) => handleInputChange(`${code}${val}`, item.RF_MARKETO_SOURCE_SYSTEM_ID || '')}
                                                />
                                                : item.RF_SHOW_FAMILY_AS === Constant.DROPDOWN ?
                                                    <SelectSampleOrder label={item.name} value={formData[item?.RF_MARKETO_SOURCE_SYSTEM_ID || '']} options={item.values} onChange={(val: string, optionID: string | number) => handleInputChange(val, item?.RF_MARKETO_SOURCE_SYSTEM_ID || '', item.id, optionID)} />
                                                    : <Input type={item.valueType === Constant.STRING ? 'text' : "number"} placeholder={item.name} value={formData[item?.RF_MARKETO_SOURCE_SYSTEM_ID || '']} onChange={(val: string) => handleInputChange(val, item.RF_MARKETO_SOURCE_SYSTEM_ID || '')} autofill={true} />}
                                            <div className="error">{errors[item.RF_MARKETO_SOURCE_SYSTEM_ID || '']}</div>
                                        </div>
                                    </div>)}
                </form>
                <div>

                    {pageData.sections[pageData.section_name[configTrain.currentStep - 1]].variables
                        .filter((item: VariableSectionPage) => Constant.FILTER_FORM_FIELD.indexOf(item.RF_SHOW_FAMILY_AS || '') === -1)
                        .map((item: VariableSectionPage, index: number) => item.RF_SHOW_FAMILY_AS === Constant.TEXTAREA ?
                            <div key={index} className="describe">
                                <span className="label">
                                    <Label text={item.name} required={item.RF_B_MANDATORY} positionHorizontal="Left" />
                                </span>
                                <Textarea value={formData[item?.RF_MARKETO_SOURCE_SYSTEM_ID || ''] || ''} onChange={(val: string) => handleInputChange(val, item.RF_MARKETO_SOURCE_SYSTEM_ID || '')} required={item.RF_B_MANDATORY} />
                                <div className="error">{errors[item?.RF_MARKETO_SOURCE_SYSTEM_ID || '']}</div>
                            </div> : item.RF_SHOW_FAMILY_AS === Constant.CHECKBOX ? <div className="order-checkbox" key={index}>
                                <Checkbox required={item.RF_B_MANDATORY}
                                    checked={formData[item?.RF_MARKETO_SOURCE_SYSTEM_ID || ''] === Constant.TRUE ? true : false}
                                    onChange={(val: boolean): void => handleInputChange(val ? Constant.TRUE : Constant.FALSE, item.RF_MARKETO_SOURCE_SYSTEM_ID || '')}
                                    labelText={item.name.replaceAll(/\\n/gi, '  \n &nbsp;  \n')}
                                />
                                <div className="error">{errors[item?.RF_MARKETO_SOURCE_SYSTEM_ID || '']}</div>
                            </div> : null)}
                </div>
            </div>
            <span className="sample-order-summary"><RichText text={pageData.finalOrderSummary.heading} /></span>
            <span className="review-order-title"><RichText text={pageData.finalOrderSummary.description} /></span>

            {isColorAll ? <div className="order-details-colors">
                <div className="order-details-colors-section">
                    <span className="orderdetail-diff-title"><RichText text={Constant.FLEECE_COLOR} /></span>
                    <div className="chip-container flex-start-start">{Object.keys(orderDetails).filter((item: string) =>
                        orderDetails[item].variableId !== Constant.EDGE_TYPE_VAR && countForAll.hasOwnProperty(item)).map((item: string, index: number) =>
                            <div className="chip color-chip-width" key={index}>
                                <Image imageDisplayMode="Thumbnail" src={`${orderDetails[item].RF_S_IMAGE_LINK}`} />
                                <span id={`color-all-${index}`} className="chip-title color-all"><RichText text={item} /></span>
                                <span className="show-quantity"><RichText text={countForAll[item]} /></span>
                            </div>)}
                    </div>
                </div>
                <div className="order-details-colors-section">
                    <span className="orderdetail-diff-title"><RichText text={Constant.EDGE_TYPE} /></span>
                    <div className="chip-container flex-start-start">{Object.keys(orderDetails).filter((item: string) =>
                        orderDetails[item].variableId === Constant.EDGE_TYPE_VAR && countForAll.hasOwnProperty(item)).map((item: string, index: number) =>
                            <div className="chip chip-width" key={index}>
                                <Image imageDisplayMode="Thumbnail" src={`${orderDetails[item].RF_S_IMAGE_LINK}`} />
                                <span className="chip-title"><RichText text={orderDetails[item].name} /></span>
                                <span className="show-quantity"><RichText text={countForAll[item]} /></span>
                            </div>)}
                    </div>
                </div>

            </div> : <div className="chip-container flex-start-start">{Object.keys(orderDetails).filter((item: string) => countForAll.hasOwnProperty(item)).map((item: string, index: number) =>
                <div className="chip chip-width" key={index}>
                    <Image imageDisplayMode="Thumbnail" src={`${orderDetails[item].RF_S_IMAGE_LINK}`} />
                    <span id={`chip-title-${index}`} className="chip-title"><RichText text={item} /></span>
                    <span className="show-quantity"><RichText text={countForAll[item]} /></span>
                </div>
            )}</div>}
            <DetailContainer details={pageData.detailsContainer} />
        </>
    )
}

export default FinalizeOrderSummaryPage