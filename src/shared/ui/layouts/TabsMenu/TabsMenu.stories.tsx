import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { TabValue } from '@/shared/types/values.types';

import { TabsMenu } from './TabsMenu';

export default {
  title: 'shared/layouts/TabsMenu',
  component: TabsMenu,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: { type: null } },
    activeTab: { control: { type: null } },
    onChangeTab: { control: { type: null } },
  },
} as Meta<typeof TabsMenu>;

type Story = StoryObj<typeof TabsMenu>;
type StoryTemplate = StoryFn<typeof TabsMenu>;

const Template: StoryTemplate = (args) => {
  const { activeTab: defaultTab } = args;
  const [activeTab, setActiveTab] = useState<TabValue>(defaultTab);

  const handleChangeTab = (value: TabValue) => {
    setActiveTab(value);
  };

  return <TabsMenu {...args} activeTab={activeTab} onChangeTab={handleChangeTab} />;
};

export const Simple: Story = {
  render: Template,
  args: {
    tabs: [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2' },
      { value: 'tab3', label: 'Tab 3' },
    ],
    activeTab: { value: 'tab1', label: 'Tab 1' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<TabsMenu
  tabs={[
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3' },
  ]}
  activeTab={{ value: 'tab1', label: 'Tab 1' }}
  onChangeTab={onChangeTab}
/>
        `,
      },
    },
  },
};

export const WithAdditionalContent: Story = {
  render: Template,
  args: {
    tabs: [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2', additional: <span> (2)</span> },
      { value: 'tab3', label: 'Tab 3', additional: <span> (3)</span> },
    ],
    activeTab: { value: 'tab1', label: 'Tab 1' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<TabsMenu
  tabs={[
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2', additional: <span> (2)</span> },
    { value: 'tab3', label: 'Tab 3', additional: <span> (3)</span> },
  ]}
  activeTab={{ value: 'tab1', label: 'Tab 1' }}
  onChangeTab={onChangeTab}
/>
        `,
      },
    },
  },
};

export const CustomActiveTab: Story = {
  render: Template,
  args: {
    tabs: [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2' },
      { value: 'tab3', label: 'Tab 3' },
    ],
    activeTab: { value: 'tab2', label: 'Tab 2' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<TabsMenu
  tabs={[
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
    { value: 'tab3', label: 'Tab 3' },
  ]}
  activeTab={{ value: 'tab2', label: 'Tab 2' }}
  onChangeTab={onChangeTab}
/>
        `,
      },
    },
  },
};

export const FullCustomization: Story = {
  render: Template,
  args: {
    tabs: [
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2', additional: <span> (2)</span> },
      { value: 'tab3', label: 'Tab 3', additional: <span> (3)</span> },
      { value: 'tab4', label: 'Tab 4', additional: <span> (4)</span> },
    ],
    activeTab: { value: 'tab3', label: 'Tab 3', additional: <span> (3)</span> },
  },
  parameters: {
    docs: {
      source: {
        code: `
<TabsMenu
  tabs={[
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2', additional: <span> (2)</span> },
    { value: 'tab3', label: 'Tab 3', additional: <span> (3)</span> },
    { value: 'tab4', label: 'Tab 4', additional: <span> (4)</span> },
  ]}
  activeTab={{ value: 'tab3', label: 'Tab 3', additional: <span> (3)</span> }}
  onChangeTab={onChangeTab}
/>
        `,
      },
    },
  },
};
