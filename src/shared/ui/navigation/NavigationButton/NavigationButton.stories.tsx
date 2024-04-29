import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/shared/ui/data-display';

import { NavigationButton } from './NavigationButton';

export default {
  title: 'ui/NavigationButton',
  component: NavigationButton,
  tags: ['autodocs'],
  argTypes: {},
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

export const WithAvatar: Story = {
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
