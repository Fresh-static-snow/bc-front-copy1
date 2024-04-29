import { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'modules/AppPageParts/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Simple: Story = {
  args: {},
};
