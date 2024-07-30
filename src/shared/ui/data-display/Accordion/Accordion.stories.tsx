import { Meta, StoryObj } from '@storybook/react';

import { Accordion } from './Accordion';

export default {
  title: 'shared/data-display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    summaryLabel: { control: { type: 'text' } },
    padding: { control: { type: 'text' } },
    summaryColor: { control: { type: 'color' } },
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

export const DashedBorder: Story = {
  args: {
    summaryLabel: 'Summary with dashed border',
    children: <div style={{ padding: '30px' }}>Detailed text with dashed border</div>,
    dashedBorder: true,
  },
};

export const Hoverable: Story = {
  args: {
    summaryLabel: 'Hoverable summary',
    children: <div style={{ padding: '30px' }}>Details appear on hover</div>,
    hoverable: true,
  },
};

export const CustomPadding: Story = {
  args: {
    summaryLabel: 'Custom padding summary',
    children: <div style={{ padding: '50px' }}>Details with custom padding</div>,
    padding: '50px',
  },
};

export const CustomSummaryColor: Story = {
  args: {
    summaryLabel: 'Custom color summary',
    children: <div style={{ padding: '30px' }}>Details with custom summary color</div>,
    summaryColor: 'red',
  },
};

export const ExpandedByDefault: Story = {
  args: {
    summaryLabel: 'Expanded by default summary',
    children: <div style={{ padding: '30px' }}>Details that are expanded by default</div>,
    defaultExpandedStatus: true,
  },
};

export const CustomRotation: Story = {
  args: {
    summaryLabel: 'Custom rotation summary',
    children: <div style={{ padding: '30px' }}>Details with custom rotation</div>,
    startRotationPositionDeg: 90,
    endRotationPositionDeg: -90,
  },
};
