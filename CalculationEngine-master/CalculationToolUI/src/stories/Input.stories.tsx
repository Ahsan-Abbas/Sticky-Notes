import { StoryFn, Meta } from '@storybook/react';
import Input from '../components/Input';
import argTypes from './defaultTypes';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: argTypes("textStyle"),
} as Meta<typeof Input>

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  value: "test"
};

export const Number = Template.bind({});
Number.args = {
  type: "number"
};

export const Label = Template.bind({});
Label.args = {
  type: "number",
  unit: "mm"
};

export const Readonly = Template.bind({});
Readonly.args = {
  type: "text",
  value: "This is a readonly field",
  readOnly: true
};
