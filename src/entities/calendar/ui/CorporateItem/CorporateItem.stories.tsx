import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { CorporateInCalendarEntity } from '@/shared/types/entities.types';

import { CorporateItem } from './CorporateItem';

export default {
  title: 'entities/calendar/CorporateItem',
  component: CorporateItem,
  tags: ['autodocs'],
  argTypes: {
    corporate: { control: { type: null } },
    onClickCorporate: { control: { type: null } },
  },
} as Meta<typeof CorporateItem>;

type Story = StoryObj<typeof CorporateItem>;
type StoryTemplate = StoryFn<typeof CorporateItem>;

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

const Template: StoryTemplate = (args) => <CorporateItem corporate={corporate} {...args} />;

export const Simple: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `<CorporateItem tournament={tournament} />`,
      },
    },
  },
};
