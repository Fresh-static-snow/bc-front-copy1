import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { TournamentInCalendarEntity } from '@/shared/types/entities.types';

import { TournamentTitles } from '../TournamentTitles/TournamentTitles';
import { TournamentItem } from './TournamentItem';

export default {
  title: 'modules/ScheduleParts/TournamentItem',
  component: TournamentItem,
  tags: ['autodocs'],
  argTypes: {
    tournament: {
      control: {
        type: null,
      },
    },
    onClickTournament: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof TournamentItem>;

type Story = StoryObj<typeof TournamentItem>;
type StoryTemplate = StoryFn<typeof TournamentItem>;

const tournament: TournamentInCalendarEntity = {
  id: 1,
  tier: 1,
  title: 'The International 2019',
  type: { id: 1, name: 'Homecast' },
  entity_type: 'tournament',
  main_participants: [
    {
      id: 1,
      avatar: { url: 'https://picsum.photos/200' },
      display_name: 'Karl Lagerfeld',
      nick: 'Some_Nick',
      first_name: 'Karl',
      last_name: 'Lagerfeld',
    },
  ],
  media_representatives: [
    {
      id: 2,
      avatar: { url: '' },
      display_name: 'Karl Lagerfeld',
      nick: 'Some_Nick',
      first_name: 'Karl',
      last_name: 'Lagerfeld',
    },
  ],
  visible: true,
  matches: [
    {
      id: 1,
      start_time: '14:00',
      end_time: '15:00',
      start_date: '2021-08-10',
      visible: false,
      format: 'BO3',
      team_one: 'Thunder Awaken',
      team_two: 'OG',
      match_casts: [],
    },
    {
      id: 2,
      start_time: '14:00',
      end_time: '15:00',
      start_date: '2021-08-10',
      visible: true,
      format: 'BO3',
      team_one: 'Thunder Awaken',
      team_two: 'OG',
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
          host_analytic: null,
          backup_commentator: null,
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
        },
      ],
    },
  ],
  ui_template: {
    primary: '#FF0000',
  },
  start_date: '2021-01-01',
  end_date: '2021-01-02',
  analytics: [],
  commentators: [],
  discipline_keyword: 'dota2',
};

const Template: StoryTemplate = (args) => <TournamentItem tournament={tournament} {...args} />;

export const Simple: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `<TournamentItem tournament={tournament} />`,
      },
    },
  },
};

const TitlesTemplate: StoryTemplate = (args) => (
  <>
    <div style={{ padding: '15px 0' }}>
      <TournamentTitles />
    </div>

    <TournamentItem tournament={tournament} {...args} />
  </>
);

export const Titles: Story = {
  render: TitlesTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<>
  <div style={{ padding: '15px 0' }}>
    <TournamentTitles />
  </div>

  <TournamentItem tournament={tournament} />
</>
        `,
      },
    },
  },
};
