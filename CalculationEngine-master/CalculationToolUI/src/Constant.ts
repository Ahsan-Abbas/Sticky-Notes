const Constant: {
  SAMPLE_ORDER: string;
  EDGE_TYPE_PAGE_TITLE: string;
  THICKNESS_PAGE_TITLE: string;
  NRC_CAC_PAGE_TITLE: string;
  COLOR_CHIPS_PAGE_TITLE: string;
  ORDER_DETAILS_PAGE_TITLE: string;
  EDGE_TYPE_PAGE_DESCRIPTION: string;
  THICKNESS_PAGE_DESCRIPTION: string;
  NRC_CAC_PAGE_DESCRIPTION: string;
  COLOR_CHIP_PAGE_HEADING_DESCRIPTION: string;
  COLOR_CHIP_PAGE_DESCRIPTION: string;
  ORDER_DETAILS_PAGE_DESCRIPTION: string;
  NEXT: string;
  GO_BACK: string;
  REVIEW_ORDER_DETAILS: string;
  SUBMIT_ORDER: string;
  LOADING_DATA: string;
  ERROR_MESSAGE_START: string;
  ERROR_MESSAGE_SAMPLES: string;
  COLOR_PAGE_TITLE_DESCRIPTION: string;
  COLOR_PAGE_DESCRIPTION: string;
  MANDATORY_FIELD_ERROR_MESSAGE: string;
  EMAIL_FIELD_ERROR_MESSAGE: string;
  PHONE_NUMBER_FIELD_ERROR_MESSAGE: string;
  HELPER_TEXT: string;
  THANKS_HEADING: string;
  THANKS_DESCRIPTION: string;
  CLOSE: string;
  RF_S_IMAGE_LINK: string;
  RF_B_SHOW_HIDE_FAMILY: string;
  RF_S_SHOW_FAMILY_AS: string;
  RF_S_QUANTITY_FAMILY: string;
  RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE: string;
  SUPPORTING_FEATURES: string;
  VIEW: string;
  RF_S_VIEW_SECTION: string;
  MODEL_PROPERTY_FEATURE: string;
  RF_S_FEATURE_DESCRIPTION: string;
  RF_B_QUANTITY_EXISTS: string;
  RADIO_BUTTON: string;
  QUANTITY: string;
  RF_N_MAX_LIMIT: string;
  DESCRIPTION: string;
  PAGE_HEADER_DESCRIPTION: string;
  RF_SHOW_FAMILY_AS: string;
  RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE_PAGE: string;
  RF_S_SECTION_SUBMODEL: string;
  THANK_YOU: string;
  PLEASE_FILL_IN_YOUR_DETAILS: string;
  SAMPLE_ORDER_SUMMARY: string;
  PLEASE_REVIEW_ORDER_AND_ADD_ORDER_DETAILS: string;
  RF_MARKETO_SOURCE_SYSTEM_ID: string;
  RF_B_MANDATORY: string;
  ERROR_MESSAGE_COLOR_ALL_START: String;
  ERROR_MESSAGE_COLOR_ALL_END: String;
  FLEECE_COLOR: string;
  EDGE_TYPE: string;
  VALUE_AS_LABEL: string;
  RF_S_ADDTIONAL_DESCRITION_FAMILY: string;
  SELECT_EDGE_TYPE: string;
  DROPDOWN: string;
  TRUE: string;
  FALSE: string;
  TEXTAREA:string;
  TELEPHONE: string;
  EMAIL: string;
  FILTER_FORM_FIELD: string[];
  CHECKBOX: string;
  EDGE_TYPE_VAR: string;
  STRING: string;
  ROOT: string;
} = {
  ROOT: "ROOT",
  STRING: 'String',
  EDGE_TYPE_VAR: 'EDGE_TYPE',
  CHECKBOX: 'Checkbox',
  FILTER_FORM_FIELD: ['TextBox', 'Dropdown', 'Telephone'],
  EMAIL: 'email',
  TELEPHONE: 'Telephone',
  DROPDOWN: "Dropdown",
  TRUE: "True",
  FALSE: "False",
  TEXTAREA: "TextArea",
  SELECT_EDGE_TYPE: '|SELECT_EDGE_TYPE|',
  RF_S_ADDTIONAL_DESCRITION_FAMILY: 'RF_S_ADDTIONAL_DESCRITION_FAMILY',
  VALUE_AS_LABEL: 'Value as label',
  EDGE_TYPE: 'Edge type',
  FLEECE_COLOR: 'Fleece Color',
  ERROR_MESSAGE_COLOR_ALL_START: 'You have reached your limit of a total of',
  ERROR_MESSAGE_COLOR_ALL_END: 'samples. Please reduce the sample quantity in the previous step.',
  RF_B_MANDATORY: 'RF_B_MANDATORY',
  PLEASE_REVIEW_ORDER_AND_ADD_ORDER_DETAILS: 'PLEASE_REVIEW_ORDER_AND_ADD_ORDER_DETAILS',
  RF_MARKETO_SOURCE_SYSTEM_ID: 'RF_MARKETO_SOURCE_SYSTEM_ID',
  SAMPLE_ORDER_SUMMARY: 'SAMPLE_ORDER_SUMMARY',
  PLEASE_FILL_IN_YOUR_DETAILS: 'PLEASE_FILL_IN_YOUR_DETAILS',
  THANK_YOU: 'THANK_YOU',
  RF_S_SECTION_SUBMODEL: 'RF_S_SECTION_SUBMODEL',
  RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE_PAGE: 'RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE_PAGE',
  RF_SHOW_FAMILY_AS: 'RF_SHOW_FAMILY_AS',
  DESCRIPTION: 'DESCRIPTION',
  PAGE_HEADER_DESCRIPTION: "Page Header Description",
  RF_N_MAX_LIMIT: 'RF_N_MAX_LIMIT',
  QUANTITY: "Quantity",
  RADIO_BUTTON: 'Radio Button',
  RF_B_QUANTITY_EXISTS: 'RF_B_QUANTITY_EXISTS',
  RF_S_FEATURE_DESCRIPTION: 'RF_S_FEATURE_DESCRIPTION',
  RF_S_VIEW_SECTION: 'RF_S_VIEW_SECTION',
  RF_S_IMAGE_LINK: 'RF_S_IMAGE_LINK',
  MODEL_PROPERTY_FEATURE: 'MODEL_PROPERTY_FEATURE',
  RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE: 'RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE',
  RF_B_SHOW_HIDE_FAMILY: 'RF_B_SHOW_HIDE_FAMILY',
  RF_S_SHOW_FAMILY_AS: 'RF_S_SHOW_FAMILY_AS',
  RF_S_QUANTITY_FAMILY: 'RF_S_QUANTITY_FAMILY',
  SUPPORTING_FEATURES: 'SUPPORTING_FEATURES',
  VIEW: "VIEW",
  CLOSE: "Close",
  THANKS_HEADING: "Thank you for your order",
  THANKS_DESCRIPTION: "Your sample order has been submitted successfully and is being processed. Orders placed before 1pm CST are shipped the same day. Orders placed after 1pm CST will be shipped the next business day. You will receive a confirmation email and a shipping notification with tracking information.",
  SAMPLE_ORDER: "Sample Order",
  EDGE_TYPE_PAGE_TITLE: "Choose edge type",
  THICKNESS_PAGE_TITLE: "Select thickness",
  NRC_CAC_PAGE_TITLE: "Select NRC/ CAC",
  COLOR_CHIPS_PAGE_TITLE: "Add fleece color sample",
  ORDER_DETAILS_PAGE_TITLE: "Finalize your sample order",
  EDGE_TYPE_PAGE_DESCRIPTION: "Our acoustic ceiling tiles are available in a wide variety of edge types. These ceiling tile types include square lay-in, square or angled tegular/reveal, direct mount, and concealed or semi-concealed edges. Explore your options here.",
  THICKNESS_PAGE_DESCRIPTION: "Small description explaining the selection.",
  NRC_CAC_PAGE_DESCRIPTION: "Small description explaining the selection.",
  COLOR_CHIP_PAGE_HEADING_DESCRIPTION: "Choose color chips for your sample order.",
  COLOR_CHIP_PAGE_DESCRIPTION: "*Variations in color matches of system components to ceiling panels can result from slight differences in texture, room lighting, painting process and subjectivity of observers.",
  ORDER_DETAILS_PAGE_DESCRIPTION: "Please fill in you details",
  NEXT: "Next",
  GO_BACK: "Go back",
  REVIEW_ORDER_DETAILS: "Please review order and add order details",
  SUBMIT_ORDER: "Submit order",
  LOADING_DATA: "Loading data",
  ERROR_MESSAGE_START: "You have reached your limit of",
  ERROR_MESSAGE_SAMPLES: "samples",
  COLOR_PAGE_DESCRIPTION: "*Variations in color matches of system components to ceiling panels can result from slight differences in texture, room lighting, painting process and subjectivity of observers.",
  COLOR_PAGE_TITLE_DESCRIPTION: "Choose color chips for your sample order.",
  MANDATORY_FIELD_ERROR_MESSAGE: "This field is required.",
  PHONE_NUMBER_FIELD_ERROR_MESSAGE: "Must be a phone number",
  EMAIL_FIELD_ERROR_MESSAGE: "Must be a valid email. example@yourdomain.com",
  HELPER_TEXT: "Helper text",
};


export default Constant;
