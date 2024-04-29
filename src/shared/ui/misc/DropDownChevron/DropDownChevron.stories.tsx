import { Meta, StoryObj } from '@storybook/react';

import { DropDownChevron } from './DropDownChevron';

export default {
  title: 'ui/DropDownChevron',
  component: DropDownChevron,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof DropDownChevron>;

type Story = StoryObj<typeof DropDownChevron>;

export const Simple: Story = {
  args: {
    active: false,
  },
};
