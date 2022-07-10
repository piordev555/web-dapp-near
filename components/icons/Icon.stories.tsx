import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as Icons from '.';

export default {
  title: 'Media and Icons/Icons',
  component: Icons.AllIcon,
  parameters: {
    viewMode: 'canvas',
  },
} as ComponentMeta<typeof Icons.AllIcon>;

export const VisualGuide: ComponentStory<typeof Icons.AllIcon> = () => {
  return (
    <div className="grid grid-cols-3 gap-8 md:grid-cols-8">
      {Object.values(Icons).map((Icon) => (
        <div key={Icon.displayName} className="flex flex-col items-center gap-1">
          <Icon />
          <span className="opacity-50">{Icon.displayName}</span>
        </div>
      ))}
    </div>
  );
};
