import { StoryFn, Meta } from '@storybook/react';
import Checkbox from '../components/Checkbox';
import argTypes from './defaultTypes';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: argTypes("positionHorizontal", "textStyle"),
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelText: "Label"
};

export const NoLabel = Template.bind({});
NoLabel.args = {
};

export const Disabled = Template.bind({});
Disabled.args = {
  labelText: "Label",
  disabled: true
};

export const RichText = Template.bind({});
RichText.args = {
  labelText: "Very **rich** label"
};

