import { StoryFn, Meta } from '@storybook/react';
import Label from '../components/Label';
import argTypes from './defaultTypes';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: argTypes("textStyle", "positionHorizontal"),
} as Meta<typeof Label>

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const ShowLabel = Template.bind({});
ShowLabel.args = {
  text: "Label",
  required: true
};

export const Right = Template.bind({});
Right.args = {
  text: "Label",
  required: true,
  positionHorizontal: "Right"
};


export const CenterH1 = Template.bind({});
CenterH1.args = {
  text: "Label",
  required: true,
  positionHorizontal: "Center",
  textStyle: "H1"
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Label",
  positionHorizontal: "Left",
  textStyle: "Warning"
};

export const LongText = Template.bind({});
LongText.args = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis gravida magna, ut gravida justo vestibulum eu. Nullam aliquet tristique felis, a tincidunt erat commodo in. Maecenas convallis enim ultricies neque cursus rutrum. Morbi at ornare justo. Nam eget sollicitudin nisl. Nulla luctus imperdiet nulla, a laoreet nunc sagittis quis. Aliquam non ex sit amet arcu pellentesque tempus eu ac erat. Nulla ullamcorper pellentesque neque, quis elementum sem porttitor nec. Suspendisse vestibulum lacinia quam id convallis. Nulla iaculis arcu id congue interdum. Aliquam varius imperdiet nulla, vel porttitor mauris euismod sit amet. Nam viverra gravida elementum. Vestibulum sagittis magna elit, eget pulvinar turpis facilisis a. Aliquam sit amet quam sit amet mi imperdiet porttitor ut vel quam. Vivamus sit amet elit at ante vestibulum semper vitae nec elit. Etiam vel egestas ex.",
  textStyle: "Long text"
};


export const RichText = Template.bind({});
RichText.args = {
  text: "Does this **rich** text work?",
  textStyle: "Long text"
};
