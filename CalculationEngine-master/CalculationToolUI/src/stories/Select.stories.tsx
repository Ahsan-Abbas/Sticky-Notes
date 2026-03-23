import { StoryFn, Meta } from '@storybook/react';
import Select from '../components/Select';
import argTypes from './defaultTypes';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: argTypes("textStyle"),
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const Short = Template.bind({});
Short.args = {
  options: [
    { name: "First Option", value: "1" },
    { name: "Second Option", value: "2" }
  ],
};

export const Long = Template.bind({});
Long.args = {
  options: [
    { name: "First Option", value: "1" },
    { name: "Second Option", value: "2" },
    { name: "Third Option", value: "3" },
    { name: "Fourth Option", value: "4" },
    { name: "Fifth Option", value: "5" },
    { name: "Sixth Option", value: "6" },
    { name: "Seventh Option", value: "7" },
    { name: "Eigth Option", value: "8" },
    { name: "Ninth Option", value: "9" },
    { name: "Tenth Option", value: "10" }
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  options: [],
};

