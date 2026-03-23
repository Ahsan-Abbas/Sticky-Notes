import { Meta, StoryFn } from '@storybook/react';
import Button from '../components/Button';
import argTypes from './defaultTypes';
import { assets } from '../backend/backend';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: argTypes("textStyle", "positionHorizontal")
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  textStyle: "Normal"
};

export const Center = Template.bind({});
Center.args = {
  primary: true,
  label: "Button",
  positionHorizontal: "Center"
};

export const Right = Template.bind({});
Right.args = {
  primary: true,
  label: "Button",
  positionHorizontal: "Right"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Next',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: "Button",
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  primary: true,
  size: 'large',
  label: "Calculate (1) project",
  iconLeft: assets.arrowLeft
};

export const IconRight = Template.bind({});
IconRight.args = {
  primary: true,
  size: 'medium',
  label: "Button",
  iconRight: assets.arrowRight
};

export const MultiIcon = Template.bind({});
MultiIcon.args = {
  primary: true,
  size: 'medium',
  label: "Button",
  iconLeft: assets.arrowLeft,
  iconRight: assets.arrowRight
};

export const Disabled = Template.bind({});
Disabled.args = {
  primary: true,
  label: "Button",
  textStyle: "Normal",
  disabled: true
};

export const Rich = Template.bind({});
Rich.args = {
  primary: true,
  label: "Very *Rich* button",
  textStyle: "Long text"
};

export const Ghost = Template.bind({});
Ghost.args = {
  primary: true,
  ghost: true,
  label: "Ghost Button",
  size: 'medium',
  iconLeft: assets.arrowLeft,
};
