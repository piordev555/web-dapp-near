import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/Button',
  component: Button,
  parameters: {
    viewMode: 'canvas',
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: 'Foo',
  isDisabled: false,
  isLoading: false,
  variant: 'primary',
};

export const VisualGuide: ComponentStory<typeof Button> = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-2 mb-4">
        <Button>Normal state</Button>
        <Button className=":hover">Hover state</Button>
        <Button className=":focus">Focus state</Button>
        <Button className=":active">Active state</Button>
        <Button isDisabled>Disabled State</Button>

        {/* https://www.chromatic.com/docs/ignoring-elements */}
        <Button isLoading data-chromatic="ignore">
          Loading State
        </Button>
      </div>

      <div className="flex flex-row flex-wrap gap-1.5">
        <Button variant="secondary">Normal state</Button>
        <Button variant="secondary" className=":hover">
          Hover state
        </Button>
        <Button variant="secondary" className=":focus">
          Focus state
        </Button>
        <Button variant="secondary" className=":active">
          Active state
        </Button>
        <Button variant="secondary" isDisabled>
          Disabled State
        </Button>

        {/* https://www.chromatic.com/docs/ignoring-elements */}
        <Button variant="secondary" isLoading data-chromatic="ignore">
          Loading State
        </Button>
      </div>
    </>
  );
};
