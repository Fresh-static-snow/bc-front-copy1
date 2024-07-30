import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { CorporateItemMobile } from '@/entities/calendar';
import { CorporateInCalendarEntity, GameDiscipline } from '@/shared/types/entities.types';

export default {
  title: 'entities/calendar/CorporateItemMobile',
  component: CorporateItemMobile,
  tags: ['autodocs'],
  argTypes: {
    corporate: { control: { type: null } },
    onClickCorporate: { control: { type: null } },
    discipline: { control: { type: null } },
  },
} as Meta<typeof CorporateItemMobile>;

type Story = StoryObj<typeof CorporateItemMobile>;
type StoryTemplate = StoryFn<typeof CorporateItemMobile>;

const discipline: GameDiscipline = {
  id: 1,
  title: 'Dota 2',
  cover: { url: 'https://picsum.photos/200' },
  keyword: 'dota2',
};

const corporate: CorporateInCalendarEntity = {
  id: 1,
  name: 'Certification training',
  location: '55 Velyka Vasylkivska, QU Tower',
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
  visible: true,
  ui_template: {
    primary: '#FF0000',
  },
  start_date: '2021-04-05',
  start_time: '10:00',
  end_time: '16:00',
};

const Template: StoryTemplate = (args) => (
  <CorporateItemMobile discipline={discipline} corporate={corporate} {...args} />
);

export const Simple: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `<CorporateItemMobile discipline={discipline} tournament={tournament} />`,
      },
    },
  },
};
