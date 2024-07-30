import { Meta, StoryObj } from '@storybook/react';

import { PageNotFound } from './PageNotFound';

export default {
  title: 'shared/page-errors/PageNotFound',
  component: PageNotFound,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof PageNotFound>;

type Story = StoryObj<typeof PageNotFound>;

export const Simple: Story = {
  args: {},
};
