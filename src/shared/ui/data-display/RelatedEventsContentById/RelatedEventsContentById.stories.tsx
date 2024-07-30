import { Meta, StoryObj } from '@storybook/react';

import { RelatedEventsContentById } from './RelatedEventsContentById';

export default {
  title: 'shared/data-display/RelatedEventsContentById',
  component: RelatedEventsContentById,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' } },
    entityId: { control: { type: 'number' } },
    data: { control: { type: null } },
    withoutBackMessage: { control: { type: 'boolean' } },
  },
} as Meta<typeof RelatedEventsContentById>;

type Story = StoryObj<typeof RelatedEventsContentById>;

export const Simple: Story = {
  args: {
    entityId: 1,
    data: [
      {
        id: 1,
        name: 'Item 1',
        events_count: 3,
        related_events: [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
          { id: 3, title: 'Event 3' },
        ],
      },
    ],
  },
};

export const NoEvents: Story = {
  args: {
    entityId: 2,
    data: [
      {
        id: 2,
        name: 'Item 2',
        events_count: 0,
        related_events: [],
      },
    ],
  },
};

export const SingleEvent: Story = {
  args: {
    entityId: 3,
    data: [
      {
        id: 3,
        name: 'Item 3',
        events_count: 1,
        related_events: [{ id: 1, title: 'Single Event' }],
      },
    ],
  },
};

export const ManyEvents: Story = {
  args: {
    entityId: 4,
    data: [
      {
        id: 4,
        name: 'Item 4',
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
    ],
  },
};

export const WithLongTitles: Story = {
  args: {
    entityId: 5,
    data: [
      {
        id: 5,
        name: 'Item 5',
        events_count: 2,
        related_events: [
          { id: 1, title: 'This is a very long event title that might not fit in a single line' },
          {
            id: 2,
            title: 'Another event with a really long title that could potentially overflow',
          },
        ],
      },
    ],
  },
};

export const WithoutBackMessage: Story = {
  args: {
    entityId: 6,
    data: [
      {
        id: 6,
        name: 'Item 6',
        events_count: 2,
        related_events: [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
        ],
      },
    ],
    withoutBackMessage: true,
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Custom Title',
    entityId: 7,
    data: [
      {
        id: 7,
        name: 'Item 7',
        events_count: 3,
        related_events: [
          { id: 1, title: 'Event 1' },
          { id: 2, title: 'Event 2' },
          { id: 3, title: 'Event 3' },
        ],
      },
    ],
  },
};
