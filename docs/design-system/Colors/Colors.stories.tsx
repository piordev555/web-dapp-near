import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwatchOverview } from './includes';

export default {
  title: 'Design System/Colors',
  component: SwatchOverview,
  parameters: {
    viewMode: 'canvas',
  },
} as ComponentMeta<typeof SwatchOverview>;

export const VisualGuide: ComponentStory<typeof SwatchOverview> = () => {
  return <SwatchOverview />;
};
