import { Meta, StoryObj } from '@storybook/react';

import { RelatedEventsContent } from './RelatedEventsContent';

export default {
  title: 'shared/data-display/RelatedEventsContent',
  component: RelatedEventsContent,
  tags: ['autodocs'],
  argTypes: {
    events_count: { control: { type: 'number' } },
    related_events: { control: { type: null } },
  },
} as Meta<typeof RelatedEventsContent>;

type Story = StoryObj<typeof RelatedEventsContent>;

export const Simple: Story = {
  args: {
    events_count: 3,
    related_events: [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
      { id: 3, title: 'Event 3' },
    ],
  },
};

export const NoEvents: Story = {
  args: {
    events_count: 0,
    related_events: [],
  },
};

export const SingleEvent: Story = {
  args: {
    events_count: 1,
    related_events: [{ id: 1, title: 'Single Event' }],
  },
};

export const ManyEvents: Story = {
  args: {
    events_count: 10,
    related_events: [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
      { id: 3, title: 'Event 3' },
      { id: 4, title: 'Event 4' },
      { id: 5, title: 'Event 5' },
      { id: 6, title: 'Event 6' },
      { id: 7, title: 'Event 7' },
      { id: 8, title: 'Event 8' },
      { id: 9, title: 'Event 9' },
      { id: 10, title: 'Event 10' },
    ],
  },
};

export const WithLongTitles: Story = {
  args: {
    events_count: 2,
    related_events: [
      { id: 1, title: 'This is a very long event title that might not fit in a single line' },
      { id: 2, title: 'Another event with a really long title that could potentially overflow' },
    ],
  },
};
