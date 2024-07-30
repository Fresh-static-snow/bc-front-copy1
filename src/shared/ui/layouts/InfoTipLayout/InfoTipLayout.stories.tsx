import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { InfoTipLayout } from './InfoTipLayout';

export default {
  title: 'shared/layouts/InfoTipLayout',
  component: InfoTipLayout,
  tags: ['autodocs'],
  argTypes: {
    InfoTipContent: { control: { type: null } },
    children: { control: { type: null } },
    color: { control: { type: 'color' } },
    isVisible: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta<typeof InfoTipLayout>;

type Story = StoryObj<typeof InfoTipLayout>;
type StoryTemplate = StoryFn<typeof InfoTipLayout>;

const Template: StoryTemplate = (args) => (
  <div style={{ padding: '50px' }}>
    <InfoTipLayout {...args} />
  </div>
);

export const Simple: Story = {
  render: Template,
  args: {
    InfoTipContent: (
      <div style={{ fontSize: '24px', color: '#000', padding: '10px' }}>
        This is an info tip content.
      </div>
    ),
    children: <button type="button">Hover over me</button>,
    color: '#FF5733',
  },
  parameters: {
    docs: {
      source: {
        code: `
<InfoTipLayout
  InfoTipContent={(
    <div style={{ fontSize: '24px', color: '#000', padding: '10px' }}>
      This is an info tip content.
    </div>
  )}
  color="#FF5733"
>
  <button>Hover over me</button>
</InfoTipLayout>
        `,
      },
    },
  },
};

export const Visible: Story = {
  render: Template,
  args: {
    InfoTipContent: (
      <div style={{ fontSize: '24px', color: '#000', padding: '10px' }}>
        This is an info tip content.
      </div>
    ),
    children: <button type="button">Hover over me</button>,
    color: '#33C3FF',
    isVisible: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<InfoTipLayout
  InfoTipContent={(
    <div style={{ fontSize: '24px', color: '#000', padding: '10px' }}>
      This is an info tip content.
    </div>
  )}
  color="#33C3FF"
  isVisible={true}
>
  <button>Hover over me</button>
</InfoTipLayout>
        `,
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    InfoTipContent: (
      <div style={{ fontSize: '24px', color: '#000', padding: '10px' }}>
        This is an info tip content.
      </div>
    ),
    children: <button type="button">Hover over me</button>,
    color: '#33FF57',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<InfoTipLayout
  InfoTipContent={(
    <div style={{ fontSize: '24px', color: '#000', padding: '10px' }}>
      This is an info tip content.
    </div>
  )}
  color="#33FF57"
  disabled={true}
>
  <button>Hover over me</button>
</InfoTipLayout>
        `,
      },
    },
  },
};
