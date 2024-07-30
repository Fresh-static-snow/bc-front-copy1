import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { AccessControl } from './AccessControl';

export default {
  title: 'shared/misc/AccessControl',
  component: AccessControl,
  tags: ['autodocs'],
  argTypes: {
    necessaryPermissions: { control: { type: null } },
    method: { control: { type: 'select', options: ['some', 'every'] } },
    children: { control: { type: null } },
    NoAccessComponent: { control: { type: null } },
  },
} as Meta<typeof AccessControl>;

type Story = StoryObj<typeof AccessControl>;
type StoryTemplate = StoryFn<typeof AccessControl>;

const Template: StoryTemplate = (args) => <AccessControl {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    necessaryPermissions: ['read', 'write'],
    children: <div>You have access</div>,
    NoAccessComponent: <div>No access</div>,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AccessControl
  necessaryPermissions={['read', 'write']}
>
  <div>You have access</div>
</AccessControl>
        `,
      },
    },
  },
};
