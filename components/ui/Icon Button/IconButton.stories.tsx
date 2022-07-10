import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SettingsIcon, EditIcon, ShareIcon, BackIcon, DeleteIcon } from 'components/icons';

import { IconButton } from './IconButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/IconButton',
  component: IconButton,
  parameters: {
    viewMode: 'canvas',
  },
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  Icon: SettingsIcon,
  ariaLabel: 'test',
  isDisabled: false,
  isLoading: false,
};

export const VisualGuide: ComponentStory<typeof IconButton> = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-2 mb-4">
        <IconButton Icon={SettingsIcon} ariaLabel="settings" />
        <IconButton Icon={EditIcon} ariaLabel="edit" />
        <IconButton Icon={ShareIcon} ariaLabel="share" />
        <IconButton Icon={BackIcon} ariaLabel="back" />
        <IconButton Icon={DeleteIcon} ariaLabel="delete" color="error" />
      </div>
    </>
  );
};
