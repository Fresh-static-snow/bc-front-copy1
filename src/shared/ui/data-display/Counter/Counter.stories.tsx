import { Meta, StoryObj } from '@storybook/react';

import { Counter } from './Counter';

export default {
  title: 'shared/data-display/Counter',
  component: Counter,
  tags: ['autodocs'],
  argTypes: {
    count: { control: 'number' },
    maxCount: { control: 'number' },
    color: { control: 'color' },
    bgColor: { control: 'color' },
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

export const CustomColor: Story = {
  args: {
    count: 50,
    color: '#FFFFFF',
    bgColor: '#FF6347',
  },
};

export const ExceedingMaxCount: Story = {
  args: {
    count: 300,
    maxCount: 250,
  },
};

export const FullCustomization: Story = {
  args: {
    count: 99,
    maxCount: 99,
    color: '#ff6600',
    bgColor: '#00FF00',
  },
};
