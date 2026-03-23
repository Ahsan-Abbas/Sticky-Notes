import { StoryFn, Meta } from '@storybook/react';
import Tiles from '../components/Tiles';
import argTypes from './defaultTypes';
import Professional from "../assets/construction-mortar-machine.svg";
import ExternalWall from "../assets/construction-fence.svg";
import { getPublicUrl } from '../backend/backend';

export default {
  title: 'Components/Tiles',
  component: Tiles,
  argTypes: argTypes("textStyle", "positionHorizontal"),
} as Meta<typeof Tiles>

const Template: StoryFn<typeof Tiles> = (args) => <Tiles {...args} />;

export const SingleValue = Template.bind({});
SingleValue.args = {
  data: [{
    imageUrl: getPublicUrl(ExternalWall),
    label: "Roof",
    value: "one",
  }]
};

export const MultiValueWithSelected = Template.bind({});
MultiValueWithSelected.args = {
  data: [{
    imageUrl: getPublicUrl(ExternalWall),
    label: "Roof",
    value: "one"
  }, {
    imageUrl: getPublicUrl(ExternalWall),
    label: "Wall",
    value: "two"
  }],
  selectedValue: "two"
};

export const Centered = Template.bind({});
Centered.args = {
  data: [{
    imageUrl: getPublicUrl(ExternalWall),
    label: "Roof",
    value: "one"
  }, {
    imageUrl: getPublicUrl(ExternalWall),
    label: "Wall",
    value: "two"
  }],
  selectedValue: "two",
  positionHorizontal: "Center"
};

export const Right = Template.bind({});
Right.args = {
  data: [{
    imageUrl: getPublicUrl(ExternalWall),
    label: "Roof",
    value: "one"
  }, {
    imageUrl: getPublicUrl(ExternalWall),
    label: "Wall",
    value: "two"
  }],
  selectedValue: "two",
  positionHorizontal: "Right"
};

export const ManyValues = Template.bind({});
let data = [];
for (let i = 1; i < 50; i++)
  data.push({
    imageUrl: getPublicUrl(ExternalWall),
    label: i.toString(),
    value: i.toString()
  });
ManyValues.args = {
  data: data,
  selectedValue: "two"
};

export const Size = Template.bind({});
Size.args = {
  data: [{
    imageUrl: getPublicUrl(Professional),
    label: "Roof",
    value: "one",
    description: "This option provides technical data and documents for the contractor."
  }],
  size: "Large"
};

export const Rich = Template.bind({});
Rich.args = {
  data: [{
    imageUrl: getPublicUrl(Professional),
    label: "Very *Rich* label",
    value: "one",
    description: "This option provides technical data and documents for the contractor."
  }, {
    imageUrl: getPublicUrl(Professional),
    label: "Other **Rich** label",
    value: "two",
    description: "This option provides technical data and documents for the contractor."
  }]
};
