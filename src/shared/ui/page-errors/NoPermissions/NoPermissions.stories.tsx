import { Meta, StoryObj } from '@storybook/react';

import { NoPermissions } from './NoPermissions';

export default {
  title: 'shared/page-errors/NoPermissions',
  component: NoPermissions,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof NoPermissions>;

type Story = StoryObj<typeof NoPermissions>;

export const Simple: Story = {
  args: {},
};
