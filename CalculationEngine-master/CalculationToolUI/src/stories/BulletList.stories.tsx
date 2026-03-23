import { StoryFn, Meta } from '@storybook/react';
import BulletList from '../components/BulletList';
import argTypes from './defaultTypes';
import { assets } from '../backend/backend';

export default {
  title: 'Components/BulletList',
  component: BulletList,
  argTypes: argTypes("positionHorizontal"),
} as Meta<typeof BulletList>

const Template: StoryFn<typeof BulletList> = (args) => <BulletList {...args} />;

export const UnorderedList = Template.bind({});
UnorderedList.args = {
  values: ["Some products carry a minimum order quantity.", "Other thicknesses may be available on request, please contact us.", "Pack sizes are subject to change, please check before purchase."],
  definitionText: JSON.stringify({ listStyle: "bullet" }),
};

export const Numbered = Template.bind({});
Numbered.args = {
  values: ["First line", "Second line", "Third line"],
  definitionText: JSON.stringify({ listStyle: "numbered" }),
};

export const OnlyBulletList = Template.bind({});
OnlyBulletList.args = {
  values: ["Just bullet lines", "Second line", "Third line"],
  definitionText: JSON.stringify({ listStyle: "bullet" }),
};

export const OnlyNumberedList = Template.bind({});
OnlyNumberedList.args = {
  values: ["Just bullet lines", "Second line", "Third line"],
  definitionText: JSON.stringify({ listStyle: "numbered" }),
  textStyle: "Normal"
};

export const Warning = Template.bind({});
Warning.args = {
  values: ["Just bullet lines", "Second line", "Third line"],
  textStyle: "Warning",
};

