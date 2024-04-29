import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Scrollbar } from './Scrollbar';

export default {
  title: 'components/Scrollbar',
  component: Scrollbar,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    active: {
      control: {
        type: 'boolean',
      },
    },
    noScrollX: {
      control: {
        type: 'boolean',
      },
    },
    noScrollY: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<typeof Scrollbar>;

type Story = StoryObj<typeof Scrollbar>;
type StoryTemplate = StoryFn<typeof Scrollbar>;

const Template: StoryTemplate = (args) => (
  <div style={{ width: '300px', height: '300px' }}>
    <Scrollbar {...args}>
      <div style={{ background: '#eeeeee', width: '600px', height: '600px' }} />
    </Scrollbar>
  </div>
);

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: '300px', height: '300px' }}>
  <Scrollbar>
    <div style={{ background: '#eeeeee', width: '600px', height: '600px' }} />
  </Scrollbar>
</div>
        `,
      },
    },
  },
};

export const NoScrollX: Story = {
  render: Template,
  args: {
    noScrollX: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: '300px', height: '300px' }}>
  <Scrollbar noScrollX>
    <div style={{ background: '#eeeeee', width: '600px', height: '600px' }} />
  </Scrollbar>
</div>
        `,
      },
    },
  },
};

export const NoScrollY: Story = {
  render: Template,
  args: {
    noScrollY: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: '300px', height: '300px' }}>
  <Scrollbar noScrollY>
    <div style={{ background: '#eeeeee', width: '600px', height: '600px' }} />
  </Scrollbar>
</div>
        `,
      },
    },
  },
};
