import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { NavigationMenuSimpleButton } from './NavigationMenuSimpleButton';

export default {
  title: 'shared/navigation/NavigationMenuSimpleButton',
  component: NavigationMenuSimpleButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    linkPath: { control: { type: 'text' } },
    activePathExact: { control: { type: 'boolean' } },
    variant: {
      control: { type: 'select', options: ['base', 'primary', 'secondary', 'colored', 'avatar'] },
    },
    padding: { control: { type: 'text' } },
    fontSize: { control: { type: 'text' } },
    fontWeight: { control: { type: 'text' } },
    count: { control: { type: 'number' } },
  },
} as Meta<typeof NavigationMenuSimpleButton>;

type Story = StoryObj<typeof NavigationMenuSimpleButton>;
type StoryTemplate = StoryFn<typeof NavigationMenuSimpleButton>;

const Template: StoryTemplate = (args) => <NavigationMenuSimpleButton {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    children: 'Home',
    linkPath: '/home',
    activePathExact: true,
    variant: 'base',
    count: 5,
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationMenuSimpleButton
  linkPath="/home"
  activePathExact={true}
  variant="base"
>
  Home
</NavigationMenuSimpleButton>
        `,
      },
    },
  },
};
