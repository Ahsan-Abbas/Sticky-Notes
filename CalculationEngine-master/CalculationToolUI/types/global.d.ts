interface IApplicationInput {
  model: string;
  view: string;
  market: string;
  language: string;
  theme: string;
  packageVersion: string;
  wi: string;
  enableAnalytics: boolean;
  load: "all" | "current";
  sampleorder: boolean
}

interface IConfigState {
  date: Date;
  currentSection?: string;
  loading: boolean;
  assignments: Assignment[];
  configuration: ConfigureResponse;
  input: IApplicationInput;
  packageVersion: string;
}

interface IAssignment {
  variableId: string;
  value: any;
  instanceId: string;
}

type Page = {
  section: Section;
  content: ReactNode;
}

type ShowAsOptions = "Tile" | "Tile with description" | "Dropdown" | "Radio Button" | "Checkbox" | "Button" | "Lookup" | "Label only" | "Table" | "Image" | "Value as label" | "Text" | "Picture-on-picture" | "Bullet list" | "Default";
type IncompatibleValues = "Hide" | "Show Mixed" | "Show Last";
type FeatureSorting = "Alphanumeric" | "Custom";
type TextStyle = "Normal" | "H1" | "H2" | "H3" | "No label" | "Warning" | "Long text";
type HorizontalPosition = "Left" | "Center" | "Right";
type VerticalPosition = "Top" | "Center" | "Bottom";
type ListSelectionMode = "None" | "Single" | "Multiple";
type GroupShowAs = "Normal" | "Expand/collapse" | "Expand/collapse families";
type LookupSourceSystem = "PIM" | "BIM";
type ListViewType = "table" | "tile";
type GroupStyle = "Highlight background" | "Horizontal lines";

/** Display info for Pages/Sections */
interface IGroupDisplayInfo {
  columns: number;
  show: boolean;
  showAs: GroupShowAs;
  showAsSpecification: string;
  style: GroupStyle[];
  width: string;
}

/** Display info for Variables */
interface IVariableDisplayInfo {
  action: Action | "";
  show: boolean;
  showAs: ShowAsOptions;
  showAsSpecification: string;
  unitOfMeasure: string;
  mandatory: boolean;
  readOnly: boolean;
  image: string;
  valueText: string;
  currentValue: Value | undefined;
  values: Value[];
  textStyleFeature: TextStyle;
  textStyleFamily: TextStyle;
  controlPositionHorizontal: HorizontalPosition;
  //controlPositionVertical: VerticalPosition;
  labelAlignment: HorizontalPosition;
  labelPosition: HorizontalPosition | VerticalPosition;
  featureSorting: FeatureSorting;
  incompatibleValues: IncompatibleValues;
  spacingAfter: number;
  spacingBefore: number;
}

type AceConfigureRequest = {
  currency?: string;
  language?: string;
  date: Date;
  viewId?: string;
  line: {
    quantity?: { value: number; unit: string };
    productId: string;
    variableAssignments?: Assignment[];
    arguments?: Record<any, any>;
    //sublines, priceLineAssignments
  };
  globalArguments?: Record<any, any>;
  settings?: {
    debug?: boolean;
    includeStateAndJustification?: boolean;
    includeArguments?: boolean;
    includeAllValues?: boolean;
    assignmentResolutionOrder?: "LastThenFirst" | "LastThenRemoveFewest" | "LastToFirst" | "ByPriority";
    includePriceLines?: boolean;
    includeSections?: string[];
    includeProperties?: string[];
    includeVariables?: string[];
    includeVariablesNotInView?: boolean;
    phaseBehavior?: "Default";
    onlyPriceTotals?: boolean;
    noStateHash?: boolean;
    skipDefaults?: boolean;
    disablePriceCalculations?: boolean;
  }
};

type ConfigureResponse = {
  phases: Phase[];
  sections: Section[];
  removedAssignments: {
    variableAssignments: IncompatibleAssignment[];
  };
  isComplete: boolean;
  isConfigurable: boolean;
  packagePath: string;
  product?: {
    id: string;
    name: string;
    isConfigurable: boolean;
  };
 /* phaseCompletion: {
    completedPhases: number;
    isComplete: boolean;
    totalPhases: number;
  }
  language: string;*/
};

type Phase = {
  id: string;
  isComplete: boolean;
  sections: Section[];
};

type Assignment = {
  variableId?: string;
  value?: string | number;
  valueName?: string;
  variableName?: string;
  instanceId: string;
  type?: "Instance" | "Singleton"; //TODO: | "AllowedValues"
  priority?: number;
};

type IncompatibleAssignment = { //TODO
  type: "IntervalValue" | "SingletonValue" | "ConfigurationValue";
  instanceId?: string;
  variable: Variable;
  value: Value;
};

type Value = {
  name: string;
  description?: string; //Custom addition
  value: string | number;
  incompatible: boolean;
  type: "IntervalValue" | "SingletonValue" | "ConfigurationValue";
  assigned?: "byRule" | "byPhase" | "byDefault" | "byUser" | "byCalculation" | "";
  excluded?: any;
  lower?: number | null; //For data variables, type is string
  upper?: number | null;
  isLowerInfinity?: boolean | null;
  isUpperInfinity?: boolean | null;
  isAllowed: boolean | null;
  properties: Property[];
  //state: "Available" | "Unavailable" | "Selected" | "Inferred";
  //justification: "None" | "Rule" | "Assignment" | "Default" | "Phase";
};

type Variable = {
  id: string;
  name: string;
  description?: string; //Custom addition
  valueType: "String" | "Number" | "Date" | "Boolean";
  scale: number | null;
  distinctValueCount: number;
  allowMultipleAssignments: boolean;
  values: Value[];
  properties: Property[];
  isInstanceCollectionVariable: boolean;
  scale?: number;
  distinctValueCount?: number;
  hasAllowedValues: boolean;
  readOnly: boolean;
  issues?: Issue[];
};

type Issue = {
  type: string;
  message: string;
  sources: string[];
  affectedVariables: string[];
};

type Property = {
  id: string;
  value: string | number | Date | boolean;
  type: "String" | "Number" | "Date" | "Boolean";
};

type Section = {
  type: "Section" | "Instance" | "InstanceCollection";
  id: string;
  name: string;
  variables: Variable[];
  sections: Section[];
  properties: Property[];
  instanceCollectionVariable?: Variable; // only when type === InstanceCollection
};

//Types for Ace Product endpoints

type AceProductsResponse = {
  packagePath: string;
  products: AceProduct[];
  total: number;
  language: string;
};

type AceProduct = {
  id: string;
  name: string;
  description: string;
  unit: string;
  properties: AceProductProperty[];
  capabilities: AceCapabilities;
};

type AceProductProperty = {
  id: string;
  value: string | number | bool | Date;
  type: string;
};

type AceCapabilities = {
  configuration: boolean;
  solutionSpace: boolean;
  conflicts: boolean;
  explain: boolean;
};

type AceProductResponse = {
  packagePath: string;
  id: string;
  variables: AceProductVariable[];
  views: AceView[];
  capabilities: AceCapabilities;
};

type AceProductVariable = {
  type: string;
  values: AceProductValue[];
  isMultiValued: boolean;
  id: string;
  name: string;
  isEnumerated: boolean;
  variableUsage: string;
  hasPredefinedDomain: boolean;
  properties: AceProductProperty[];
};

type AceProductValue = {
  id: string;
  name: string;
};

type AceView = {
  id: string;
  default: boolean;
};

//Custom types

type NameValuePair<TVal = string> = {
  name: string;
  value: TVal;
}

type FormattingInfo = {
  number?: Intl.NumberFormatOptions
}

interface IConfigInteraction {
  assign: (variableId: string, value: any, instanceId: string, sectionId?: string) => Promise<void>;
  unassign: (variableId: string, instanceId: string, sectionId?: string) => Promise<void>;
  assignMultiple: (newAssignments: IAssignment[], sectionId?: string) => Promise<void>;
  reset: (sectionId?: string) => Promise<void>;
  loadSection: (sectionId: string | null) => Promise<void>;
  setSection: (sectionId: string | null) => void;
}

type ListViewColumnFunctionality = "filter" | "input" | "delete";

interface IListViewColumn {
  name: string;
  value: string;
  childObject?: string;
  formatting?: FormattingInfo;
  functionality?: ListViewColumnFunctionality;
  headerStyle?: TextStyle;
  textStyle?: TextStyle;
  mandatory?: boolean;
}

interface IListColumn {
  name: string;
  value: string;
  childObject?: string;
  formatting?: FormattingInfo;
  customRender?: (row: Record<string, any>, col: IListViewColumn) => ReactNode;
  headerStyle?: TextStyle; //TODO: implement
  textStyle?: TextStyle; //TODO: implement
  mandatory?: boolean; //TODO: implement
}

//Types for Accordion functionality
type VariableOrValueReference = {
  value?: string;
  variable?: string;
}

type AccordionDefinition = {
  currentExpandedIndexVariable: string;
  sectionName: string;
  headerTextStyle?: TextStyle;
  headerPositionHorizontal?: HorizontalPosition;
  header: VariableOrValueReference[];
  subHeaderColumns?: number;
  subHeader: VariableOrValueReference[];
  delete?: ListDeleteOptions;
}

type AccordionFamilyDefinition = {
  defaultExpandedFamilies?: string[];
  headerTextStyle?: TextStyle;
  headerPositionHorizontal?: HorizontalPosition;
  showSelectionCount?: boolean;
}

//Types for lookup functionality
type LookupSourceSystem = "PIM" | "BIM";
type FilterMatching = "Any" | "All";

type LookupDefinitionOld = {
  sourceSystem: LookupSourceSystem;
  sourceScope: string; //Data scope in the source system - For PIM, this would be the channel
  customColumns: LookupCustomField[];
  input: LookupParameter[];
  inputMatching?: FilterMatching | string; //Matching all is default
  output: LookupOutParameterOld[];
  outputPath?: string | string[]; //If output is in another part of the model
  outputModel?: string; //if defined, names the submodel where selections should be saved to
  outputCount?: string;
  selectTable: {
    columns: LookupColumn[];
    selectionColumn?: LookupOutParameterOld; //Used to link the checkbox/radio button to a variable so selections can be preserved
    sorting?: LookupSorting[];
    selectionLowerLimit?: number;
    selectionUpperLimit?: number;
    views?: ListViewType[];
  };
}

type LookupCustomField = {
  sourceAttribute: string; //name of the custom field
  dataType: "string" | "number" | "boolean";
  defaultValue?: string | number | boolean;
  unit?: string;
}

type LookupParameter = {
  value?: string; //direct value
  sourceAttribute: string; //Source system column name
  sourceEntity?: string;
  configAttribute?: string;
  filter?: string;
}

type LookupOutParameterOld = {
  sourceAttribute: string; //Source system column name
  sourceEntity?: string;
  configAttribute: string;
  configSection?: string;
}

type LookupColumn = {
  sourceAttribute: string; //Source system column name
  sourceEntity?: string;
  displayName: string;
  filterable?: boolean; //Default is false
  displayConditions?: Condition[];
  displayConditionMatching?: FilterMatching | string;
  usage?: "title" | "image" | "description";
  formatting?: FormattingInfo;
}

type Condition = {
  configAttribute: string;
  comparison: "=" | "!=" | "<" | "<=" | ">" | ">=";
  value: string | number | boolean;
}

type LookupSorting = {
  sourceAttribute: string;
  sourceEntity?: string;
  direction?: "Ascending" | "Descending"; //Ascending order is default
}

type LookupField = {
  sourceAttribute: string;
  sourceEntity?: string | null;
  value?: string | number;
  filter?: string;
}

//Updated Lookup
type LookupOutParameter = {
  sourceAttribute: string; //Source system column name
  sourceEntity?: string;
  configAttribute: string;
  configSection?: string;
  custom?: boolean;
  show?: boolean;
  //rest are only used if show === true
  fallback?: string;
  filterable?: boolean; //Default is false
  displayConditions?: Condition[];
  displayConditionMatching?: FilterMatching | string;
  usage?: "title" | "image" | "description";
  formatting?: FormattingInfo;
  defaultValue?: any; //only if custom = true
};

type LookupDefinition = {
  sourceSystem: LookupSourceSystem;
  sourceScope: string; //Data scope in the source system - For PIM, this would be the channel
  input: LookupParameter[];
  inputPath?: string | string[];
  inputMatching?: FilterMatching | string; //Matching all is default
  output: LookupOutParameter[];
  outputPath?: string | string[]; //If output is in another part of the model
  outputModel?: string; //if defined, names the submodel where selections should be saved to
  outputCount?: string;
  selectionColumnSourceAttribute?: string; //Used to link the checkbox/radio button to a variable so selections can be preserved
  sorting?: LookupSorting[];
  selectionLowerLimit?: number;
  selectionUpperLimit?: number;
  views?: ListViewType[];

  displayNames?: Record<string, string>;
}

//Types for Show As = Table
type ListDeleteOptions = {
  enabled: boolean;
  decrementOnDelete?: string;
}

type TableDefinition = {
  type: ListViewType | ListViewType[];
  columns: TableDefinitionColumn[];
  dataPath?: string[] | string;
  section?: string;
  model: string;
  header: string;
  image?: string;
  delete?: ListDeleteOptions;
}

type TableDefinitionColumn = {
  configAttribute: string;
  formatting?: FormattingInfo;
  displayConditions?: Condition[];
  displayConditionMatching?: FilterMatching | string;
}

//Types for buttons
type ActionSpecification = ActionIncrementDefinition | ActionDocumentDefinition | ActionFileDefinition | ActionSetValueDefinition | ActionGoToDefinition | ActionBasicDefinition;
type Action = "Increment" | "GenerateDocument" | "OpenFile" | "SetValue" | "Go_To" | "Reset" | "Send to Marketo";

type ActionIncrementDefinition = {
  action: "Increment";
  step?: number;
  target?: string;
}

type ActionDocumentDefinition = {
  action: "GenerateDocument";
  template: string;
  fileName?: string;
}

type ActionFileDefinition = {
  action: "OpenFile";
  link?: string;
}

type ActionBasicDefinition = {
  action: "Reset" | "Send to Marketo";
}

type ActionSetValueDefinition = {
  action: "SetValue";
  fromVariable?: string;
  fromPath?: string | string[];
  value?: string;
  toVariable?: string
  toPath?: string | string[];
}

type ActionGoToDefinition = {
  action: "Go_To";
  page: string | number;
}

type CoordinateBase = "TopLeft" | "Center";

type PictureOnPictureDefinition = {
  width: string;
  height: string;
  layerSection: string;
  layerNumber: string
  imageVariable: string;
  positionX: string;
  positionY: string;
  coordinateBase?: CoordinateBase;
};

type PictureOnPictureImageGenerationModel = {
  //  activeLayer: number,
  dimensions: ImageGenerationDimension;
  layers: ImageGenerationLayer[];
  coordinateBase?: CoordinateBase;
}

type ImageGenerationDimension = {
  width: number;
  height: number;
  //  frameImage: number
}

type ImageGenerationPosition = {
  x: number;
  y: number;
  rotate?: number;
}

type ImageGenerationLayer = {
  layerPosition: number;
  visible: number;
  path: string;
  position: ImageGenerationPosition;
}

//Types for events
type PageEvent = {
  event: "paging";
  eventValue: number;
  state: IConfigState;
}

type ResetEvent = {
  event: "reset";
}

type AssignEvent = {
  event: "assign" | "unassign",
  eventValue: Assignment;
}

type AssignMultipleEvent = {
  event: "assign-multiple";
  eventValue: Assignment[];
}

type ActionEvent = {
  event: "action";
  eventValue: ActionSpecification;
  variable: Variable;
  section: Section;
  state: IConfigState;
}

type CommonEventContext = {
  input: IApplicationInput;
}

type AppEvent = PageEvent | ResetEvent | AssignEvent | AssignMultipleEvent | ActionEvent;

type EventContext = AppEvent & CommonEventContext;

interface DataChipsProps {
  showRadioSelection?: boolean;
  showCounter?: boolean;
  showColorDetails?: boolean;
  showDescription?: boolean;
  showAllCounter?: boolean;
  isColorAll?: boolean;
  count?:  number;
  showError?: boolean;
  selectRadioVal?: string;
  setSelectRadioVal?: (val: string, item: ValueSampleOrderpage) => void;
  countForAll?: countForAll;
  showErrorForCounterAllIsTrue?: string;
  handleCounter?: (val: number, key: string, item: ValueSampleOrderpage) => void;
  section: PageSection;
  currentStep?: number;
  maxQuantity?: number;
}

interface countForAll {
  [key: string]: number;
}

interface orderDetails {
  [key: string]: ValueSampleOrderpage;
}

type counter = (val: number, key: string, item: ValueSampleOrderpage) => void;

interface configTrain {
  totalStep: number;
  currentStep: number;
};

type inputFormFields = {
  name: string;
  label: string;
  error: string | undefined;
  value: string;
}

type formData = {
  [key: string]: string
}

type error = {
  [key: string]: string
}

type enableNextButton = {
  [key: string]: boolean
}



type PageSection = {
  type: string;
  id: string;
  name: string;
  description?: string;
  variables: VariableSectionPage[];
  sections: PageSection[];
  properties: PropertySampleOrderPage[];
};

type VariableSectionPage = {
  id: string;
  name: string;
  description?: string | null; //Custom addition
  valueType: string;
  scale: number | null;
  distinctValueCount: number;
  allowMultipleAssignments: boolean;
  values: ValueSampleOrderpage[];
  properties: PropertySampleOrderPage[];
  isInstanceCollectionVariable: boolean;
  scale?: number;
  distinctValueCount?: number;
  hasAllowedValues: boolean;
  readOnly: boolean;
  issues?: Issue[];
  RF_N_MAX_LIMIT?: number;
  RF_S_SHOW_FAMILY_AS?: string;
  RF_SHOW_FAMILY_AS?: string;
  RF_B_QUANTITY_EXISTS?: boolean;
  RF_MARKETO_SOURCE_SYSTEM_ID?: string;
  RF_B_MANDATORY?: boolean;
  RF_TELEPHONE_COUNTRY_CODE?:  string;
  RF_S_ADDTIONAL_DESCRITION_FAMILY?: string
};

type ValueSampleOrderpage = {
  name: string;
  variableId?: string;
  description?: string | null; //Custom addition
  value: string | number;
  incompatible: boolean;
  type: string;
  assigned?: string;
  excluded?: { incompatible?: boolean} | any;
  lower?: number | null; //For data variables, type is string
  upper?: number | null;
  isLowerInfinity?: boolean | null;
  isUpperInfinity?: boolean | null;
  isAllowed: boolean | null;
  properties: PropertySampleOrderPage[];
  RF_S_FEATURE_DESCRIPTION?: string ;
  RF_S_IMAGE_LINK?: string;
  RF_S_QUANTITY_FAMILY?: string;
  RF_N_MAX_LIMIT?: number;
  RF_COLOR_ALL_EDGE_DESCRIPTION?: string;
};
interface PropertySampleOrderPage  {
  id: string;
  value: string | number | boolean | Date;
  type: string;
};

interface modelPropertyFeature {
  [key: string] : string[] | { [key: string]: string };
  RF_S_VIEW_SECTION?: string[];
  RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE?: string[];
  RF_S_DISPLAY_FEATURE_DESCRIPTION_MESSAGE_PAGE?: string[];
  RF_S_SECTION_SUBMODEL?: { [key: string]: string }
}

interface IConfigInteractionSampleOrder {
  assign: (variableId: string, value: any, instanceId: string, priority: number, sectionId?: string) => Promise<void>;
  unassign: (variableId: string, instanceId: string, sectionId?: string) => Promise<void>;
  assignMultiple: (newAssignments: IAssignment[], sectionId?: string) => Promise<void>;
  reset: (sectionId?: string) => Promise<void>;
  loadSection: (sectionId: string | null) => Promise<void>;
  setSection: (sectionId: string | null) => void;
}

type pageData ={
    name: string;
    sections: {[key: string]: PageSection};
    detailsContainer: VariableSectionPage[];
    section_name: string[];
    thankYouSection: {
      name: string;
      variables: VariableSectionPage[]
    },
    finalOrderSummary: {
      heading: string;
      description: string;
    }
  
}

type quantityCount = {
  [key: number ] : number;
}

interface FooterComponent {
    orderDone: boolean;
    configTrain: {
        currentStep: number,
        totalStep: number
    };
    handleGoBack: () => void;
    handleSubmit: () => void;
    handleNextButton: () => void;
    disableSubmitButton: boolean;
    enableNextButton: { [key: string]: boolean }
}

interface appInput {
    "model": string;
    "view":  string;
    "market": string;
    "language": string;
    "theme": string;
    "packageVersion": string;
    "wi": string;
    "enableAnalytics": boolean;
    "load": string;
    "sampleorder": boolean;
}