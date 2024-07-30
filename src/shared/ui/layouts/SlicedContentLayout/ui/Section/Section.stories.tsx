import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Body } from '../Body/Body';
import { Section } from './Section';

export default {
  title: 'shared/layouts/SlicedContentLayout.Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    fragments: { control: { type: null } },
    scrollActive: { control: { type: null } },
    borderLeft: { control: { type: null } },
    borderLeftType: { control: { type: null } },
    borderRight: { control: { type: null } },
    borderRightType: { control: { type: null } },
    backgroundColor: { control: { type: null } },
  },
} as Meta<typeof Section>;

type Story = StoryObj<typeof Section>;
type StoryTemplate = StoryFn<typeof Section>;

const Template: StoryTemplate = (args) => (
  <div style={{ background: '#f2f2f2', border: '1px solid #000', height: '300px' }}>
    <Body>
      <Section {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
        adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
        dicta alias odit, libero ipsam eum?
      </Section>
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
<div style={{ background: '#f2f2f2', border: '1px solid #000', height: '300px' }}>
  <Body>
    <Section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
      adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
      dicta alias odit, libero ipsam eum?
    </Section>
  </Body>
</div>
        `,
      },
    },
  },
};

export const Borders: Story = {
  render: Template,
  args: {
    borderLeft: true,
    borderLeftType: 'solid',
    borderRight: true,
    borderRightType: 'dashed',
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ background: '#f2f2f2', border: '1px solid #000', height: '300px' }}>
  <Body>
    <Section borderLeft borderLeftType="solid" borderRight borderRightType="dashed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
      adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
      dicta alias odit, libero ipsam eum?
    </Section>
  </Body>
</div>
        `,
      },
    },
  },
};

const FragmentsTemplate: StoryTemplate = (args) => (
  <div style={{ background: '#f2f2f2', border: '1px solid #000', height: '300px' }}>
    <Body>
      <Section {...args}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
        adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
        dicta alias odit, libero ipsam eum?
      </Section>

      <Section fragments={1} borderRight borderRightType="solid">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
        adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
        dicta alias odit, libero ipsam eum?
      </Section>
    </Body>
  </div>
);

export const Fragments: Story = {
  render: FragmentsTemplate,
  args: {
    fragments: 2,
    borderLeft: true,
    borderLeftType: 'solid',
    borderRight: true,
    borderRightType: 'dashed',
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ background: '#f2f2f2', border: '1px solid #000', height: '300px' }}>
  <Body>
    <Section fragments={2} borderLeft borderLeftType="solid" borderRight borderRightType="dashed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
      adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
      dicta alias odit, libero ipsam eum?
    </Section>

    <Section fragments={1} borderRight borderRightType="solid">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde amet animi facere minima
      adipisci tempora nemo, perferendis nesciunt est accusantium voluptates maxime ipsa cumque
      dicta alias odit, libero ipsam eum?
    </Section>
  </Body>
</div>
        `,
      },
    },
  },
};
