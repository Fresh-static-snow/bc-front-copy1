import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { BackgroundColor } from './BackgroundColor';

export default {
  title: 'elements/BackgroundColor',
  component: BackgroundColor,
  tags: ['autodocs'],
  argTypes: {
    baseColor: {
      control: {
        type: 'color',
      },
    },
    colorIndicator: {
      control: {
        type: 'boolean',
      },
    },
    stripes: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof BackgroundColor>;

type Story = StoryObj<typeof BackgroundColor>;
type StoryTemplate = StoryFn<typeof BackgroundColor>;

const Template: StoryTemplate = (args) => (
  <div style={{ width: '300px' }}>
    <BackgroundColor {...args}>
      <div style={{ padding: '20px' }}>Some text</div>
    </BackgroundColor>
  </div>
);

export const Simple: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor baseColor="#ff0000">
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};

export const ColorIndicator: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
    colorIndicator: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor baseColor="#ff0000" colorIndicator>
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};

export const Stripes: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
    stripes: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor baseColor="#ff0000" stripes>
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};
