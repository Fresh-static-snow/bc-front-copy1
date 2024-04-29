import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
  title: 'ui/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    summaryLabel: {
      control: { type: 'text' },
    },
    children: {
      control: { type: null },
    },
  },
} as Meta<typeof Accordion>;

type Story = StoryObj<typeof Accordion>;

export const Simple: Story = {
  args: {
    summaryLabel: 'Some summary label',
    children: <div style={{ padding: '30px' }}>Some details text</div>,
  },
};

export const Reversed: Story = {
  args: {
    summaryLabel: 'Some summary label',
    children: <div style={{ padding: '30px' }}>Some details text</div>,
    reversed: true,
  },
};

export const WithoutBorder: Story = {
  args: {
    summaryLabel: 'Some summary label',
    children: <div style={{ padding: '30px' }}>Some details text</div>,
    withoutBorder: true,
  },
};
