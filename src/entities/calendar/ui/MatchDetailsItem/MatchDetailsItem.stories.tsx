import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { MatchCast } from '@/shared/types/entities.types';

import { MatchDetailsTitles } from '../MatchDetailsTitles/MatchDetailsTitles';
import { MatchDetailsItem } from './MatchDetailsItem';

export default {
  title: 'modules/ScheduleParts/MatchDetailsItem',
  component: MatchDetailsItem,
  tags: ['autodocs'],
  argTypes: {
    matchDetails: {
      control: {
        type: null,
      },
    },
    color: {
      control: {
        type: 'color',
      },
    },
    isVisible: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<typeof MatchDetailsItem>;

type Story = StoryObj<typeof MatchDetailsItem>;
type StoryTemplate = StoryFn<typeof MatchDetailsItem>;

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
};

const Template: StoryTemplate = (args) => (
  <MatchDetailsItem matchDetails={matchDetails} {...args} />
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
        code: `<MatchDetailsItem matchDetails={matchDetails} color="#00CC6A" />`,
      },
    },
  },
};

const TitlesTemplate: StoryTemplate = (args) => (
  <>
    <div style={{ padding: '15px 0' }}>
      <MatchDetailsTitles />
    </div>

    <MatchDetailsItem matchDetails={matchDetails} {...args} />
  </>
);

export const Titles: Story = {
  render: TitlesTemplate,
  args: {
    color: '#00CC6A',
    isVisible: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<>
  <div style={{ padding: '15px 0' }}>
    <MatchDetailsTitles />
  </div>

  <MatchDetailsItem matchDetails={matchDetails} color="#00CC6A" />
</>
        `,
      },
    },
  },
};
