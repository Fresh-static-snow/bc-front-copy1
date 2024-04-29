import { Meta, StoryObj } from '@storybook/react';

import { IconArrowLeftSvg } from '@/shared/assets';

import { Rotate } from './Rotate';

export default {
  title: 'ui/RotatingWrapper',
  component: Rotate,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: null },
    },
    rotateDeg: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof Rotate>;

type Story = StoryObj<typeof Rotate>;

export const Simple: Story = {
  args: {
    children: <IconArrowLeftSvg />,
  },
};

export const Rotated: Story = {
  args: {
    children: <IconArrowLeftSvg />,
    rotateDeg: 180,
  },
};
