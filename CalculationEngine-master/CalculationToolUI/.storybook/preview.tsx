import "../src/App.scss";
import { Preview } from '@storybook/react';
import { setTranslations } from "../src/backend/translations";
import { setBase } from "../src/backend/backend";

const isLocalhost = import.meta.url.includes("localhost"); //TODO: check for production build instead
const parameters: Preview = {
  /*actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },*/
  /*argTypes: {
    textStyle: {
      type: {
        name: "enum",
        value: ["Normal", "H1", "H2", "H3", "Warning", "Long text"]
      }
    },
    headerStyle: {
      type: {
        name: "enum",
        value: ["Normal", "H1", "H2", "H3", "Warning"]
      }
    },
    positionHorizontal: {
      type: {
        name: "enum",
        value: ["Left", "Center", "Right"]
      }
    },
    labelPosition: {
      type: {
        name: "enum",
        value: ["Left", "Center", "Right", "Top", "Bottom"]
      }
    },
    selectionMode: {
      type: {
        name: "enum",
        value: ["Single", "Multiple", "None"]
      }
    },
    imageDisplayMode: {
      type: {
        name: "enum",
        value: ["Responsive", "Thumbnail", "Column"]
      }
    }
  }*/
  decorators: [
    (Story, ctx) => {
      return <div id="calculation-ui">
        {!isLocalhost ? <link rel="stylesheet" href="/calculation.css" /> : ""}
        <Story />
      </div>
    }

  ]
}
export default parameters;

//Initialize default translations
setTranslations();
if (!isLocalhost)
  setBase("/storybook");
