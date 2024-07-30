import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

export default {
  title: 'shared/data-display/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: { control: { type: 'text' } },
    baseColor: { control: { type: 'color' } },
    secondaryColor: { control: { type: 'color' } },
    rotateDeg: { control: { type: 'number' } },
    height: { control: { type: 'text' } },
    right: { control: { type: 'text' } },
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

export const Rotated: Story = {
  args: {
    text: 'BO3',
    baseColor: '#D13438',
    secondaryColor: '#00CC6A',
    rotateDeg: 0,
    right: '-30px',
  },
};

export const CustomHeight: Story = {
  args: {
    text: 'BO3',
    baseColor: '#D13438',
    secondaryColor: '#00CC6A',
    height: '50px',
  },
};

export const PositionedRight: Story = {
  args: {
    text: 'BO3',
    baseColor: '#D13438',
    secondaryColor: '#00CC6A',
    right: '10px',
  },
};

export const FullCustomization: Story = {
  args: {
    text: 'BO3',
    baseColor: '#D13438',
    secondaryColor: '#00CC6A',
    height: '40px',
    right: '15px',
  },
};
