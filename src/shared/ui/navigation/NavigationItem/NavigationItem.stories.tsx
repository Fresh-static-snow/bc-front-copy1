import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { NavigationItem } from './NavigationItem';

export default {
  title: 'shared/navigation/NavigationItem',
  component: NavigationItem,
  tags: ['autodocs'],
  argTypes: {
    linkPath: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    avatarImage: { control: { type: 'text' } },
    AdditionalComponent: { control: { type: null } },
    activePathExact: { control: { type: 'boolean' } },
    variant: {
      control: { type: 'select', options: ['base', 'primary', 'secondary', 'colored', 'avatar'] },
    },
    padding: { control: { type: 'text' } },
  },
} as Meta<typeof NavigationItem>;

type Story = StoryObj<typeof NavigationItem>;
type StoryTemplate = StoryFn<typeof NavigationItem>;

const Template: StoryTemplate = (args) => <NavigationItem {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    linkPath: '/home',
    name: 'Home',
    avatarImage: 'https://picsum.photos/200',
    variant: 'base',
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationItem
  linkPath="/home"
  name="Home"
  avatarImage="https://picsum.photos/200"
  variant="base"
/>
        `,
      },
    },
  },
};

export const Primary: Story = {
  render: Template,
  args: {
    linkPath: '/dashboard',
    name: 'Dashboard',
    avatarImage: 'https://picsum.photos/200',
    variant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationItem
  linkPath="/dashboard"
  name="Dashboard"
  avatarImage="https://picsum.photos/200"
  variant="primary"
/>
        `,
      },
    },
  },
};

export const WithAdditionalComponent: Story = {
  render: Template,
  args: {
    linkPath: '/profile',
    name: 'Profile',
    avatarImage: 'https://picsum.photos/200',
    variant: 'secondary',
    AdditionalComponent: '22',
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationItem
  linkPath="/profile"
  name="Profile"
  avatarImage="https://picsum.photos/200"
  variant="secondary"
  AdditionalComponent={<PrimaryButton label="Edit" variant="secondary" />}
/>
        `,
      },
    },
  },
};

export const AvatarVariant: Story = {
  render: Template,
  args: {
    linkPath: '/user',
    name: 'User',
    avatarImage: 'https://picsum.photos/200',
    variant: 'avatar',
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationItem
  linkPath="/user"
  name="User"
  avatarImage="https://picsum.photos/200"
  variant="avatar"
/>
        `,
      },
    },
  },
};
