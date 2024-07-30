import { Meta, StoryObj } from '@storybook/react';

import { MarkedText } from './MarkedText';

export default {
  title: 'shared/typography/MarkedText',
  component: MarkedText,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    color: { control: { type: 'color' } },
  },
} as Meta<typeof MarkedText>;

type Story = StoryObj<typeof MarkedText>;

export const Simple: Story = {
  args: {
    children: 'Highlighted Text',
  },
  parameters: {
    docs: {
      source: {
        code: `
<MarkedText>
  Highlighted Text
</MarkedText>
        `,
      },
    },
  },
};

export const Colored: Story = {
  args: {
    children: 'Colored Highlighted Text',
    color: '#F4252D',
  },
  parameters: {
    docs: {
      source: {
        code: `
<MarkedText color="#F4252D">
  Colored Highlighted Text
</MarkedText>
        `,
      },
    },
  },
};

export const LongText: Story = {
  args: {
    children:
      'This is a longer piece of highlighted text to demonstrate how the component handles more content.',
  },
  parameters: {
    docs: {
      source: {
        code: `
<MarkedText>
  This is a longer piece of highlighted text to demonstrate how the component handles more content.
</MarkedText>
        `,
      },
    },
  },
};
