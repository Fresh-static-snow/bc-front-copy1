import { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

export default {
  title: 'modules/AppPageParts/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Simple: Story = {
  args: {},
};
