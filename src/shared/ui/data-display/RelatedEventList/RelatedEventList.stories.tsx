import { Meta, StoryObj } from '@storybook/react';

import { RelatedEventList } from './RelatedEventList';

export default {
  title: 'shared/data-display/RelatedEventList',
  component: RelatedEventList,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    content: { control: { type: null } },
  },
} as Meta<typeof RelatedEventList>;

type Story = StoryObj<typeof RelatedEventList>;

export const Simple: Story = {
  args: {
    title: 'Related Events',
    content: [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
      { id: 3, title: 'Event 3' },
    ],
  },
};

export const WithContentString: Story = {
  args: {
    title: 'No Related Events',
    content: 'There are no related events at the moment.',
  },
};

export const Empty: Story = {
  args: {
    title: 'Related Events',
  },
};

export const LongEventTitles: Story = {
  args: {
    title: 'Related Events with Long Titles',
    content: [
      { id: 1, title: 'This is a very long event title that might not fit in a single line' },
      { id: 2, title: 'Another event with a really long title that could potentially overflow' },
    ],
  },
};

export const MixedContent: Story = {
  args: {
    title: 'Mixed Content Events',
    content: [
      { id: 1, title: 'Short Title Event' },
      { id: 2, title: 'Another Event' },
    ],
  },
};
