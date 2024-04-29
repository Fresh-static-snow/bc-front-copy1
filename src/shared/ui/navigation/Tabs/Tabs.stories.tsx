import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { IconAlertSvg, IconClockSvg, IconSmileSvg } from '@/shared/assets';

import { Counter } from '../../data-display';
import { Tabs } from './Tabs';

export default {
  title: 'ui/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    activeTab: {
      control: { type: null },
    },
    setActiveTab: {
      control: { type: null },
    },
    tabList: {
      control: { type: null },
    },
  },
} as Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;
type StoryTemplate = StoryFn<typeof Tabs>;

const Template: StoryTemplate = (args) => {
  const [activeTab, setActiveTab] = useState({ label: 'Tab 1', value: 'Tab 1' });

  return <Tabs activeTab={activeTab} setActiveTab={setActiveTab} {...args} />;
};

export const Simple: Story = {
  render: Template,
  args: {
    tabList: [
      { label: 'Tab 1', value: 'Tab 1' },
      { label: 'Tab 2', value: 'Tab 2' },
      { label: 'Tab 3', value: 'Tab 3' },
      { label: 'Tab 4', value: 'Tab 4' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tabs
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  tabList={[
    { label: 'Tab 1', value: 'Tab 1' },
    { label: 'Tab 2', value: 'Tab 2' },
    { label: 'Tab 3', value: 'Tab 3' },
    { label: 'Tab 4', value: 'Tab 4' },
  ]}
/>
        `,
      },
    },
  },
};

export const Additional: Story = {
  render: Template,
  args: {
    tabList: [
      { label: 'Tab 1', value: 'Tab 1', additional: <IconAlertSvg /> },
      { label: 'Tab 2', value: 'Tab 2', additional: <IconClockSvg /> },
      { label: 'Tab 3', value: 'Tab 3', additional: <IconSmileSvg /> },
      { label: 'Tab 4', value: 'Tab 4', additional: <Counter count={5} /> },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tabs
  activeTab={activeTab}
  setActiveTab={setActiveTab}
  tabList={[
    { label: 'Tab 1', value: 'Tab 1', additional: <IconAlertSvg /> },
    { label: 'Tab 2', value: 'Tab 2', additional: <IconClockSvg /> },
    { label: 'Tab 3', value: 'Tab 3', additional: <IconSmileSvg /> },
    { label: 'Tab 4', value: 'Tab 4', additional: <Counter count={5} /> },
  ]}
/>
        `,
      },
    },
  },
};
