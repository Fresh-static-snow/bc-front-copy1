import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { SegmentInCalendarEntity } from '@/shared/types/entities.types';

import { MatchTitles } from '../MatchTitles/MatchTitles';
import { SegmentItem } from './SegmentItem';

export default {
  title: 'entities/calendar/SegmentItem',
  component: SegmentItem,
  tags: ['autodocs'],
  argTypes: {
    segment: { control: { type: null } },
    color: { control: { type: 'color' } },
    filters: { control: { type: null } },
    onClickSegment: { control: { type: null } },
  },
} as Meta<typeof SegmentItem>;

type Story = StoryObj<typeof SegmentItem>;
type StoryTemplate = StoryFn<typeof SegmentItem>;

const segment: SegmentInCalendarEntity = {
  id: 1,
  start_time: '14:00',
  end_time: '15:00',
  start_date: '2021-08-10',
  visible: true,
  title: 'Segment',
  type: 'Segment',
  cover: { url: '' },
  logo: { url: '' },
  guests: [{ id: 1, name: 'Graham Connelly', social: '@Username', username: 'Username' }],
  media: [],
  descriptions: [],
  match_casts: [
    {
      id: 1,
      language: {
        id: 1,
        name: 'EN',
        keyword: 'en',
      },
      analytics: [
        {
          id: 1,
          display_name: 'Graham Connelly',
          nick: 'Some_Nick',
          first_name: 'Graham',
          last_name: 'Connelly',
          avatar: { url: 'https://picsum.photos/200' },
        },
      ],
      channels: [
        {
          id: 1,
          name: 'fortnite_mc_ua',
        },
      ],
      commentators: [
        {
          id: 2,
          display_name: 'Graham Connelly',
          nick: 'Some_Nick',
          first_name: 'Graham',
          last_name: 'Connelly',
          avatar: { url: '' },
        },
      ],
      host_analytic: {
        id: 3,
        display_name: 'Graham Connelly',
        nick: 'Some_Nick',
        first_name: 'Graham',
        last_name: 'Connelly',
        avatar: { url: '' },
      },
      backup_commentators: [
        {
          id: 3,
          display_name: 'Graham Connelly',
          nick: 'Some_Nick',
          first_name: 'Graham',
          last_name: 'Connelly',
          avatar: { url: '' },
        },
      ],
      staff_members: [
        {
          id: 3,
          display_name: 'Graham Connelly',
          nick: 'Some_Nick',
          first_name: 'Graham',
          last_name: 'Connelly',
          avatar: { url: '' },
        },
      ],
      analytic_studio: {
        id: 1,
        name: 'Cast 9.1',
        keyword: 'cast_9_1',
      },
      studio: {
        id: 1,
        name: 'Cast 9.1',
        keyword: 'cast_9_1',
      },
      setup: {
        id: 1,
        name: 'Setup 1',
      },
      stream: {
        id: 1,
        name: 'Stream 1',
      },
    },
  ],
};

const Template: StoryTemplate = (args) => <SegmentItem segment={segment} {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    color: '#00CC6A',
  },
  parameters: {
    docs: {
      source: {
        code: `<SegmentItem segment={segment} color="#00CC6A" />`,
      },
    },
  },
};

const TitlesTemplate: StoryTemplate = (args) => (
  <>
    <div style={{ padding: '15px 0' }}>
      <MatchTitles />
    </div>

    <SegmentItem segment={segment} {...args} />
  </>
);

export const Titles: Story = {
  render: TitlesTemplate,
  args: {
    color: '#00CC6A',
  },
  parameters: {
    docs: {
      source: {
        code: `
<>
  <div style={{ padding: '15px 0' }}>
    <MatchTitles />
  </div>

  <SegmentItem segment={segment} color="#00CC6A" />
</>
        `,
      },
    },
  },
};

export const WithFilters: Story = {
  render: TitlesTemplate,
  args: {
    color: '#00CC6A',
    filters: {
      staff_members: ['3'],
      channel: ['1'],
      commentators: ['2'],
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<>
  <div style={{ padding: '15px 0' }}>
    <MatchTitles />
  </div>

  <SegmentItem
    segment={segment}
    color="#00CC6A"
    filters={
      staff_members: ['3'],
      channel: ['1'],
      commentators: ['2'],
    }
  />
</>
        `,
      },
    },
  },
};
