import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'ui/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    baseColor: {
      control: { type: 'color' },
    },
    secondaryColor: {
      control: { type: 'color' },
    },
  },
} as Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Simple: Story = {
  args: {
    text: 'BO3',
    secondaryColor: '#00CC6A',
  },
};

export const BaseColor: Story = {
  args: {
    text: 'BO3',
    baseColor: '#D1343899',
    secondaryColor: '#00CC6A',
  },
};
