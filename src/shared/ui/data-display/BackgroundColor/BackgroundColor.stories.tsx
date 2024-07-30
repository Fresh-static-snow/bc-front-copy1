import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { BackgroundColor } from './BackgroundColor';

export default {
  title: 'shared/data-display/BackgroundColor',
  component: BackgroundColor,
  tags: ['autodocs'],
  argTypes: {
    baseColor: { control: { type: 'color' } },
    colorIndicator: { control: { type: 'boolean' } },
    stripes: { control: { type: 'boolean' } },
    borderWrapper: { control: { type: 'boolean' } },
    borderRadius: { control: { type: 'boolean' } },
    children: { control: { type: null } },
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

export const BorderWrapper: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
    borderWrapper: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor baseColor="#ff0000" borderWrapper>
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};

export const BorderRadius: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
    borderRadius: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor baseColor="#ff0000" borderRadius>
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};

export const CustomStyles: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
    customStyles: { padding: '30px', margin: '10px', border: '2px solid #000' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor baseColor="#ff0000" customStyles={{ padding: '30px', margin: '10px', border: '2px solid #000' }}>
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};

export const FullCustomization: Story = {
  render: Template,
  args: {
    baseColor: '#ff0000',
    colorIndicator: true,
    stripes: true,
    borderWrapper: true,
    borderRadius: true,
    customStyles: { padding: '30px', margin: '10px', border: '2px solid #000' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<BackgroundColor
  baseColor="#ff0000"
  colorIndicator
  stripes
  borderWrapper
  borderRadius
  customStyles={{ padding: '30px', margin: '10px', border: '2px solid #000' }}
>
  <div style={{ padding: '20px' }}>Some text</div>
</BackgroundColor>
        `,
      },
    },
  },
};
