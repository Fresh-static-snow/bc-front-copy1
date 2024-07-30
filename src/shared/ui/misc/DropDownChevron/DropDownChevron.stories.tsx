import { Meta, StoryObj } from '@storybook/react';

import { DropDownChevron } from './DropDownChevron';

export default {
  title: 'shared/misc/DropDownChevron',
  component: DropDownChevron,
  tags: ['autodocs'],
  argTypes: {
    active: { control: { type: 'boolean' } },
    size: { control: { type: 'text' } },
  },
} as Meta<typeof DropDownChevron>;

type Story = StoryObj<typeof DropDownChevron>;

export const Simple: Story = {
  args: {
    active: false,
  },
};

export const Size: Story = {
  args: {
    active: false,
    size: '30px',
  },
};
