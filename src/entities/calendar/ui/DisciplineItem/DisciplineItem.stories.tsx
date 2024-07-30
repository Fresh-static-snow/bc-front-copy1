import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { GameDiscipline, TournamentInCalendarEntity } from '@/shared/types/entities.types';

import { DisciplineTitles } from '../DisciplineTitles/DisciplineTitles';
import { DisciplineItem } from './DisciplineItem';

export default {
  title: 'entities/calendar/DisciplineItem',
  component: DisciplineItem,
  tags: ['autodocs'],
  argTypes: {
    discipline: { control: { type: null } },
    tournaments: { control: { type: null } },
    onClickDiscipline: { control: { type: null } },
    onClickTournament: { control: { type: null } },
    corporates: { control: { type: null } },
    filters: { control: { type: null } },
    onClickCorporate: { control: { type: null } },
    onClickMatch: { control: { type: null } },
  },
} as Meta<typeof DisciplineItem>;

type Story = StoryObj<typeof DisciplineItem>;
type StoryTemplate = StoryFn<typeof DisciplineItem>;

const discipline: GameDiscipline = {
  id: 1,
  title: 'Dota 2',
  cover: { url: 'https://picsum.photos/200' },
  keyword: 'dota2',
};

const tournaments: TournamentInCalendarEntity[] = [
  {
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
    visible: false,
    matches: [
      {
        id: 1,
        start_date: '2021-01-01',
        start_time: '14:00',
        end_time: '15:00',
        visible: false,
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
  },
  {
    id: 2,
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
        id: 2,
        start_time: '14:00',
        end_time: '15:00',
        start_date: '2021-01-01',
        visible: false,
        format: 'BO3',
        team_one: 'Thunder Awaken',
        team_two: 'OG',
        type: 'Match',
        match_casts: [],
      },
      {
        id: 3,
        start_time: '14:00',
        end_time: '15:00',
        start_date: '2021-01-01',
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
            host_analytic: null,
            backup_commentators: [],
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
      },
    ],
    ui_template: {
      primary: '#55ff00',
    },
    start_date: '2021-01-01',
    end_date: '2021-01-02',
    analytics: [],
    commentators: [],
    discipline_keyword: 'dota2',
  },
];

const Template: StoryTemplate = (args) => (
  <DisciplineItem discipline={discipline} tournaments={tournaments} {...args} />
);

export const Simple: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `<DisciplineItem discipline={discipline} tournaments={tournaments} />`,
      },
    },
  },
};

const TitlesTemplate: StoryTemplate = (args) => (
  <>
    <div style={{ padding: '15px 0' }}>
      <DisciplineTitles />
    </div>

    <DisciplineItem discipline={discipline} tournaments={tournaments} {...args} />
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
    <DisciplineTitles />
  </div>

  <DisciplineItem discipline={discipline} tournaments={tournaments} />
</>
        `,
      },
    },
  },
};

export const WithFilters: Story = {
  render: TitlesTemplate,
  args: {
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
    <DisciplineTitles />
  </div>

  <DisciplineItem
    discipline={discipline}
    tournaments={tournaments}
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
