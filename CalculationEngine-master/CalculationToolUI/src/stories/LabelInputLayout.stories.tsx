import { StoryFn, Meta } from '@storybook/react';
import Label from '../components/Label';
import Input from '../components/Input';
import LabelInputLayout from '../components/LabelInputLayout';
import argTypes from './defaultTypes';

export default {
  title: 'Components/LabelInputLayout',
  component: LabelInputLayout,
  argTypes: argTypes("labelPosition"),
} as Meta<typeof LabelInputLayout>

const Template: StoryFn<typeof LabelInputLayout> = (args) => <LabelInputLayout {...args} label={<Label text="My Label" />} control={<Input value="Test" />} />;

export const Default = Template.bind({});
Default.args = {
};

