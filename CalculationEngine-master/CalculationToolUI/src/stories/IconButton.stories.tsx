import { Meta, StoryFn } from '@storybook/react';
import IconButton from '../components/IconButton';
import argTypes from './defaultTypes';
import { assets } from "../backend/backend";

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: argTypes("positionHorizontal")
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: assets.trash
};

export const Center = Template.bind({});
Center.args = {
  positionHorizontal: "Center",
  icon: assets.trash
};

export const Right = Template.bind({});
Right.args = {
  positionHorizontal: "Right",
  icon: assets.trash
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  icon: assets.trash
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  icon: assets.trash
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  icon: assets.trash
};
