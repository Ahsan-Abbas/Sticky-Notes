import { StoryFn, Meta } from '@storybook/react';

import Accordion from '../components/Accordion';
import argTypes from './defaultTypes';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: argTypes("textStyle", "positionHorizontal")
} as Meta<typeof Accordion>

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

let sections = [
  {
    header: "header 1",
    subHeader: <div className="container"><div className="col-2">Col 1</div><div className="col-2">Col 2</div></div>,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus est a tortor luctus, at aliquam lectus rutrum. Etiam laoreet bibendum lectus, viverra vehicula risus ultrices eget. Integer nec dapibus lorem. Praesent placerat tortor lobortis feugiat malesuada. Donec euismod, urna eu porta ultrices, diam nibh porttitor justo, efficitur dictum ligula ante nec nunc. Fusce egestas et dolor sit amet convallis. Curabitur tempus purus vitae nibh facilisis imperdiet id id felis. Sed imperdiet metus lacus, et aliquam dui fermentum et. Pellentesque quis fermentum nisi. Nunc vehicula varius ligula, id imperdiet lorem porta et. Suspendisse dapibus erat tellus, vel iaculis nisl congue id."
  },
  {
    header: "header 2",
    subHeader: <div className="container"><div className="col-2">Col 1</div><div className="col-2">Col 2</div></div>,
    content: "Nunc ac ex sed elit malesuada fermentum. Sed euismod convallis tellus malesuada consectetur. Nunc lacinia consequat metus vel tempor. Sed sit amet neque sit amet turpis gravida consequat. Donec a maximus tellus, non consequat sapien. Proin varius, lorem ut viverra aliquet, justo lorem viverra velit, quis dictum mauris ante sit amet ligula. Cras tortor massa, vestibulum nec ultrices id, rutrum eu dolor. Sed ut nulla ut ligula ornare aliquet. Donec id metus facilisis, rutrum ipsum id, euismod ex. Morbi nec diam tempor, ornare purus eu, efficitur risus. Morbi scelerisque lorem efficitur gravida faucibus. Sed in vehicula ante. Proin mauris magna, commodo non cursus vel, vulputate id purus. Integer mauris erat, interdum sed aliquet dictum, commodo eget urna. Donec gravida facilisis neque eu elementum. Nulla sed elit non mi blandit rhoncus."
  },
  {
    header: "header 3",
    subHeader: <div className="container"><div className="col-2">Col 1</div><div className="col-2">Col 2</div></div>,
    content: "Vivamus ullamcorper lobortis porta. Maecenas a magna vel tellus maximus ornare posuere quis dui. Pellentesque vel libero sit amet tellus semper scelerisque. Nam ullamcorper tortor tortor, sed sagittis dui ultrices nec. Vivamus pretium nunc eget vulputate porta. Integer facilisis lorem nec leo ullamcorper, at tristique velit luctus. Nullam felis velit, tincidunt vitae nisl ac, porttitor tempor ante. Aenean nec erat vestibulum, venenatis velit quis, efficitur diam. Nullam convallis orci ut magna condimentum suscipit. Proin sapien turpis, rutrum id faucibus nec, consectetur in nibh. Morbi laoreet feugiat nibh vel condimentum."
  },
  {
    header: "header 4",
    subHeader: <div className="container"><div className="col-2">Col 1</div><div className="col-2">Col 2</div></div>,
    content: "Vivamus ullamcorper lobortis porta. Maecenas a magna vel tellus maximus ornare posuere quis dui. Pellentesque vel libero sit amet tellus semper scelerisque. Nam ullamcorper tortor tortor, sed sagittis dui ultrices nec. Vivamus pretium nunc eget vulputate porta. Integer facilisis lorem nec leo ullamcorper, at tristique velit luctus. Nullam felis velit, tincidunt vitae nisl ac, porttitor tempor ante. Aenean nec erat vestibulum, venenatis velit quis, efficitur diam. Nullam convallis orci ut magna condimentum suscipit. Proin sapien turpis, rutrum id faucibus nec, consectetur in nibh. Morbi laoreet feugiat nibh vel condimentum."
  },
  {
    header: "header 5",
    subHeader: <div className="container"><div className="col-2">Col 1</div><div className="col-2">Col 2</div></div>,
    content: "Vivamus ullamcorper lobortis porta. Maecenas a magna vel tellus maximus ornare posuere quis dui. Pellentesque vel libero sit amet tellus semper scelerisque. Nam ullamcorper tortor tortor, sed sagittis dui ultrices nec. Vivamus pretium nunc eget vulputate porta. Integer facilisis lorem nec leo ullamcorper, at tristique velit luctus. Nullam felis velit, tincidunt vitae nisl ac, porttitor tempor ante. Aenean nec erat vestibulum, venenatis velit quis, efficitur diam. Nullam convallis orci ut magna condimentum suscipit. Proin sapien turpis, rutrum id faucibus nec, consectetur in nibh. Morbi laoreet feugiat nibh vel condimentum."
  },
];

export const Default = Template.bind({});
Default.args = {
  expandedIndex: 0,
  sections: sections,
  header: {
    textStyle: "H1",
    positionHorizontal: "Left"
  }
};

export const DefaultCollapsed = Template.bind({});
DefaultCollapsed.args = {
  sections: sections,
  header: {
    textStyle: "H1",
    positionHorizontal: "Left"
  }
};

export const H3Center = Template.bind({});
H3Center.args = {
  expandedIndex: 2,
  sections: sections,
  header: {
    textStyle: "H3",
    positionHorizontal: "Center"
  }
};

export const Deletable = Template.bind({});
Deletable.args = {
  expandedIndex: 0,
  sections: sections,
  header: {
    textStyle: "H1",
    positionHorizontal: "Left"
  },
  onDelete: i => console.log("Delete " + i)
};
