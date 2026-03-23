import { StoryFn, Meta } from '@storybook/react';
import Radio from '../components/Radio';
import argTypes from './defaultTypes';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: argTypes("positionHorizontal", "textStyle"),
} as Meta<typeof Radio>

const Template: StoryFn<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [{ name: "label 1", value: "1" }, { name: "label 2", value: "2" }],
  display: "stacked"
};

export const Inline = Template.bind({});
Inline.args = {
  options: [{ name: "label 1", value: "1" }, { name: "label 2", value: "2" }],
  display: "inline"
};

export const Incompatible = Template.bind({});
Incompatible.args = {
  options: [{ name: "label 1", value: "1" }, { name: "label 2", value: "2", incompatible: true }],
  display: "inline"
};

export const Rich = Template.bind({});
Rich.args = {
  options: [{ name: "label *number* 1", value: "1" }, { name: "label **number** 2", value: "2" }],
  display: "stacked"
};
