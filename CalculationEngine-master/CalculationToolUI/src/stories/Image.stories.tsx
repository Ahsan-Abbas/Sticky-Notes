import { StoryFn, Meta } from '@storybook/react';
import argTypes from './defaultTypes';
import Image from '../components/Image';

export default {
  title: 'Components/Image',
  component: Image,
  argTypes: argTypes("imageDisplayMode"),
} as Meta<typeof Image>

const Template: StoryFn<typeof Image> = (args) => <Image {...args} />;

export const Responsive = Template.bind({});
Responsive.args = {
  imageDisplayMode: "Responsive",
  src: "https://placehold.co/1200x600"
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
  imageDisplayMode: "Thumbnail",
  src: "https://placehold.co/1200x600"
};

export const Column = Template.bind({});
Column.args = {
  imageDisplayMode: "Column",
  src: "https://placehold.co/1200x600"
};
