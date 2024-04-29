import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { MatchForm } from './MatchForm';
import { MatchFormSchema } from './MatchForm.types';

export default {
  title: 'modules/AppForms/MatchForm',
  component: MatchForm,
  tags: ['autodocs'],
  argTypes: {
    anotherOneCheckbox: {
      control: {
        type: 'boolean',
      },
    },
    formData: {
      control: {
        type: null,
      },
    },
    setFormData: {
      control: {
        type: null,
      },
    },
    onClose: {
      control: {
        type: null,
      },
    },
    onSendData: {
      control: {
        type: null,
      },
    },
    disciplineOptions: {
      control: {
        type: null,
      },
    },
    tournamentOptions: {
      control: {
        type: null,
      },
    },
    formatsOptions: {
      control: {
        type: null,
      },
    },
    teamsOptions: {
      control: {
        type: null,
      },
    },
    languagesOptions: {
      control: {
        type: null,
      },
    },
    studiosOptions: {
      control: {
        type: null,
      },
    },
    analyticsOptions: {
      control: {
        type: null,
      },
    },
    staffOptions: {
      control: {
        type: null,
      },
    },
    channelsOptions: {
      control: {
        type: null,
      },
    },
    commentatorsOptions: {
      control: {
        type: null,
      },
    },
    studiosAnalyticsOptions: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof MatchForm>;

type Story = StoryObj<typeof MatchForm>;
type StoryTemplate = StoryFn<typeof MatchForm>;

const Template: StoryTemplate = (args) => {
  const [formData, setFormData] = useState<MatchFormSchema>({
    date: dayjs().format(),
    time: ['00:00', undefined],
    languages: [{}],
  });

  return (
    <div style={{ width: '610px' }}>
      <MatchForm
        formData={formData}
        setFormData={setFormData}
        onCloseModal={() => {}}
        onSendData={() => {}}
        disciplineOptions={[
          { label: 'Discipline 1', value: 'Discipline 1' },
          { label: 'Discipline 2', value: 'Discipline 2' },
        ]}
        tournamentOptions={[
          { label: 'Tournament 1', value: 'Tournament 1', additional: 'Discipline 1' },
          { label: 'Tournament 2', value: 'Tournament 2', additional: 'Discipline 2' },
        ]}
        formatsOptions={[
          { label: 'Format 1', value: 'Format 1' },
          { label: 'Format 2', value: 'Format 2' },
        ]}
        teamsOptions={[
          { label: 'Team 1', value: 'Team 1' },
          { label: 'Team 2', value: 'Team 2' },
        ]}
        languagesOptions={[
          { label: 'Language 1', value: 'Language 1', additional: 'EN' },
          { label: 'Language 2', value: 'Language 2', additional: 'UK' },
        ]}
        channelsOptions={[
          { label: 'Channel 1', value: 'Channel 1' },
          { label: 'Channel 2', value: 'Channel 2' },
        ]}
        commentatorsOptions={[
          { label: 'Commentator 1', value: 'Commentator 1' },
          { label: 'Commentator 2', value: 'Commentator 2' },
        ]}
        staffOptions={[
          { label: 'Staff 1', value: 'Staff 1' },
          { label: 'Staff 2', value: 'Staff 2' },
        ]}
        studiosOptions={[
          { label: 'Studio 1', value: 'Studio 1' },
          { label: 'Studio 2', value: 'Studio 2' },
        ]}
        studiosAnalyticsOptions={[
          { label: 'Studio Analytics 1', value: 'Studio Analytics 1' },
          { label: 'Studio Analytics 2', value: 'Studio Analytics 2' },
        ]}
        analyticsOptions={[
          { label: 'Analytics 1', value: 'Analytics 1' },
          { label: 'Analytics 2', value: 'Analytics 2' },
        ]}
        {...args}
      />
    </div>
  );
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: '610px' }}>
  <MatchForm
    formData={formData}
    setFormData={setFormData}
    onClose={onClose}
    onSendData={onSendData}
    anotherOneCheckbox
    disciplineOptions={disciplineOptions}
    tournamentOptions={tournamentOptions}
    formatsOptions={formatsOptions}
    teamsOptions={teamsOptions}
    languagesOptions={languagesOptions}
    channelsOptions={channelsOptions}
    commentatorsOptions={commentatorsOptions}
    staffOptions={staffOptions}
    studiosOptions={studiosOptions}
    studiosAnalyticsOptions={studiosAnalyticsOptions}
    analyticsOptions={analyticsOptions}
  />
</div>
        `,
      },
    },
  },
};
