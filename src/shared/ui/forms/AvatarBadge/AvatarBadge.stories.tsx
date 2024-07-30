import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { AvatarBadge } from './AvatarBadge';

export default {
  title: 'shared/forms/AvatarBadge',
  component: AvatarBadge,
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select', options: ['option', 'input', 'chip'] } },
    option: { control: { type: null } },
  },
} as Meta<typeof AvatarBadge>;

type Story = StoryObj<typeof AvatarBadge>;
type StoryTemplate = StoryFn<typeof AvatarBadge>;

const Template: StoryTemplate = (args) => <AvatarBadge {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    type: 'option',
    option: { value: 'admin', label: 'Admin' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<AvatarBadge
  type="option"
  option={{ value: 'admin', label: 'Admin' }}
/>
        `,
      },
    },
  },
};

export const AsInput: Story = {
  render: Template,
  args: {
    type: 'input',
    option: { value: 'search', label: 'Search' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<AvatarBadge
  type="input"
  option={{ value: 'search', label: 'Search' }}
/>
        `,
      },
    },
  },
};
