# Rockwool Calculation Tool UI

## Running the project
Before starting, run the command `npm install` to get all dependencies installed.
Run the command `npm run dev` to start the Storybook UI for developing components - further instructions are available in that UI.

## Link to mockups
[Quantity Calculator](https://www.figma.com/file/IciII6bn4MJeuiA3zPYOQV/Quantity-Calculator-Mockup?node-id=248%3A439)

[U-Value Calculator](https://www.figma.com/file/eNCbo1Etkk86HOwZ2YwUs7/U-Value-Calculator-Mockup?node-id=332%3A3&t=ye58VPSbkqsU4C0Z-0)

## Tasks:
* Update Stories with the props that were added recently before the demo
* Implement components from mockup
    * SelectableImageGroup - renders multiple SelectableImage controls
        * Props:
            * values: { name: string, value: string, image?: string, incompatible?: boolean }[];
            * onChange?: (value: string) => void;
    * DatePicker
    * Map
* Implement Template handling component (selecting different templates, and implement one template)
* Enhance Ace Object type definitions to be more correct (e.g. only having "lower"/"upper" in the Value object when type === "IntervalValue")
* Emit events on user selection

## Pending tasks that can be pushed to future release
* Implement theme handling (maybe simply css variables?)
* Storybook enhancements
    * Theme selection? (https://storybook.js.org/addons/storybook-addon-themes)
