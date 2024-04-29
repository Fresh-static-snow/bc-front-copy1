import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { TournamentForm } from './TournamentForm';
import { TournamentFormSchema } from './TournamentForm.types';

export default {
  title: 'modules/AppForms/TournamentForm',
  component: TournamentForm,
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
    mainParticipantsOptions: {
      control: {
        type: null,
      },
    },
    mediaRepresentativeOptions: {
      control: {
        type: null,
      },
    },
    ownersOptions: {
      control: {
        type: null,
      },
    },
    regionsOptions: {
      control: {
        type: null,
      },
    },
    sponsorsOptions: {
      control: {
        type: null,
      },
    },
    typesOptions: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof TournamentForm>;

type Story = StoryObj<typeof TournamentForm>;
type StoryTemplate = StoryFn<typeof TournamentForm>;

const Template: StoryTemplate = (args) => {
  const [formData, setFormData] = useState<TournamentFormSchema>({
    date: [dayjs().format(), undefined],
    descriptions: [{}],
    medias: [{}],
  });

  return (
    <div style={{ width: '610px' }}>
      <TournamentForm
        formData={formData}
        setFormData={setFormData}
        onCloseModal={() => {}}
        onSendData={() => {}}
        disciplineOptions={[
          { label: 'Discipline 1', value: 'Discipline 1' },
          { label: 'Discipline 2', value: 'Discipline 2' },
        ]}
        mainParticipantsOptions={[
          {
            label: 'Main Participant 1',
            value: 'Main Participant 1',
            additional: 'https://picsum.photos/200',
          },
          {
            label: 'Main Participant 2',
            value: 'Main Participant 2',
            additional: 'https://picsum.photos/200',
          },
        ]}
        mediaRepresentativeOptions={[
          {
            label: 'Media Representative 1',
            value: 'Media Representative 1',
            additional: 'https://picsum.photos/200',
          },
          {
            label: 'Media Representative 2',
            value: 'Media Representative 2',
            additional: 'https://picsum.photos/200',
          },
        ]}
        regionsOptions={[
          { label: 'Region 1', value: 'Region 1' },
          { label: 'Region 2', value: 'Region 2' },
        ]}
        typesOptions={[
          { label: 'Type 1', value: 'Type 1' },
          { label: 'Type 2', value: 'Type 2' },
        ]}
        sponsorsOptions={[
          { label: 'Sponsor 1', value: 'Sponsor 1' },
          { label: 'Sponsor 2', value: 'Sponsor 2' },
        ]}
        ownersOptions={[
          { label: 'Owner 1', value: 'Owner 1' },
          { label: 'Owner 2', value: 'Owner 2' },
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
  <TournamentForm
    formData={formData}
    setFormData={setFormData}
    onClose={onClose}
    onSendData={onSendData}
    anotherOneCheckbox
    disciplineOptions={disciplineOptions}
    mainParticipantsOptions={mainParticipantsOptions}
    mediaRepresentativeOptions={mediaRepresentativeOptions}
    regionsOptions={regionsOptions}
    typesOptions={typesOptions}
    sponsorsOptions={sponsorsOptions}
    ownersOptions={ownersOptions}
  />
</div>
        `,
      },
    },
  },
};
