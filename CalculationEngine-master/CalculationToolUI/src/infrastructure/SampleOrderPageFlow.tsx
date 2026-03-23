import React, { useState, useEffect, useContext, Suspense } from 'react';
import "./SampleOrderPageFlow.scss";
import LoadingComponent from "../components/LoadingComponent";
import RichText from "../components/RichText";
import Footer from "../components/SampleOrderFooter";
import Train from "../components/Train";
import FinalizeOrderSummaryPage from "./FinalizeOrderSummaryPage";
import DataChips from "../components/DataChips";
import DetailContainer from "../components/DetailContainer";
import Constant from "../Constant";
import { assets } from "../backend/backend";
import { ConfigStateForSampleOrderContext, ConfigAssignmentForSampleOrderContext } from "./ConfigSessionProviderForSampleOrder";
import { submitSampleOrder } from '../backend/marketing';
import { validateEmail, validatePhoneNumber } from "../utils/utilities";
import isEmpty from "lodash/isEmpty";


const SampleOrderPageFlow: React.FC<appInput> = (appInput: appInput) => {
  const configState = useContext(ConfigStateForSampleOrderContext);
  const interaction = useContext(ConfigAssignmentForSampleOrderContext);
  const [configTrain, setConfigTrain] = useState<configTrain>({ totalStep: 2, currentStep: 1 })
  const [count, setCount] = useState<quantityCount>({ 1: 0 });
  const [showError, setShowError] = useState<boolean>(false);
  const [selectRadioVal, setSelectRadioVal] = useState<string>('');
  const [countForAll, setCountForAll] = useState<countForAll>({});
  const [showErrorForCounterAllIsTrue, setShowErrorForCounterAllIsTrue] = useState<{ [key: number]: string }>({})
  const [enableNextButton, setEnableNextButton] = useState<enableNextButton>({ "1": false });
  const [supportingFeatureProperties, setSupportingFeatureProperties] = useState<modelPropertyFeature>({});
  const [pageData, setPageData] = useState<pageData>({
    name: "",
    sections: {},
    detailsContainer: [],
    section_name: [],
    thankYouSection: {
      name: '',
      variables: []
    },
    finalOrderSummary: {
      heading: '',
      description: ''
    }
  });
  const [orderDetails, setOrderDetails] = useState<orderDetails>({});
  const [formData, setFormData] = useState<formData>({});
  const [errors, setErrors] = useState<error>({});
  const [orderDone, setOrderDone] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(configState.loading);
  const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(false);
  const [isColorAll, setIsColorAll] = useState<boolean>(false);
  const [maxQuantity, setMaxQuantity] = useState<quantityCount>({});



  // Handle form submission
  const handleSubmit = async (): Promise<void> => {
    // Required field validation
    pageData.sections[pageData.section_name[configTrain.currentStep - 1]].variables.forEach((element: VariableSectionPage) => {
      if (element.hasOwnProperty(Constant.RF_B_MANDATORY)
        && element.RF_B_MANDATORY && (!formData.hasOwnProperty(element.RF_MARKETO_SOURCE_SYSTEM_ID || '')
          || `${formData[element.RF_MARKETO_SOURCE_SYSTEM_ID || '']}`.trim().length === 0)) {
        {
          errors[element.RF_MARKETO_SOURCE_SYSTEM_ID || ''] = Constant.MANDATORY_FIELD_ERROR_MESSAGE;
        }

      }
      if (element.hasOwnProperty(Constant.RF_B_MANDATORY)
        && element.RF_B_MANDATORY && element.RF_SHOW_FAMILY_AS === Constant.CHECKBOX && (`${formData[element.RF_MARKETO_SOURCE_SYSTEM_ID || '']}`.trim().length === 0 || `${formData[element.RF_MARKETO_SOURCE_SYSTEM_ID || '']}`.trim() === Constant.FALSE)) {

        errors[element.RF_MARKETO_SOURCE_SYSTEM_ID || ''] = Constant.MANDATORY_FIELD_ERROR_MESSAGE;
      }
      if (element.RF_MARKETO_SOURCE_SYSTEM_ID === Constant.EMAIL && !validateEmail(`${formData[element.RF_MARKETO_SOURCE_SYSTEM_ID]}`)) {
        errors[element.RF_MARKETO_SOURCE_SYSTEM_ID] = Constant.EMAIL_FIELD_ERROR_MESSAGE;
      }
      if (element.RF_MARKETO_SOURCE_SYSTEM_ID === "kpmg_telephone1" && !validatePhoneNumber(`${formData[element.RF_MARKETO_SOURCE_SYSTEM_ID]}`)) {
        errors[element.RF_MARKETO_SOURCE_SYSTEM_ID] = Constant.PHONE_NUMBER_FIELD_ERROR_MESSAGE;
      }
    })
    setErrors({ ...errors });
    if (!Object.keys(errors).length) {
      setDisableSubmitButton(true)
      let sampleRequestRF = `ProductName:${appInput.model},`;
      Object.values(orderDetails).forEach((element: ValueSampleOrderpage, index: number) => {
        const elementData: string = Object.keys(orderDetails).length > 1 && index ? `${element.name.replace(Object.keys(orderDetails)[0], '')} +${countForAll[element.name]} qty,` : `${element.name}${Object.keys(orderDetails).length > 1 && !isColorAll ? '' : ` +${count[1]} qty`},`
        sampleRequestRF += `${element['variableId']}: ${elementData}`
      })
      const data = {
        ...formData, "aPISource": "Sample Order RF-NA",
        "kpmg_gdprinformed": "True",
        "kpmg_rf_preference": "True",
        "oPCOownerRFNNA": "True",
        "sampleRequestRF": sampleRequestRF,
        "toolActivityLast": sampleRequestRF,
        "toolName": "Sample Order RF-NA",
        "kpmg_sourcedetail": "Sample Order"
      }
      try {
        await submitSampleOrder(data);
        setOrderDone(true);
        setFormData({});
        setDisableSubmitButton(false)
        handleClose()
        setCount({ 1: 0 })
      } catch (error) {
        console.log('error', error)
        setDisableSubmitButton(false)
      }
    }
  };

  useEffect(() => {
    if (configState && !configState.loading && isEmpty(supportingFeatureProperties)) {
      const configData: ConfigureResponse = configState.configuration;
      pageData.name = configData?.product?.name || '';
      const index: number = configData.sections.findIndex(item => item.id === `${configData?.product?.id}_${Constant.VIEW}.${Constant.SUPPORTING_FEATURES}`)
      if (index > -1) {
        const supportingFeature: PageSection = configData.sections[index];
        const propertyIndex: number = supportingFeature.variables.findIndex((item) => item.id === Constant.MODEL_PROPERTY_FEATURE);
        if (propertyIndex > -1) {
          const properties: PropertySampleOrderPage[] = supportingFeature.variables[propertyIndex].properties;
          properties.forEach((element: PropertySampleOrderPage) => {
            if (element.id === Constant.RF_S_SECTION_SUBMODEL) {
              supportingFeatureProperties[`${element.id}`] = JSON.parse(`{"` + `${element.value}`.split("=>").join(`":"`) + '"}')
            } else {
              supportingFeatureProperties[`${element.id}`] = `${element.value}`.split('|').map((item: string) => item.trim())
            }
          })
          if (supportingFeatureProperties?.RF_S_VIEW_SECTION?.length) {
            const index: number = supportingFeatureProperties?.RF_S_VIEW_SECTION.indexOf(`${Constant.THANK_YOU}`);
            if (index > -1) {
              configData.sections.forEach((element: PageSection) => {
                if (element.id === `${configData?.product?.id}_VIEW.${Constant.THANK_YOU}`) {
                  pageData.thankYouSection.name = element.name;
                  pageData.thankYouSection.variables = element.variables;
                }
              })
              supportingFeatureProperties?.RF_S_VIEW_SECTION.splice(index, 1)
            }
          }
          configTrain.totalStep = supportingFeatureProperties?.RF_S_VIEW_SECTION?.length || 0;
          pageData.section_name = supportingFeatureProperties?.RF_S_VIEW_SECTION || [];
        }
        if (configTrain.totalStep > 2) {

          const newCount: quantityCount = {};
          for (let i = 0; i < configTrain.totalStep - 1; ++i) {
            newCount[i + 1] = 0;
          }
          setCount({ ...newCount })
        }
        setSupportingFeatureProperties({ ...supportingFeatureProperties });
        setConfigTrain({ ...configTrain })
        setPageData({ ...pageData })
      }
    }
  }, [configState.loading, supportingFeatureProperties]);

  useEffect(() => {
    if (!isEmpty(supportingFeatureProperties)) {
      const configData = configState.configuration;
      const index: number = configData.sections.findIndex(item => item.id === `${configData?.product?.id}_${Constant.VIEW}.${Constant.SUPPORTING_FEATURES}`)
      const supportingFeature: PageSection = configData.sections[index];
      const sectionName: string = supportingFeatureProperties?.RF_S_VIEW_SECTION?.[configTrain.currentStep - 1] || '';
      const ind: number = configData.sections.findIndex((item: PageSection) => item.id === `${configData?.product?.id}_VIEW.${sectionName.trim()}`);
      if (ind > -1) {
        const section: PageSection = configData.sections[ind];
        pageData.sections[`${sectionName}`] = configTrain.currentStep === configTrain.totalStep ? handleFinalizeOrderPage(section) : handlePage(section, supportingFeature.variables)
      }
      if (configTrain.currentStep === 2 && configTrain.totalStep !== configTrain.currentStep) {
        if (pageData.sections[`${sectionName}`]["variables"][0].hasOwnProperty(Constant.RF_N_MAX_LIMIT) &&
          pageData?.sections?.[pageData.section_name[0]]?.variables[0].hasOwnProperty(Constant.RF_N_MAX_LIMIT)) {
          setIsColorAll(true);
        }
      }
      if (configTrain.currentStep === 1 && selectRadioVal) {
        const detailsForContainter: VariableSectionPage[] = [];
        supportingFeatureProperties?.RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE?.forEach((element: string) => {
          const ind: number = supportingFeature.variables.findIndex((item: VariableSectionPage) => item.id === `${element}`)
          if (ind > -1) {
            const detailArea = supportingFeature.variables[ind];
            detailArea.properties.forEach((property: PropertySampleOrderPage) => {
              if (property.id === Constant.RF_S_ADDTIONAL_DESCRITION_FAMILY) {
                detailArea.RF_S_ADDTIONAL_DESCRITION_FAMILY = `${property.value}`.replaceAll(Constant.SELECT_EDGE_TYPE, selectRadioVal);
              }
            })
            detailArea.values = ([...detailArea?.values]).filter((value: ValueSampleOrderpage) => value?.excluded?.incompatible)
            if (detailArea?.values.length)
              detailsForContainter.push(detailArea)
          }
        })
        pageData.detailsContainer = detailsForContainter;
      }
      setPageData({ ...pageData })
      setIsLoading(configState.loading)
    }
  }, [supportingFeatureProperties, configState.configuration.sections, configTrain.currentStep])

  const handleFinalizeOrderPage = (sectionData: PageSection): PageSection => {
    const finalizeOrderSection: PageSection = {
      id: sectionData.id,
      name: sectionData.name,
      properties: sectionData.properties,
      sections: [],
      type: sectionData.type,
      variables: [],
    }
    const sectionVariable: VariableSectionPage[] = []
    sectionData.variables.forEach((variable: VariableSectionPage) => {
      if (variable.properties.length === 0) {
        if (variable.id.includes(`${Constant.SAMPLE_ORDER_SUMMARY}`)) {
          pageData.finalOrderSummary.heading = variable.name;
        } else if (variable.id.includes(`${Constant.PLEASE_REVIEW_ORDER_AND_ADD_ORDER_DETAILS}`)) {
          pageData.finalOrderSummary.description = variable.name;
        }
      } else {
        variable.properties.forEach((property: PropertySampleOrderPage) => {
          if (property.value === Constant.PAGE_HEADER_DESCRIPTION && property.id === Constant.RF_SHOW_FAMILY_AS) {
            finalizeOrderSection.description = variable.name;
          } else {
            variable = { ...variable, [`${property.id}`]: property.value }
          }

        })
        if (variable.hasOwnProperty(Constant.RF_MARKETO_SOURCE_SYSTEM_ID)) {
          formData[variable.RF_MARKETO_SOURCE_SYSTEM_ID || ''] = formData.hasOwnProperty(variable.RF_MARKETO_SOURCE_SYSTEM_ID || '') && formData[variable.RF_MARKETO_SOURCE_SYSTEM_ID || ''] ? formData[variable.RF_MARKETO_SOURCE_SYSTEM_ID || ''] : '';
          if (variable?.RF_MARKETO_SOURCE_SYSTEM_ID === 'kpmg_shdm_cat_companycounty_id') {
            variable.values = variable?.values?.filter((item: ValueSampleOrderpage) => !item.incompatible);
          }
        }
        sectionVariable.push(variable)
      }
      finalizeOrderSection.variables = [...sectionVariable];
    });
    setFormData({ ...formData })
    setPageData({ ...pageData })
    return finalizeOrderSection;
  }

  const handlePage = (sectionData: PageSection, supportingFeature: VariableSectionPage[]): PageSection => {
    const sectionDescription: string[] = supportingFeatureProperties.RF_S_VIEW_SECTION || [];
    let quantity: quantityCount = { ...maxQuantity }
    if (sectionDescription.indexOf(sectionData.id.replace(`${configState?.configuration?.product?.id}_${Constant.VIEW}.`, '')) > -1) {
      const desriptionIndex = sectionData.variables.findIndex((item: VariableSectionPage) => {
        const index = item.properties.findIndex((propertyItem: PropertySampleOrderPage) =>
          propertyItem.value === Constant.PAGE_HEADER_DESCRIPTION && propertyItem.id === Constant.RF_SHOW_FAMILY_AS);
        return item.id.toUpperCase().includes(Constant.DESCRIPTION) &&
          index > -1
      })
      if (desriptionIndex > -1) {
        sectionData.description = sectionData.variables[desriptionIndex].name;
        sectionData.variables.splice(desriptionIndex, 1);
      }
    }
    const newVariales: VariableSectionPage[] = [];
    sectionData.variables.forEach((element: VariableSectionPage) => {
      const newValues: ValueSampleOrderpage[] = [];
      element.properties.forEach((propertyElement: PropertySampleOrderPage) => {
        element = { ...element, [propertyElement.id]: propertyElement.value }
      })
      element.values.forEach((valueElement: ValueSampleOrderpage) => {
        valueElement.variableId = element.id;
        valueElement.name = valueElement.name.replaceAll(/\\n/gi, '  \n');
        if (!valueElement?.incompatible) {
          valueElement.properties.forEach((propertyElement: PropertySampleOrderPage) => {
            valueElement = { ...valueElement, [propertyElement.id]: propertyElement.value }
            if (element.hasOwnProperty(Constant.RF_B_QUANTITY_EXISTS) && element?.RF_B_QUANTITY_EXISTS && propertyElement.id === Constant.RF_S_QUANTITY_FAMILY && !element.allowMultipleAssignments) {
              const index: number = supportingFeature.findIndex((item: VariableSectionPage) => item.id === propertyElement.value);
              if (index > -1) {
                const propertyIndex = supportingFeature[index].properties.findIndex((item: PropertySampleOrderPage) => item.id === Constant.RF_N_MAX_LIMIT);
                if (propertyIndex > -1) {
                  element = { ...element, [Constant.RF_N_MAX_LIMIT]: supportingFeature[index].properties[propertyIndex].value }
                  quantity = { ...quantity, [configTrain.currentStep]: supportingFeature[index].properties[propertyIndex].value as number }
                }
              }
            }
          })
          if (element.allowMultipleAssignments && element.hasOwnProperty(Constant.RF_B_QUANTITY_EXISTS) && element?.RF_B_QUANTITY_EXISTS) {
            const index: number = supportingFeature.findIndex((item: VariableSectionPage) => item.id === valueElement?.RF_S_QUANTITY_FAMILY);
            if (index > -1) {
              const propertyIndex = supportingFeature[index].properties.findIndex((item: PropertySampleOrderPage) => item.id === Constant.RF_N_MAX_LIMIT);
              if (propertyIndex > -1) {
                quantity = { ...quantity, [configTrain.currentStep]: supportingFeature[index].properties[propertyIndex].value as number }
                element = { ...element, [Constant.RF_N_MAX_LIMIT]: supportingFeature[index].properties[propertyIndex].value }
              }
            }
          }
          newValues.push(valueElement)
        }
      })
      newVariales.push({ ...element, values: [...newValues] });
    })
    setMaxQuantity({ ...quantity })
    sectionData.variables = newVariales;
    return sectionData;

  }
  const handleNextButton = (): void => {
    setIsLoading(true)
    setConfigTrain({ ...configTrain, currentStep: configTrain.currentStep + 1 });
    if (!enableNextButton.hasOwnProperty(configTrain.currentStep)) {
      enableNextButton[configTrain.currentStep + 1] = false;
      setEnableNextButton({ ...enableNextButton });
    }
  }
  const handleCounter: counter = (val: number, key: string, item: ValueSampleOrderpage) => {
    const showRadioSelection = false;
    const currentPageCount: number = count[configTrain.currentStep] || 0;
    if ((currentPageCount + val) === maxQuantity[configTrain.currentStep]) {
      setShowError(true)
      !showRadioSelection && setShowErrorForCounterAllIsTrue({ ...showErrorForCounterAllIsTrue, [configTrain.currentStep]: key })
    } else if (currentPageCount === maxQuantity[configTrain.currentStep] && val === -1) {
      setShowError(false)
      !showRadioSelection && setShowErrorForCounterAllIsTrue({ ...showErrorForCounterAllIsTrue, [configTrain.currentStep]: '' })
    }
    if (!showRadioSelection) {
      if (countForAll.hasOwnProperty(`${key}`)) {
        countForAll[`${key}`] += val;
        if (countForAll[`${key}`] === 0) {
          delete countForAll[`${key}`]
          delete orderDetails[`${key}`]
        }
      } else {
        countForAll[`${key}`] = val;
        orderDetails[`${key}`] = item;
      }
      setOrderDetails({ ...orderDetails });
      setCountForAll({ ...countForAll })
    }
    count[configTrain.currentStep] = currentPageCount + val;
    setCount({ ...count });
  }
  const handleGoBack = () => {
    if (configTrain.currentStep === 1) {
      window.history.back();
    } else {
      configTrain.currentStep -= 1;
      setConfigTrain({ ...configTrain })
    }
  }
  const handleClose = () => {
    configTrain.currentStep = 1;
    setConfigTrain({ ...configTrain });
    setCount({ 1: 0 })
    setCountForAll({});
    setOrderDetails({});
    setEnableNextButton({ 1: false });
    setSelectRadioVal('');
  }

  useEffect(() => {
    if (selectRadioVal) {
      const currentSection: PageSection = pageData.sections[pageData.section_name[configTrain.currentStep - 1]];
      let showCounter = false;
      let nextButton = false;
      const currentPageCount = count[configTrain.currentStep];
      if (currentSection.variables.length) {
        const variable: VariableSectionPage = currentSection.variables[0];
        if (variable.RF_B_QUANTITY_EXISTS && !variable.allowMultipleAssignments) {
          showCounter = true
        }
      }
      if ((configTrain.currentStep === 1 && ((!countForAll.hasOwnProperty(selectRadioVal) && isColorAll) || (!currentPageCount && showCounter)))
        || (configTrain.currentStep === 2 && ((isColorAll && Object.keys(countForAll).length === 1) || (!isColorAll && !currentPageCount && !Object.keys(countForAll).length)))) {
        nextButton = false
      } else {
        nextButton = true
      }
      enableNextButton[configTrain.currentStep] = nextButton;
      setEnableNextButton({ ...enableNextButton })
    }
  }, [selectRadioVal, isColorAll, configTrain.currentStep, count, countForAll]);

  const selectEdgeType = (val: string, item: ValueSampleOrderpage): void => {
    const newOrderDetails: orderDetails = {}
    newOrderDetails[`${val}`] = item;
    if (selectRadioVal) {
      Object.keys(count).forEach((item: string) => {
        count[parseInt(item)] = 0
      });
      setCount({ ...count });
    }
    setSelectRadioVal(val);
    setCountForAll({});
    setShowError(false);
    setShowErrorForCounterAllIsTrue({});
    setOrderDetails({ ...newOrderDetails })
    setPageData({ ...pageData, detailsContainer: [] })
    interaction.assign(
      Constant.EDGE_TYPE_VAR,
      item.value,
      Constant.ROOT,
      1,
      undefined
    )
  }

  return (
    <div className="sample-order-page">
      {orderDone ? <span className="order-done">
        <div className="order-done-containter">
          <div className="heading-area">
            <img src={assets.rightTic} />
            <span className="done-heading"><RichText text={pageData.thankYouSection.name} /></span>
          </div>
          {pageData.thankYouSection.variables.map((element: VariableSectionPage, index: number) => <span key={index} className="thanks-description"><RichText text={element.name} /></span>)}
        </div>
      </span>
        : <> <div className="container-sample-order">
          {
            isLoading ? <LoadingComponent /> :
              <Suspense fallback={<LoadingComponent />}>
                <div className="train-component">
                  <Train currentStep={configTrain.currentStep} totalSteps={configTrain.totalStep} />
                </div>
                <div className="page-heading">
                  <span className="header">{`${configTrain.currentStep}. ${pageData.sections[pageData.section_name[configTrain.currentStep - 1]].name}`}</span>
                  {pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description?.includes('<br>') ?
                    <div className="color-discription-area">
                      <span className="description-heading"><RichText text={pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description?.slice(0, pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description?.indexOf('<br>'))} /></span>
                      <span className="description"><RichText text={pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description?.slice((pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description?.indexOf('<br>') || 0) + 4, pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description?.length)} /></span>
                    </div> : <span className="description">
                      <RichText text={pageData.sections[pageData.section_name[configTrain.currentStep - 1]].description} />
                    </span>}

                </div>
                {configTrain.currentStep === configTrain.totalStep ?
                  <FinalizeOrderSummaryPage
                    formData={formData}
                    errors={errors}
                    setErrors={setErrors}
                    setFormData={setFormData}
                    configTrain={configTrain}
                    pageData={pageData}
                    isColorAll={isColorAll}
                    countForAll={countForAll}
                    orderDetails={orderDetails} />
                  : <>
                    <DataChips
                      showError={showError}
                      count={count[configTrain.currentStep]}
                      currentStep={configTrain.currentStep}
                      isColorAll={isColorAll}
                      countForAll={countForAll}
                      selectRadioVal={selectRadioVal}
                      maxQuantity={maxQuantity[configTrain.currentStep] || 0}
                      showErrorForCounterAllIsTrue={showErrorForCounterAllIsTrue[configTrain.currentStep] || ''}
                      handleCounter={handleCounter}
                      setSelectRadioVal={selectEdgeType}
                      section={pageData.sections[pageData.section_name[configTrain.currentStep - 1]]}
                    />
                    {selectRadioVal && configTrain["currentStep"] === 1 && <DetailContainer details={pageData["detailsContainer"]} />}
                  </>}
              </Suspense>
          }
        </div>
          <Footer
            orderDone={orderDone}
            disableSubmitButton={disableSubmitButton}
            configTrain={configTrain}
            handleGoBack={handleGoBack}
            handleSubmit={handleSubmit}
            enableNextButton={enableNextButton}
            handleNextButton={handleNextButton} />
        </>}


    </div >
  )
}

export default SampleOrderPageFlow
