import { StoryFn, Meta } from '@storybook/react';
import DataTiles from '../components/DataTiles';
import product from "../assets/RockProduct-1.png";
import { getPublicUrl } from '../backend/backend';

export default {
  title: 'Components/DataTiles',
  component: DataTiles,
  argTypes: {
  },
} as Meta<typeof DataTiles>

const Template: StoryFn<typeof DataTiles> = (args) => <DataTiles {...args} />;

let data = [
  { itemName: "Rockmin Plus 1", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm", image: getPublicUrl(product), description: "The product provides a medium level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." },
  { itemName: "Rockmin Plus 2", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm", image: getPublicUrl(product), description: "The product provides a medium level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." },
  { itemName: "Rockmin Plus 3", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm", image: getPublicUrl(product), description: "The product provides a medium level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." },
  { itemName: "Rockmin Plus 4", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "6cm", image: getPublicUrl(product), description: "The product provides a medium level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." },
  { itemName: "Rockmin Plus 5", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "6cm", image: getPublicUrl(product), description: "The product provides a medium level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." },
  { itemName: "Rockmin Plus 6", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm", image: getPublicUrl(product), description: "The product provides a medium level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." }
];
export const Default = Template.bind({});
Default.args = {
  titleKey: "itemName",
  imageKey: "image",
  columns: [
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data
};

export const Single = Template.bind({});
Single.args = {
  titleKey: "itemName",
  imageKey: "image",
  columns: [
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  selectionLowerLimit: 1,
  selectionUpperLimit: 1
};

export const Multiple = Template.bind({});
Multiple.args = {
  titleKey: "itemName",
  imageKey: "image",
  columns: [
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  selectionLowerLimit: 1,
  selectionUpperLimit: 3
};

export const Rich = Template.bind({});
Rich.args = {
  titleKey: "itemName",
  imageKey: "image",
  columns: [
    { value: "thermalResistance", name: "**Thermal Resistance**" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: [{ itemName: "Rockmin *Plus* 0", thermalResistance: "*1.35m2 K/W*", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm", image: getPublicUrl(product), description: "The product provides a *medium* level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." }, ...data],
  selectionLowerLimit: 0,
  selectionUpperLimit: 3
};
