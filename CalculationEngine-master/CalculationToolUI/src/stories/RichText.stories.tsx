import { StoryFn, Meta } from '@storybook/react';
import RichText from '../components/RichText';

export default {
  title: 'Components/RichText',
  component: RichText,
  argTypes: {
    text: {
      name: "text",
      type: "string"
    }
  },
} as Meta<typeof RichText>

const Template: StoryFn<typeof RichText> = (args) => <span><RichText {...args} /></span>;

export const Simple = Template.bind({});
Simple.args = {
  text: "test **does** it work?"
};

export const Complicated = Template.bind({});
Complicated.args = {
  text: `
Normal

# H1

## H2

### H3

**bold**

*italic*

[Link](https://www.google.com)

Image: ![Our logo](https://solutionspace.dk/wp-content/uploads/2021/12/solution-space-logo-1-300x37.png)

Horizontal line:
***
`
};
