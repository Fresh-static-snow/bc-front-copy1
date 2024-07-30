import { Meta, StoryObj } from '@storybook/react';

import { LangBadge } from './LangBadge';

export default {
  title: 'shared/forms/LangBadge',
  component: LangBadge,
  tags: ['autodocs'],
  argTypes: {
    option: { control: { type: null } },
  },
} as Meta<typeof LangBadge>;

type Story = StoryObj<typeof LangBadge>;

export const Simple: Story = {
  args: {
    option: { value: '1', label: 'English', additional: 'en' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<LangBadge
  option={{ value: '1', label: 'English', additional: 'en' }}
/>
        `,
      },
    },
  },
};
