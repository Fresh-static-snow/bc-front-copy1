import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Body } from './Body';

export default {
  title: 'shared/layouts/SlicedContentLayout.Body',
  component: Body,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    scrollActive: { control: { type: null } },
  },
} as Meta<typeof Body>;

type Story = StoryObj<typeof Body>;
type StoryTemplate = StoryFn<typeof Body>;

const Template: StoryTemplate = (args) => (
  <div style={{ border: '1px solid #000', height: '300px' }}>
    <Body {...args}>
      <div style={{ width: '100%', background: '#f2f2f2' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
        adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
        dicta alias odit, libero ipsam eum?
      </div>
    </Body>
  </div>
);

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ border: '1px solid #000', height: '300px' }}>
  <Body>
    <div style={{ width: '100%', background: '#f2f2f2' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
      adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
      dicta alias odit, libero ipsam eum?
    </div>
  </Body>
</div>
        `,
      },
    },
  },
};

const ScrollTemplate: StoryTemplate = (args) => (
  <div style={{ border: '1px solid #000', height: '300px' }}>
    <Body {...args}>
      <div style={{ width: '100%', height: '600px', background: '#f2f2f2' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
        adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
        dicta alias odit, libero ipsam eum?
      </div>
    </Body>
  </div>
);

export const Scroll: Story = {
  render: ScrollTemplate,
  args: {
    scrollActive: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ border: '1px solid #000', height: '300px' }}>
  <Body scrollActive>
    <div style={{ width: '100%', height: '600px', background: '#f2f2f2' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
      adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
      dicta alias odit, libero ipsam eum?
    </div>
  </Body>
</div>
        `,
      },
    },
  },
};
