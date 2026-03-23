import { useState } from "react";
import { Meta, StoryFn } from '@storybook/react';
import Table from '../components/Table';
import argTypes from './defaultTypes';
import Select from "../components/Select";

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: argTypes("selectionMode"),
} as Meta<typeof Table>

const Template: StoryFn<typeof Table> = (args) => {
  const [tableData, setTableData] = useState(args.data);

  return (
    <Table
      {...args}
      data={tableData}
    />
  );
}



let data: Record<string, any>[] = [
  { itemName: "Rockmin Plus 1", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
  { itemName: "Rockmin Plus 2", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
  { itemName: "Rockmin Plus 3", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" },
  { itemName: "Rockmin Plus 4", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "6cm" },
  { itemName: "Rockmin Plus 5", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "6cm" },
  { itemName: "Rockmin Plus 6", thermalResistance: "1.35m2 K/W", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm" }
];

export const Default = Template.bind({});
Default.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  selectionLowerLimit: 0,
  selectionUpperLimit: 0,
};

export const Preselected = Template.bind({});
Preselected.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  selectionLowerLimit: 0,
  selectionUpperLimit: 1,
  selectionKey: "itemName",
  selectedRows: [data[2]]
};

export const Pagination = Template.bind({});
Pagination.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  pageSize: 3
};

export const Empty = Template.bind({});
Empty.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: []
};

export const CheckboxTable = Template.bind({});
CheckboxTable.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  selectionLowerLimit: 1,
  selectionUpperLimit: 3
}

export const RadioTable = Template.bind({});
RadioTable.args = {
  titleKey: "itemName",
  selectionLowerLimit: 1,
  selectionUpperLimit: 1,
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data
}

export const NoTitle = Template.bind({});
NoTitle.args = {
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data
};

export const EditableWithDropdown = Template.bind({});
EditableWithDropdown.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness", customRender: (row, col) => <Select value={row[col.value]} options={[{ name: "5 cm", value: "5cm" }, { name: "6 cm", value: "6cm" }]} /> },
  ],
  data: data,
  selectionLowerLimit: 2,
  selectionUpperLimit: 5,
};

export const Limit = Template.bind({});
Limit.args = {
  titleKey: "itemName",
  columns: [
    { value: "itemName", name: "Item Name" },
    { value: "thermalResistance", name: "Thermal Resistance" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: data,
  selectionKey: "itemName",
  selectionLowerLimit: 2,
  selectionUpperLimit: 5
};

export const Rich = Template.bind({});
Rich.args = {
  titleKey: "itemName",
  columns: [
    { value: "thermalResistance", name: "**Thermal Resistance**" },
    { value: "conductivity", name: "Conductivity Coefficient Warm" },
    { value: "packaging", name: "Packaging" },
    { value: "thickness", name: "Thickness" },
  ],
  data: [{ itemName: "Rockmin *Plus* 0", thermalResistance: "*1.35m2 K/W*", conductivity: "0.037 W/(mK)", packaging: "6 pcs", thickness: "5cm", description: "The product provides a *medium* level of thermal resistance and conducts heat well. Ideal for a whole-year home in Scandinavia." }, ...data],
  selectionLowerLimit: 0,
  selectionUpperLimit: 3
};
