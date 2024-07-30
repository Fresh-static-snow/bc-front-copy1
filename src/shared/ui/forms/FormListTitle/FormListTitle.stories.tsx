import { Meta, StoryObj } from '@storybook/react';

import { FormListTitle } from './FormListTitle';

export default {
  title: 'shared/forms/FormListTitle',
  component: FormListTitle,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
  },
} as Meta<typeof FormListTitle>;

type Story = StoryObj<typeof FormListTitle>;

export const Simple: Story = {
  args: {
    title: 'Form Title',
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormListTitle
  title="Form Title"
/>
        `,
      },
    },
  },
};

export const LongTitle: Story = {
  args: {
    title:
      'This is a very long form title that might not fit in a single line and could potentially overflow',
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormListTitle
  title="This is a very long form title that might not fit in a single line and could potentially overflow"
/>
        `,
      },
    },
  },
};
