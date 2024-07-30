import { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from '@/shared/ui/inputs';

import { SubMenu } from './SubMenu';

export default {
  title: 'shared/layouts/SubMenu',
  component: SubMenu,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    backButtonPrimaryLabel: { control: { type: 'text' } },
    backButtonLabel: { control: { type: 'text' } },
    backButtonLink: { control: { type: 'text' } },
    buttonPadding: { control: { type: 'text' } },
    backgroundColor: { control: { type: 'color' } },
    color: { control: { type: 'color' } },
    borderNone: { control: { type: 'boolean' } },
    AdditionalComponent: { control: { type: null } },
    CustomBackButton: { control: { type: null } },
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

export const CustomBackButton: Story = {
  args: {
    title: 'Some Title',
    CustomBackButton: <PrimaryButton label="Go Back" variant="secondary" />,
  },
};

export const FullCustomization: Story = {
  args: {
    title: 'Some Title',
    backButtonPrimaryLabel: 'Primary Page',
    backButtonLabel: 'Some Page',
    backButtonLink: '#',
    buttonPadding: '10px 20px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    borderNone: true,
    AdditionalComponent: <PrimaryButton label="Some Button" variant="primary" />,
    CustomBackButton: <PrimaryButton label="Go Back" variant="secondary" />,
  },
};
