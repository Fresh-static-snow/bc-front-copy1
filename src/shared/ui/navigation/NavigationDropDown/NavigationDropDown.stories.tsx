import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Avatar } from '@/shared/ui/data-display';

import { NavigationDropDown } from './NavigationDropDown';

export default {
  title: 'shared/navigation/NavigationDropDown',
  component: NavigationDropDown,
  tags: ['autodocs'],
  argTypes: {
    ButtonContentComponent: { control: { type: null } },
    ContentComponent: { control: { type: null } },
    activePathString: { control: { type: 'text' } },
    buttonVariant: {
      control: { type: 'select', options: ['primary', 'avatar', 'base', 'secondary'] },
    },
    buttonInnerBorder: { control: { type: 'boolean' } },
    buttonPadding: { control: { type: 'text' } },
    anchorOrigin: { control: { type: null } },
    transformOrigin: { control: { type: null } },
  },
} as Meta<typeof NavigationDropDown>;

type Story = StoryObj<typeof NavigationDropDown>;
type StoryTemplate = StoryFn<typeof NavigationDropDown>;

const Template: StoryTemplate = (args) => <NavigationDropDown {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    ButtonContentComponent: <div>Menu</div>,
    ContentComponent: <div style={{ padding: '20px' }}>Dropdown Content</div>,
    activePathString: '/',
    buttonVariant: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationDropDown
  ButtonContentComponent={<div>Menu</div>}
  ContentComponent={<div style={{ padding: '20px' }}>Dropdown Content</div>}
  activePathString="/"
  buttonVariant="primary"
/>
        `,
      },
    },
  },
};

export const WithAvatar: Story = {
  render: Template,
  args: {
    ButtonContentComponent: (
      <Avatar
        name="Test"
        size="32px"
        textColor="#F4252D"
        borderColor="#F4252D"
        fontSize="13px"
        fontWeight="400"
      />
    ),
    ContentComponent: <div style={{ padding: '20px' }}>Dropdown Content</div>,
    activePathString: '/',
    buttonVariant: 'avatar',
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationDropDown
  ButtonContentComponent={
    <Avatar
      name="Test"
      size="32px"
      textColor="#F4252D"
      borderColor="#F4252D"
      fontSize="13px"
      fontWeight="400"
    />
  }
  ContentComponent={<div style={{ padding: '20px' }}>Dropdown Content</div>}
  activePathString="/"
  buttonVariant="avatar"
/>
        `,
      },
    },
  },
};

export const CustomOrigin: Story = {
  render: Template,
  args: {
    ButtonContentComponent: <div>Menu</div>,
    ContentComponent: <div style={{ padding: '20px' }}>Dropdown Content</div>,
    activePathString: '/',
    buttonVariant: 'primary',
    anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
    transformOrigin: { vertical: 'top', horizontal: 'right' },
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationDropDown
  ButtonContentComponent={<div>Menu</div>}
  ContentComponent={<div style={{ padding: '20px' }}>Dropdown Content</div>}
  activePathString="/"
  buttonVariant="primary"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
/>
        `,
      },
    },
  },
};
