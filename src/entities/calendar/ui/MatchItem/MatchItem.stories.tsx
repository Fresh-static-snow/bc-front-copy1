import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Match } from '@/shared/types/entities.types';

import { MatchTitles } from '../MatchTitles/MatchTitles';
import { MatchItem } from './MatchItem';

export default {
  title: 'entities/calendar/MatchItem',
  component: MatchItem,
  tags: ['autodocs'],
  argTypes: {
    match: { control: { type: null } },
    color: { control: { type: 'color' } },
    filters: { control: { type: null } },
    onClickMatch: { control: { type: null } },
  },
} as Meta<typeof MatchItem>;

type Story = StoryObj<typeof MatchItem>;
type StoryTemplate = StoryFn<typeof MatchItem>;

const match: Match = {
  id: 1,
  start_time: '14:00',
  end_time: '15:00',
  start_date: '2021-08-10',
  visible: true,
  format: 'BO3',
  team_one: 'Thunder Awaken',
  team_two: 'OG',
  type: 'Match',
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

const Template: StoryTemplate = (args) => <MatchItem match={match} {...args} />;

export const Simple: Story = {
  render: Template,
  args: {
    color: '#00CC6A',
  },
  parameters: {
    docs: {
      source: {
        code: `<MatchItem match={match} color="#00CC6A" />`,
      },
    },
  },
};

const TitlesTemplate: StoryTemplate = (args) => (
  <>
    <div style={{ padding: '15px 0' }}>
      <MatchTitles />
    </div>

    <MatchItem match={match} {...args} />
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

  <MatchItem match={match} color="#00CC6A" />
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

  <MatchItem
    match={match}
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
