import { StoryFn, Meta } from '@storybook/react';
import Train from '../components/Train';

export default {
  title: 'Components/Train',
  component: Train,
  argTypes: {
  },
} as Meta<typeof Train>

const Template: StoryFn<typeof Train> = (args) => <Train {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalSteps: 5,
  currentStep: 4
};

export const Long = Template.bind({});
Long.args = {
  totalSteps: 9,
  currentStep: 5
};
