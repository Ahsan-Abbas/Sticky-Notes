import { StoryFn, Meta } from '@storybook/react';
import ListView from '../components/ListView';

export default {
  title: 'Components/ListView',
  component: ListView,
  argTypes: {
  },
} as Meta<typeof ListView>

const Template: StoryFn<typeof ListView> = (args) => <ListView {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    { name: "itemName", value: "Item Name" },
    { name: "thermalResistance", value: "Thermal Resistance" },
    { name: "conductivity", value: "Conductivity Coefficient Warm" },
    { name: "packaging", value: "Packaging" },
    { name: "thickness", value: "Thickness" },
  ],
  data: [
    { itemName: "Rockmin Plus 1", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
    { itemName: "Rockmin Plus 2", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
    { itemName: "Rockmin Plus 3", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
    { itemName: "Rockmin Plus 4", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
    { itemName: "Rockmin Plus 5", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
    { itemName: "Rockmin Plus 6", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" }
  ]
};
