import { StoryFn, Meta } from '@storybook/react';
import Pagination from '../components/Pagination';
import Button from "../components/Button";

export default {
  title: 'Components/Pagination',
  component: Pagination,
  subcomponents: { Button },
  argTypes: {
  },
} as Meta<typeof Pagination>

const Template: StoryFn<typeof Pagination> = (args) => <Pagination {...args} />;

let currentPage = 3;
export const Interactive = Template.bind({});
Interactive.args = {
  currentPage,
  itemsPerPage: 10,
  totalItems: 25,
  onPageChanged: (page) => {
    currentPage = page;
  }
};

export const HideWhenFewItems = Template.bind({});
HideWhenFewItems.args = {
  currentPage: 0,
  itemsPerPage: 10,
  totalItems: 10
};
