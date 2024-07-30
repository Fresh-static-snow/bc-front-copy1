import { Meta, StoryObj } from '@storybook/react';

import { CircularLoader } from './CircularLoader';

export default {
  title: 'shared/feedback/CircularLoader',
  component: CircularLoader,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'text' } },
    color: { control: { type: 'color' } },
    width: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
    padding: { control: { type: 'text' } },
    position: {
      control: {
        type: 'select',
        options: ['start', 'center', 'end'],
      },
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

export const CustomWidthHeight: Story = {
  args: {
    width: '70px',
    height: '70px',
  },
};

export const WithPadding: Story = {
  args: {
    size: '50px',
    padding: '20px',
  },
};
