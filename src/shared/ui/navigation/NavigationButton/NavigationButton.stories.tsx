import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/shared/ui/data-display';

import { NavigationButton } from './NavigationButton';

export default {
  title: 'shared/navigation/NavigationButton',
  component: NavigationButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    variant: {
      control: { type: 'select', options: ['base', 'primary', 'secondary', 'colored', 'avatar'] },
    },
    tag: { control: { type: 'select', options: ['button', 'link'] } },
    href: { control: { type: 'text' } },
    activePathString: { control: { type: 'text' } },
    activePathExact: { control: { type: 'boolean' } },
    padding: { control: { type: 'text' } },
    width: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
    innerBorder: { control: { type: 'boolean' } },
    onClick: { control: { type: null } },
  },
} as Meta<typeof NavigationButton>;

type Story = StoryObj<typeof NavigationButton>;

export const Simple: Story = {
  args: {
    children: <div>NavigationButton</div>,
    activePathString: '/',
    activePathExact: true,
  },
};

export const Primary: Story = {
  args: {
    children: <div>NavigationButton</div>,
    variant: 'primary',
    activePathString: '/',
    activePathExact: true,
  },
};

export const LikeAvatar: Story = {
  args: {
    children: (
      <Avatar
        name="Test"
        size="32px"
        textColor="#F4252D"
        borderColor="#F4252D"
        fontSize="13px"
        fontWeight="400"
      />
    ),
    variant: 'avatar',
    activePathString: '/',
    activePathExact: true,
    padding: '8px',
    innerBorder: true,
    width: '48px',
  },
};

export const Secondary: Story = {
  args: {
    children: <div>NavigationButton</div>,
    variant: 'secondary',
    activePathString: '/',
    activePathExact: true,
  },
};

export const LinkButton: Story = {
  args: {
    children: <div>Link NavigationButton</div>,
    tag: 'link',
    href: '#',
    activePathString: '/',
    activePathExact: true,
  },
};
