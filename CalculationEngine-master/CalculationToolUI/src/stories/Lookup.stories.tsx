import { StoryFn, Meta } from '@storybook/react';
import Lookup from '../infrastructure/Lookup';

export default {
  title: 'Pages/Lookup',
  component: Lookup,
  argTypes: {
  },
} as Meta<typeof Lookup>

const Template: StoryFn<typeof Lookup> = (args) => <Lookup {...args} />;

export const Default = Template.bind({});
Default.args = {
  definitionText: JSON.stringify({
    "displayNames": {
      "itemThermalResistance10": "Thermal Resistance"
    },
    "input": [
      {
        "configAttribute": "ROCKWOOLPRODUCTAPPLICATION",
        "sourceAttribute": "productRockwoolProductApplication[{key}]"
      },
      {
        "configAttribute": "CONSTRUCTIONTYPE",
        "sourceAttribute": "productConstructionType[{key}]"
      }
    ],
    "sourceScope": "320057",
    "sourceSystem": "PIM",
    "inputMatching": "All",
    "output": [
      {
        "configAttribute": "DISPLAYNAME",
        "show": true,
        "sourceAttribute": "productDisplayName",
        "usage": "title"
      },
      {
        "configAttribute": "PRODUCT_THICKNESS",
        "show": true,
        "sourceAttribute": "itemThickness",
        "sourceEntity": "items",
        "filterable": true,
        "formatting": {
          "number": {
            "style": "unit",
            "unit": "millimeter"
          }
        }
      },
      {
        "configAttribute": "",
        "show": true,
        "sourceAttribute": "itemThermalResistance10",
        "sourceEntity": "items",
        "formatting": {
          "number": {
            "maximumFractionDigits": 2,
            "minimumFractionDigits": 2
          }
        }
      },
      {
        "configAttribute": "DECLAREDTHERMALCONDUCTIVITY",
        "show": true,
        "sourceAttribute": "itemThermalConductivity10",
        "sourceEntity": "items",
        "formatting": {
          "number": {
            "maximumFractionDigits": 3,
            "minimumFractionDigits": 3
          }
        }
      },
      {
        "configAttribute": "M2PACK",
        "show": true,
        "sourceAttribute": "itemM2Pack",
        "sourceEntity": "items",
        "formatting": {
          "number": {
            "maximumFractionDigits": 2,
            "minimumFractionDigits": 2
          }
        }
      },
      {
        "configAttribute": "M2PALLET",
        "show": true,
        "sourceAttribute": "itemM2Pallet",
        "sourceEntity": "items",
        "formatting": {
          "number": {
            "maximumFractionDigits": 2,
            "minimumFractionDigits": 2
          }
        }
      },
      {
        "configAttribute": "PRODUCT_IMAGE",
        "show": true,
        "sourceAttribute": "@ProductMainPicture",
        "usage": "image"
      },
      {
        "configAttribute": "SQUARE_FOOTAGE_FIELD",
        "show": true,
        "sourceAttribute": "squareMeter",
        "custom": true
      },
      {
        "configAttribute": "ITEMSKU",
        "sourceAttribute": "itemSku",
        "sourceEntity": "items"
      }
    ],
    "outputModel": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL",
    "selectionColumnSourceAttribute": "productDisplayName",
    "selectionLowerLimit": 0,
    "selectionUpperLimit": 10,
    "sorting": [
      {
        "direction": "Descending",
        "sourceAttribute": "productDisplayName"
      }
    ]
  }),
  section: {
    "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS",
    "name": "PIM and Subparts",
    "type": "Section",
    "sections": [
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.CALCLATION_VIEW_01",
            "name": "Quantity Calculator subpart model 1",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.CALCLATION_VIEW_01.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 1,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byRule",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 1,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "YES",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byRule",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "MANDATORY",
                        "value": "True",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "MANDATORY",
                        "value": "True",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "MANDATORY",
                        "value": "True",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_1.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.CALCLATION_VIEW_01_1",
            "name": "Quantity Calculator subpart model 2",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.CALCLATION_VIEW_01_1.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_2.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.CALCLATION_VIEW_01_2",
            "name": "Quantity Calculator subpart model 3",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.CALCLATION_VIEW_01_2.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_3.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.CALCLATION_VIEW_01_3",
            "name": "Quantity Calculator subpart model 4",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.CALCLATION_VIEW_01_3.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_4.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.CALCLATION_VIEW_01_4",
            "name": "Quantity Calculator subpart model 5",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.CALCLATION_VIEW_01_4.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_5.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.CALCLATION_VIEW_01_5",
            "name": "Quantity Calculator subpart model 6",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.CALCLATION_VIEW_01_5.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_6.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.CALCLATION_VIEW_01_6",
            "name": "Quantity Calculator subpart model 7",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.CALCLATION_VIEW_01_6.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_7.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.CALCLATION_VIEW_01_7",
            "name": "Quantity Calculator subpart model 8",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.CALCLATION_VIEW_01_7.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_8.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.CALCLATION_VIEW_01_8",
            "name": "Quantity Calculator subpart model 9",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.CALCLATION_VIEW_01_8.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_9.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10",
        "name": "RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10",
        "type": "Section",
        "sections": [
          {
            "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.CALCLATION_VIEW_01_9",
            "name": "Quantity Calculator subpart model 10",
            "type": "Section",
            "sections": [
              {
                "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.CALCLATION_VIEW_01_9.PAGE_1__PRODUCT_SELECTION",
                "name": "Page 1 - Product selection",
                "type": "Section",
                "sections": [],
                "variables": [
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.HIDE_GROUP",
                    "name": "Hide group",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SHOW_HIDE_GROUP",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.HIDE_SUBPART",
                    "name": "Hide subpart",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 2,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "No",
                        "value": "NO",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      },
                      {
                        "name": "Yes",
                        "value": "YES",
                        "type": "SingletonValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "byDefault",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": null,
                        "isUpperInfinity": null,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.IMV_REQUIRED",
                    "name": "Required",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.UI_ACTIVE_LAYER_NUMBER",
                    "name": "Active layer number",
                    "valueType": "Number",
                    "scale": 0,
                    "distinctValueCount": 101,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.SQUARE_FOOTAGE_FIELD",
                    "name": "What is your square footage?",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 9999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "2ced430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.DISPLAYNAME",
                    "name": "Product",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.M2PACK",
                    "name": "Product Coverage [m²/pack]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.M2PALLET",
                    "name": "Product Coverage [m²/pallet]",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 99999001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 99999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.ITEMTERMALRESISTANCE",
                    "name": "Thermal resistance",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "9be43dfe-4e5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.DECLAREDTHERMALCONDUCTIVITY",
                    "name": "Thermal conductivity Λ",
                    "valueType": "Number",
                    "scale": 3,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 100,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.PRODUCT_THICKNESS",
                    "name": "Thickness",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 100001,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 1000,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.ITEMSKU",
                    "name": "Item SKU",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.PRODUCT_IMAGE",
                    "name": "Product image",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.QUANTITY_CALCULATION_PALLETS_02",
                    "name": "Total pallets required",
                    "valueType": "Number",
                    "scale": 1,
                    "distinctValueCount": 99999991,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 9999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "f4ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.QUANTITY_CALCULATION_PACKS",
                    "name": "Total packs required",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "e8ec430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.NUMBER_OF_PACKS_PDF",
                    "name": "Number of packs",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.NUMBER_OF_PALLETS_PDF",
                    "name": "Number of pallets",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.QUANTITY_CALCULATION_TOTAL_M2",
                    "name": "Your requirements",
                    "valueType": "Number",
                    "scale": 2,
                    "distinctValueCount": 99999901,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": 0,
                        "upper": 999999,
                        "isLowerInfinity": false,
                        "isUpperInfinity": false,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      },
                      {
                        "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                        "value": "8eed430a-4f5c-ee11-be6e-6045bd905f04",
                        "type": "String"
                      },
                      {
                        "id": "UNIT_OF_MEASURE",
                        "value": "m²",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.PRODUCT_ITEMTYPE",
                    "name": "Product form",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": false,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.TOTAL_COVERAGE",
                    "name": "Total coverage",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.YOUR_REQUIREMENTS",
                    "name": "Your requirements",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  },
                  {
                    "id": "QUANTITY_CALCULATOR_COLLECTION_1.RW_QUANTITY_CALCULATOR_SUBPART_MODEL_10.THICKNESS_WITH_UOM",
                    "name": "Thickness",
                    "valueType": "String",
                    "scale": null,
                    "distinctValueCount": 0,
                    "allowMultipleAssignments": false,
                    "hasAllowedValues": false,
                    "readOnly": true,
                    "isInstanceCollectionVariable": false,
                    "values": [
                      {
                        "name": "",
                        "value": "",
                        "type": "IntervalValue",
                        "incompatible": false,
                        "isAllowed": null,
                        "assigned": "",
                        "lower": null,
                        "upper": null,
                        "isLowerInfinity": true,
                        "isUpperInfinity": true,
                        "excluded": null,
                        "properties": []
                      }
                    ],
                    "properties": [
                      {
                        "id": "SHOW_HIDE_FAMILY",
                        "value": "Hide",
                        "type": "String"
                      }
                    ]
                  }
                ],
                "properties": []
              }
            ],
            "variables": [],
            "properties": []
          }
        ],
        "variables": [],
        "properties": []
      },
      {
        "id": "STANDARD_VIEW_01.PAGE_2__PRODUCT_SELECTION.COLLECTION_1.STANDARD_VIEW_01.PAGE_GROUP_HEADER.QUANTITY_SUBPART_MODELS.PIM_AND_SUBPARTS.PARAMETERS",
        "name": "Parameters",
        "type": "Section",
        "sections": [],
        "variables": [
          {
            "id": "QUANTITY_CALCULATOR_COLLECTION_1.HIDE_GROUP",
            "name": "Hide group",
            "valueType": "String",
            "scale": null,
            "distinctValueCount": 0,
            "allowMultipleAssignments": false,
            "hasAllowedValues": false,
            "readOnly": false,
            "isInstanceCollectionVariable": false,
            "values": [
              {
                "name": "",
                "value": "",
                "type": "IntervalValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": true,
                "isUpperInfinity": true,
                "excluded": null,
                "properties": []
              }
            ],
            "properties": [
              {
                "id": "SHOW_HIDE_GROUP",
                "value": "Hide",
                "type": "String"
              }
            ]
          },
          {
            "id": "QUANTITY_CALCULATOR_COLLECTION_1.ROCKWOOLPRODUCTAPPLICATION",
            "name": "Construction area",
            "valueType": "String",
            "scale": null,
            "distinctValueCount": 4,
            "allowMultipleAssignments": false,
            "hasAllowedValues": false,
            "readOnly": false,
            "isInstanceCollectionVariable": false,
            "values": [
              {
                "name": "External wall",
                "value": "EXTERNAL_WALL",
                "type": "SingletonValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "byUser",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "ExternalWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "cf2f58a0-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Internal floor",
                "value": "INTERNAL_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "InternalFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "ed2f58a0-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Internal wall",
                "value": "INTERNAL_WALL",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=v3pcYuuxUnoksK-RYJ8O0w",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "InternalWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "f52f58a0-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=XMUH6rAkEDa0dptIz8LJsA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Roof",
                "value": "ROOF",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=DvlvK5S18w2iitww96aFiA",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "Roof",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "ff2f58a0-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=8W37P_91UjcXC6V5EBBudA",
                    "type": "String"
                  }
                ]
              }
            ],
            "properties": [
              {
                "id": "SHOW_AS",
                "value": "Tile",
                "type": "String"
              },
              {
                "id": "MANDATORY",
                "value": "True",
                "type": "String"
              },
              {
                "id": "INCOMPATIBLE_VALUES",
                "value": "Show Mixed",
                "type": "String"
              },
              {
                "id": "SOURCE_SYSTEM_ID_PIM",
                "value": "ProductRockwoolProductApplication",
                "type": "String"
              },
              {
                "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                "value": "ef6e5610-4f5c-ee11-be6e-6045bd905f04",
                "type": "String"
              }
            ]
          },
          {
            "id": "QUANTITY_CALCULATOR_COLLECTION_1.CONSTRUCTIONTYPE",
            "name": "Select construction type",
            "valueType": "String",
            "scale": null,
            "distinctValueCount": 11,
            "allowMultipleAssignments": false,
            "hasAllowedValues": false,
            "readOnly": false,
            "isInstanceCollectionVariable": false,
            "values": [
              {
                "name": "Attic/Loft",
                "value": "ATTIC_OR_LOFT",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=DvlvK5S18w2iitww96aFiA",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "AtticLoft",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "e67f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=8W37P_91UjcXC6V5EBBudA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Cavity wall",
                "value": "CAVITY_WALL",
                "type": "SingletonValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "byUser",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "CavityWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "877f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Cladded facade",
                "value": "CLADDED_FACADE",
                "type": "SingletonValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "CladdedFacade",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "9b7f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Flat roof",
                "value": "FLAT_ROOF",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=-3MaHJaJ4BYEWJOyRlf9KA",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "FlatRoof",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "e87f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=P2G98y1wTlZlZopu1o67EQ",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Floating floor",
                "value": "FLOATING_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "FloatingFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "d37f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Ground floor",
                "value": "GROUND_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "GroundFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "d57f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Intermediate floor",
                "value": "INTERMEDIATE_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "IntermediateFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "d77f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Metal wall",
                "value": "METAL_WALL",
                "type": "SingletonValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "MetalWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "be7f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Partition wall",
                "value": "PARTITION_WALL",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=v3pcYuuxUnoksK-RYJ8O0w",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "PartitionWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "dd7f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=XMUH6rAkEDa0dptIz8LJsA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Separation wall",
                "value": "SEPERATION_WALL",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=v3pcYuuxUnoksK-RYJ8O0w",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "SeparationWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "e37f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=XMUH6rAkEDa0dptIz8LJsA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Timber frame",
                "value": "TIMBER_FRAME",
                "type": "SingletonValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "TimberFrame",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "c17f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              }
            ],
            "properties": [
              {
                "id": "SHOW_HIDE_FAMILY",
                "value": "Show",
                "type": "String"
              },
              {
                "id": "SHOW_AS",
                "value": "Tile",
                "type": "String"
              },
              {
                "id": "MANDATORY",
                "value": "True",
                "type": "String"
              },
              {
                "id": "INCOMPATIBLE_VALUES",
                "value": "Hide",
                "type": "String"
              },
              {
                "id": "SOURCE_SYSTEM_ID_PIM",
                "value": "ProductConstructionType",
                "type": "String"
              },
              {
                "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                "value": "072e3604-4f5c-ee11-be6e-6045bd905f04",
                "type": "String"
              }
            ]
          },
          {
            "id": "QUANTITY_CALCULATOR_COLLECTION_1.APPLICATIONTYPE",
            "name": "Select application type",
            "valueType": "String",
            "scale": null,
            "distinctValueCount": 16,
            "allowMultipleAssignments": false,
            "hasAllowedValues": false,
            "readOnly": false,
            "isInstanceCollectionVariable": false,
            "values": [
              {
                "name": "Attic/Loft floor",
                "value": "ATTIC_OR_LOFT",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=DvlvK5S18w2iitww96aFiA",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "AtticLoftFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "ee954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=8W37P_91UjcXC6V5EBBudA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Cavity wall",
                "value": "CAVITY_WALL",
                "type": "SingletonValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "byRule",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "CavityWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "fa7f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Concrete floor",
                "value": "CONCRETE_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "ConcreteFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "c6954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Flat Roof Refurbishment",
                "value": "FLAT_ROOF_REFURBISHMENT",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=-3MaHJaJ4BYEWJOyRlf9KA",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "0f964dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=P2G98y1wTlZlZopu1o67EQ",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Floating floor",
                "value": "FLOATING_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "FloatingFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "bf954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Ground facing floor",
                "value": "GROUND_FACING_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=EUIgPIQylmsIKpTgM2kaGw",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "c1954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=2bt301BxhvwWxe8N2dAj8A",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Metal casettes",
                "value": "METAL_CASETTES",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "MetalCasettes",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "2e8050a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Metal stud floor",
                "value": "METAL_STUD_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "cc954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Metal stud wall",
                "value": "METAL_STUD_WALL",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=v3pcYuuxUnoksK-RYJ8O0w",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "MetalStudWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "de954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=XMUH6rAkEDa0dptIz8LJsA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Separation wall",
                "value": "SEPERATION_WALL",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=v3pcYuuxUnoksK-RYJ8O0w",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "SeparationWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "e9954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=XMUH6rAkEDa0dptIz8LJsA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Suspended floor",
                "value": "SUSPENDED_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=avE_ppxkFk_1jb6HpKRMJQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "SuspendedFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "c3954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=Dq-jF5FAEcJdYlLoNaj2CA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Timber frame",
                "value": "TIMBER_FRAME",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "TimberFrame",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "338050a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Timber stud wall",
                "value": "TIMBER_STUD_WALL",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=v3pcYuuxUnoksK-RYJ8O0w",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "TimberStudWall",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "e5954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=XMUH6rAkEDa0dptIz8LJsA",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Ventilated facade",
                "value": "VENTILATED_FACADE",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "VentilatedFacade",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "fe7f50a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Ventilated façade system",
                "value": "VENTILATED_FACADE_SYSTEM",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=vOETxCGCzeZdKW_h504vag",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "VentilatedFacadeSystem",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "018050a6-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=HETn8DJImSHjRTrxomziSg",
                    "type": "String"
                  }
                ]
              },
              {
                "name": "Wooden floor",
                "value": "WOODEN_FLOOR",
                "type": "SingletonValue",
                "incompatible": true,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": null,
                "isUpperInfinity": null,
                "excluded": null,
                "properties": [
                  {
                    "id": "IMAGE",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=5v_E09rvW0mvtus8Pd6KUQ",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_PIM",
                    "value": "WoodenFloor",
                    "type": "String"
                  },
                  {
                    "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                    "value": "d0954dac-6558-ee11-be6e-6045bd90543a",
                    "type": "String"
                  },
                  {
                    "id": "IMAGE_SELECTED",
                    "value": "https://brandcommunity.rockwool.com/readimage.aspx/asset.svg?pubid=NnrGkz62d_umURg5V_0_jw",
                    "type": "String"
                  }
                ]
              }
            ],
            "properties": [
              {
                "id": "SHOW_HIDE_FAMILY",
                "value": "Hide",
                "type": "String"
              },
              {
                "id": "SHOW_AS",
                "value": "Tile",
                "type": "String"
              },
              {
                "id": "INCOMPATIBLE_VALUES",
                "value": "Hide",
                "type": "String"
              },
              {
                "id": "SOURCE_SYSTEM_ID_PIM",
                "value": "ProductApplicationType",
                "type": "String"
              },
              {
                "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
                "value": "0c6f5610-4f5c-ee11-be6e-6045bd905f04",
                "type": "String"
              }
            ]
          },
          {
            "id": "QUANTITY_CALCULATOR_COLLECTION_1.PRODUCT_IMAGE",
            "name": "Product image",
            "valueType": "String",
            "scale": null,
            "distinctValueCount": 0,
            "allowMultipleAssignments": false,
            "hasAllowedValues": false,
            "readOnly": false,
            "isInstanceCollectionVariable": false,
            "values": [
              {
                "name": "",
                "value": "",
                "type": "IntervalValue",
                "incompatible": false,
                "isAllowed": null,
                "assigned": "",
                "lower": null,
                "upper": null,
                "isLowerInfinity": true,
                "isUpperInfinity": true,
                "excluded": null,
                "properties": []
              }
            ],
            "properties": [
              {
                "id": "SHOW_HIDE_FAMILY",
                "value": "Hide",
                "type": "String"
              }
            ]
          }
        ],
        "properties": []
      }
    ],
    "variables": [
      {
        "id": "QUANTITY_CALCULATOR_COLLECTION_1.SELECT_PRODUCTS_TEXT",
        "name": "Products Found:",
        "valueType": "String",
        "scale": null,
        "distinctValueCount": 0,
        "allowMultipleAssignments": false,
        "hasAllowedValues": false,
        "readOnly": false,
        "isInstanceCollectionVariable": false,
        "values": [
          {
            "name": "",
            "value": "",
            "type": "IntervalValue",
            "incompatible": false,
            "isAllowed": null,
            "assigned": "",
            "lower": null,
            "upper": null,
            "isLowerInfinity": true,
            "isUpperInfinity": true,
            "excluded": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": "SHOW_HIDE_FAMILY",
            "value": "Show",
            "type": "String"
          },
          {
            "id": "SHOW_AS",
            "value": "Label only",
            "type": "String"
          },
          {
            "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
            "value": "eb9da5f8-ac74-ee11-8179-6045bd905f04",
            "type": "String"
          }
        ]
      },
      {
        "id": "QUANTITY_CALCULATOR_COLLECTION_1.PRODUCTS_FOUND_SUBHEADER",
        "name": "Please select the desired product(s)  from the list below. Next to each required product, please select the thickness required using the drop down list, and then enter the required m²  amount in the field indicated. Please ensure you measure and enter the requirements of your project accurately as the system will use these dimensions to calculate the required quantity of products for your project*.",
        "valueType": "String",
        "scale": null,
        "distinctValueCount": 0,
        "allowMultipleAssignments": false,
        "hasAllowedValues": false,
        "readOnly": false,
        "isInstanceCollectionVariable": false,
        "values": [
          {
            "name": "",
            "value": "",
            "type": "IntervalValue",
            "incompatible": false,
            "isAllowed": null,
            "assigned": "",
            "lower": null,
            "upper": null,
            "isLowerInfinity": true,
            "isUpperInfinity": true,
            "excluded": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": "SHOW_HIDE_FAMILY",
            "value": "Show",
            "type": "String"
          },
          {
            "id": "SHOW_AS",
            "value": "Label only",
            "type": "String"
          },
          {
            "id": "TEXT_STYLE_FAMILY",
            "value": "Long text",
            "type": "String"
          },
          {
            "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
            "value": "dd9da5f8-ac74-ee11-8179-6045bd905f04",
            "type": "String"
          }
        ]
      },
      {
        "id": "QUANTITY_CALCULATOR_COLLECTION_1.PRODUCTS_FOUND_SUBHEADER_WARNING",
        "name": "Please note, no allowance has been taken into account for a timber or steel fraction in the quantity and this needs to be calculated by the user.",
        "valueType": "String",
        "scale": null,
        "distinctValueCount": 0,
        "allowMultipleAssignments": false,
        "hasAllowedValues": false,
        "readOnly": false,
        "isInstanceCollectionVariable": false,
        "values": [
          {
            "name": "",
            "value": "",
            "type": "IntervalValue",
            "incompatible": false,
            "isAllowed": null,
            "assigned": "",
            "lower": null,
            "upper": null,
            "isLowerInfinity": true,
            "isUpperInfinity": true,
            "excluded": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": "SHOW_HIDE_FAMILY",
            "value": "Show",
            "type": "String"
          },
          {
            "id": "SHOW_AS",
            "value": "Label only",
            "type": "String"
          },
          {
            "id": "TEXT_STYLE_FAMILY",
            "value": "Warning",
            "type": "String"
          },
          {
            "id": "SPACING_AFTER",
            "value": 15,
            "type": "Number"
          },
          {
            "id": "SOURCE_SYSTEM_ID_REFERENCE_DATA_SERVICE",
            "value": "049ea5f8-ac74-ee11-8179-6045bd905f04",
            "type": "String"
          }
        ]
      },
      {
        "id": "QUANTITY_CALCULATOR_COLLECTION_1.PIM_RESULT_01",
        "name": "PIM result",
        "valueType": "String",
        "scale": null,
        "distinctValueCount": 0,
        "allowMultipleAssignments": false,
        "hasAllowedValues": false,
        "readOnly": false,
        "isInstanceCollectionVariable": false,
        "values": [
          {
            "name": "",
            "value": "",
            "type": "IntervalValue",
            "incompatible": false,
            "isAllowed": null,
            "assigned": "",
            "lower": null,
            "upper": null,
            "isLowerInfinity": true,
            "isUpperInfinity": true,
            "excluded": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": "SHOW_HIDE_FAMILY",
            "value": "Show",
            "type": "String"
          },
          {
            "id": "SHOW_AS",
            "value": "Lookup",
            "type": "String"
          },
          {
            "id": "SHOW_AS_SPECIFICATION",
            "value": "{     \"customColumns\": [         {             \"dataType\": \"number\",             \"sourceAttribute\": \"squareMeter\"         }     ],     \"input\": [         {             \"configAttribute\": \"ROCKWOOLPRODUCTAPPLICATION\",             \"sourceAttribute\": \"productRockwoolProductApplication[{key}]\"         },         {             \"configAttribute\": \"CONSTRUCTIONTYPE\",             \"sourceAttribute\": \"productConstructionType[{key}]\"         }     ],     \"inputMatching\": \"All\",     \"output\": [         {             \"configAttribute\": \"DECLAREDTHERMALCONDUCTIVITY\",             \"sourceAttribute\": \"itemThermalConductivity10\",             \"sourceEntity\": \"items\"         },         {             \"configAttribute\": \"PRODUCT_THICKNESS\",             \"sourceAttribute\": \"itemThickness\",             \"sourceEntity\": \"items\"         },         {             \"configAttribute\": \"M2PACK\",             \"sourceAttribute\": \"itemM2Pack\",             \"sourceEntity\": \"items\"         },         {             \"configAttribute\": \"M2PALLET\",             \"sourceAttribute\": \"itemM2Pallet\",             \"sourceEntity\": \"items\"         },         {             \"configAttribute\": \"ITEMSKU\",             \"sourceAttribute\": \"itemSku\",             \"sourceEntity\": \"items\"         },         {             \"configAttribute\": \"PRODUCT_IMAGE\",             \"sourceAttribute\": \"@ProductMainPicture\"         },         {             \"configAttribute\": \"SQUARE_FOOTAGE_FIELD\",             \"sourceAttribute\": \"squareMeter\"         }     ],     \"outputModel\": \"RW_QUANTITY_CALCULATOR_SUBPART_MODEL\",     \"selectTable\": {         \"columns\": [             {                 \"displayName\": \"Product name\",                 \"sourceAttribute\": \"productDisplayName\",                 \"usage\": \"title\"             },             {                 \"displayName\": \"**Select thickness**\",                 \"filterable\": true,                 \"formatting\": {                     \"number\": {                         \"style\": \"unit\",                         \"unit\": \"millimeter\"                     }                 },                 \"sourceAttribute\": \"itemThickness\",                 \"sourceEntity\": \"items\"             },             {                 \"displayName\": \"Thermal Resistance\",                 \"formatting\": {                     \"number\": {                         \"maximumFractionDigits\": 2,                         \"minimumFractionDigits\": 2                     }                 },                 \"sourceAttribute\": \"itemThermalResistance10\",                 \"sourceEntity\": \"items\"             },             {                 \"displayName\": \"\\u039b - Thermal conductivity\",                 \"formatting\": {                     \"number\": {                         \"maximumFractionDigits\": 3,                         \"minimumFractionDigits\": 3                     }                 },                 \"sourceAttribute\": \"itemThermalConductivity10\",                 \"sourceEntity\": \"items\"             },             {                 \"displayName\": \"Product Coverage [m\\u00b2/pack]\",                 \"formatting\": {                     \"number\": {                         \"maximumFractionDigits\": 2,                         \"minimumFractionDigits\": 2                     }                 },                 \"sourceAttribute\": \"itemM2Pack\",                 \"sourceEntity\": \"items\"             },             {                 \"displayName\": \"Product Coverage [m\\u00b2/pallet]\",                 \"formatting\": {                     \"number\": {                         \"maximumFractionDigits\": 2,                         \"minimumFractionDigits\": 2                     }                 },                 \"sourceAttribute\": \"itemM2Pallet\",                 \"sourceEntity\": \"items\"             },             {                 \"displayName\": \"Image\",                 \"sourceAttribute\": \"@ProductMainPicture\",                 \"usage\": \"image\"             },             {                 \"displayName\": \"**Enter square metre [m²]**\",                 \"sourceAttribute\": \"squareMeter\"             }         ],         \"selectionColumn\": {             \"configAttribute\": \"DISPLAYNAME\",             \"sourceAttribute\": \"productDisplayName\"         },         \"selectionLowerLimit\": 0,         \"selectionUpperLimit\": 10,         \"sorting\": [             {                 \"direction\": \"Descending\",                 \"sourceAttribute\": \"productDisplayName\"             }         ]     },     \"sourceScope\": \"320057\",     \"sourceSystem\": \"PIM\" }",
            "type": "String"
          }
        ]
      },
      {
        "id": "QUANTITY_CALCULATOR_COLLECTION_1.PIM_RESULT_02",
        "name": "PIM result",
        "valueType": "String",
        "scale": null,
        "distinctValueCount": 0,
        "allowMultipleAssignments": false,
        "hasAllowedValues": false,
        "readOnly": false,
        "isInstanceCollectionVariable": false,
        "values": [
          {
            "name": "",
            "value": "",
            "type": "IntervalValue",
            "incompatible": false,
            "isAllowed": null,
            "assigned": "",
            "lower": null,
            "upper": null,
            "isLowerInfinity": true,
            "isUpperInfinity": true,
            "excluded": null,
            "properties": []
          }
        ],
        "properties": [
          {
            "id": "SHOW_HIDE_FAMILY",
            "value": "Hide",
            "type": "String"
          },
          {
            "id": "SHOW_AS",
            "value": "Lookup",
            "type": "String"
          },
          {
            "id": "SHOW_AS_SPECIFICATION",
            "value": "{ \"sourceSystem\": \"PIM\", \"sourceScope\": \"320057\", \"inputMatching\": \"All\", \"outputModel\": \"RW_QUANTITY_CALCULATOR_SUBPART_MODEL\", \"input\": [ { \"configAttribute\": \"ROCKWOOLPRODUCTAPPLICATION\", \"sourceAttribute\": \"productRockwoolProductApplication[{key}]\" }, { \"configAttribute\": \"CONSTRUCTIONTYPE\", \"sourceAttribute\": \"productConstructionType[{key}]\" } ], \"customColumns\": [ { \"dataType\": \"number\", \"sourceAttribute\": \"squareMeter\"}], \"output\": [ { \"configAttribute\": \"DECLAREDTHERMALCONDUCTIVITY\", \"sourceAttribute\": \"itemThermalConductivity10\", \"sourceEntity\": \"items\" }, { \"configAttribute\": \"PRODUCT_THICKNESS\", \"sourceAttribute\": \"itemThickness\", \"sourceEntity\": \"items\" }, { \"sourceAttribute\": \"itemM2Pack\", \"configAttribute\": \"M2PACK\", \"sourceEntity\": \"items\" }, { \"sourceAttribute\": \"itemM2Pallet\", \"configAttribute\": \"M2PALLET\", \"sourceEntity\": \"items\" }, { \"sourceAttribute\": \"itemSku\", \"configAttribute\": \"ITEMSKU\", \"sourceEntity\": \"items\" }, { \"configAttribute\": \"PRODUCT_IMAGE\", \"sourceAttribute\": \"@ProductMainPicture\" }, {\"configAttribute\": \"SQUARE_FOOTAGE_FIELD\", \"sourceAttribute\": \"squareMeter\"} ], \"selectTable\": { \"columns\": [ { \"sourceAttribute\": \"productDisplayName\", \"displayName\": \"Product name\", \"usage\": \"title\" }, { \"sourceAttribute\": \"productShortDescription\", \"displayName\": \"Product description\", \"usage\": \"description\" }, { \"sourceAttribute\": \"itemThickness\", \"displayName\": \"**Select thickness**\", \"filterable\": true, \"sourceEntity\": \"items\", \"formatting\": { \"number\": {\"unit\": \"millimeter\", \"style\": \"unit\"} } }, { \"sourceAttribute\": \"itemThermalResistance10\", \"displayName\": \"Thermal Resistance\", \"sourceEntity\": \"items\", \"formatting\": { \"number\": { \"minimumFractionDigits\": 2, \"maximumFractionDigits\": 2 } } }, { \"sourceAttribute\": \"itemThermalConductivity10\", \"displayName\": \"Λ - Thermal conductivity\", \"sourceEntity\": \"items\", \"formatting\": { \"number\": { \"minimumFractionDigits\": 3, \"maximumFractionDigits\": 3 } } }, { \"sourceAttribute\": \"itemM2Pack\", \"displayName\": \"Product Coverage [m²/pack]\", \"sourceEntity\": \"items\", \"formatting\": { \"number\": { \"minimumFractionDigits\": 2, \"maximumFractionDigits\": 2 } } }, { \"sourceAttribute\": \"itemM2Pallet\", \"displayName\": \"Product Coverage [m²/pallet]\", \"sourceEntity\": \"items\", \"formatting\": { \"number\": { \"minimumFractionDigits\": 2, \"maximumFractionDigits\": 2 } } }, { \"displayName\": \"Image\", \"sourceAttribute\": \"@ProductMainPicture\", \"usage\": \"image\" }, {\"displayName\": \"**Enter square metre [m²]**\", \"sourceAttribute\": \"squareMeter\" } ], \"selectionColumn\": { \"configAttribute\": \"DISPLAYNAME\", \"sourceAttribute\": \"productDisplayName\" }, \"sorting\": [ { \"sourceAttribute\": \"productDisplayName\", \"direction\": \"Descending\" } ], \"selectionLowerLimit\": 0, \"selectionUpperLimit\": 10 } }",
            "type": "String"
          }
        ]
      }
    ],
    "properties": []
  }
};

