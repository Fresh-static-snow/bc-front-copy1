import { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from '@/shared/ui/inputs';

import { SubMenu } from './SubMenu';

export default {
  title: 'modules/AppPageParts/SubMenu',
  component: SubMenu,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    backButtonLabel: {
      control: {
        type: 'text',
      },
    },
    backButtonLink: {
      control: {
        type: 'text',
      },
    },
    AdditionalComponent: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof SubMenu>;

type Story = StoryObj<typeof SubMenu>;

export const Simple: Story = {
  args: {
    title: 'Some Title',
    backButtonLink: '#',
  },
};

export const BackButton: Story = {
  args: {
    title: 'Some Title',
    backButtonLabel: 'Some Page',
    backButtonLink: '#',
  },
};

export const AdditionalComponent: Story = {
  args: {
    title: 'Some Title',
    backButtonLabel: 'Some Page',
    backButtonLink: '#',
    AdditionalComponent: <PrimaryButton label="Some Button" variant="primary" />,
  },
};
