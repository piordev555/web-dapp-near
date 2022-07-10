import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';

export default {
  title: 'Layout/Card',
  component: Card,
  parameters: {
    viewMode: 'canvas',
  },
} as ComponentMeta<typeof Card>;

export const VisualGuide: ComponentStory<typeof Card> = () => {
  return (
    <div className="max-w-screen-sm mx-auto my-20">
      <Card className="p-6">
        <p className="text-body-md">
          Esse deserunt exercitation mollit minim labore minim consectetur voluptate id. Adipisicing pariatur veniam
          elit exercitation ea commodo nisi ea dolore aliqua excepteur irure cupidatat non. Elit laborum nostrud duis
          labore cillum excepteur consequat fugiat consectetur. Deserunt eiusmod sint nulla Lorem do. Ullamco
          exercitation non veniam voluptate nostrud id ex deserunt elit. Adipisicing culpa enim ad consequat proident
          quis eiusmod qui sit minim. Labore fugiat voluptate eu cillum culpa nisi qui.
        </p>
      </Card>
    </div>
  );
};
