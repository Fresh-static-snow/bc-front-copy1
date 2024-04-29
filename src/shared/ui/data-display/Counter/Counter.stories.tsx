import { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'ui/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    maxCount: { control: 'number' },
  },
} as Meta<typeof Counter>;

type Story = StoryObj<typeof Counter>;

export const Simple: Story = {
  args: {
    count: 5,
  },
};

export const BigNumber: Story = {
  args: {
    count: 150,
  },
};

export const MaxCount: Story = {
  args: {
    count: 200,
    maxCount: 199,
  },
};
