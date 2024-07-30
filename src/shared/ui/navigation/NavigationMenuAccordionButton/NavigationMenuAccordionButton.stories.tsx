import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { NavigationItem } from '../NavigationItem/NavigationItem';
import { NavigationMenuAccordionButton } from './NavigationMenuAccordionButton';

export default {
  title: 'shared/navigation/NavigationMenuAccordionButton',
  component: NavigationMenuAccordionButton,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    count: { control: { type: 'number' } },
    defaultExpandedStatus: { control: { type: 'boolean' } },
  },
} as Meta<typeof NavigationMenuAccordionButton>;

type Story = StoryObj<typeof NavigationMenuAccordionButton>;
type StoryTemplate = StoryFn<typeof NavigationMenuAccordionButton>;

const users = [
  { id: 1, display_name: 'Name 1', avatar: { url: 'https://picsum.photos/200' } },
  { id: 2, display_name: 'Name 2', avatar: { url: 'https://picsum.photos/200' } },
  { id: 3, display_name: 'Name 3', avatar: { url: 'https://picsum.photos/200' } },
];

const Template: StoryTemplate = (args) => (
  <NavigationMenuAccordionButton {...args}>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {users?.map(({ id: userId, display_name, avatar }) => (
        <NavigationItem
          key={userId}
          linkPath="#"
          name={display_name}
          avatarImage={avatar?.url}
          padding="7px 24px 7px 50px"
          variant="colored"
        />
      ))}
    </div>
  </NavigationMenuAccordionButton>
);

export const Simple: Story = {
  render: Template,
  args: {
    title: 'Menu Item',
    count: 3,
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationMenuAccordionButton
  title="Menu Item"
  count={3}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {users?.map(({ id: userId, display_name, avatar }) => (
      <NavigationItem
        key={userId}
        linkPath='#'
        name={display_name}
        avatarImage={avatar?.url}
        padding="7px 24px 7px 50px"
        variant="colored"
      />
    ))}
  </div>
</NavigationMenuAccordionButton>
        `,
      },
    },
  },
};

export const WithExpanded: Story = {
  render: Template,
  args: {
    title: 'Menu Item',
    count: 3,
    defaultExpandedStatus: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<NavigationMenuAccordionButton
  title="Menu Item"
  count={3}
  defaultExpandedStatus={true}
>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {users?.map(({ id: userId, display_name, avatar }) => (
      <NavigationItem
        key={userId}
        linkPath='#'
        name={display_name}
        avatarImage={avatar?.url}
        padding="7px 24px 7px 50px"
        variant="colored"
      />
    ))}
  </div>
</NavigationMenuAccordionButton>
        `,
      },
    },
  },
};
