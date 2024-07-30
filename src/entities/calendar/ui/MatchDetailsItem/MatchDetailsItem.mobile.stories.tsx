import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { MatchCast } from '@/shared/types/entities.types';

import { MatchDetailsItemMobile } from './MatchDetailsItem.mobile';

export default {
  title: 'entities/calendar/MatchDetailsItemMobile',
  component: MatchDetailsItemMobile,
  tags: ['autodocs'],
  argTypes: {
    matchDetails: { control: { type: null } },
    color: { control: { type: 'color' } },
    isVisible: { control: { type: 'boolean' } },
    filters: { control: { type: null } },
    match: { control: { type: null } },
    discipline: { control: { type: null } },
    tournament: { control: { type: null } },
  },
} as Meta<typeof MatchDetailsItemMobile>;

type Story = StoryObj<typeof MatchDetailsItemMobile>;
type StoryTemplate = StoryFn<typeof MatchDetailsItemMobile>;

const matchDetails: MatchCast = {
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
};

const Template: StoryTemplate = (args) => (
  <MatchDetailsItemMobile matchDetails={matchDetails} {...args} />
);

export const Simple: Story = {
  render: Template,
  args: {
    color: '#00CC6A',
    isVisible: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<MatchDetailsItemMobile matchDetails={matchDetails} color="#00CC6A" />`,
      },
    },
  },
};

export const WithFilters: Story = {
  render: Template,
  args: {
    color: '#00CC6A',
    isVisible: true,
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
<MatchDetailsItemMobile
  matchDetails={matchDetails}
  color="#00CC6A"
  filters={
    staff_members: ['3'],
    channel: ['1'],
    commentators: ['2'],
  }
/>
        `,
      },
    },
  },
};
