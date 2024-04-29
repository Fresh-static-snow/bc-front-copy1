import { Meta, StoryObj } from '@storybook/react';

import { CircularLoader } from './CircularLoader';

export default {
  title: 'ui/CircularLoader',
  component: CircularLoader,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
  },
} as Meta<typeof CircularLoader>;

type Story = StoryObj<typeof CircularLoader>;

export const Simple: Story = {};

export const Size: Story = {
  args: {
    size: '50px',
  },
};

export const Color: Story = {
  args: {
    size: '50px',
    color: '#F4252D',
  },
};
