import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { CorporateForm } from './CorporateForm';
import { CorporateFormSchema } from './CorporateForm.types';

export default {
  title: 'modules/AppForms/CorporateForm',
  component: CorporateForm,
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
  },
} as Meta<typeof CorporateForm>;

type Story = StoryObj<typeof CorporateForm>;
type StoryTemplate = StoryFn<typeof CorporateForm>;

const participantsOptions = [
  {
    label: 'Participant 1',
    value: 'Participant 1',
    children: [
      {
        label: 'Participant 1.1',
        value: 'Participant 1.1',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 1',
      },
      {
        label: 'Participant 1.2',
        value: 'Participant 1.2',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 1',
      },
      {
        label: 'Participant 1.3',
        value: 'Participant 1.3',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 1',
      },
    ],
  },
  {
    label: 'Participant 2',
    value: 'Participant 2',
    children: [
      {
        label: 'Participant 2.1',
        value: 'Participant 2.1',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 2',
      },
      {
        label: 'Participant 2.2',
        value: 'Participant 2.2',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 2',
      },
      {
        label: 'Participant 2.3',
        value: 'Participant 2.3',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 2',
      },
      {
        label: 'Participant 2.4',
        value: 'Participant 2.4',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 2',
      },
      {
        label: 'Participant 2.5',
        value: 'Participant 2.5',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 2',
      },
      {
        label: 'Participant 2.6',
        value: 'Participant 2.6',
        additional: 'https://picsum.photos/200',
        parent: 'Participant 2',
      },
    ],
  },
];

const Template: StoryTemplate = (args) => {
  const [formData, setFormData] = useState<CorporateFormSchema>({
    date: dayjs().format(),
    time: ['00:00', undefined],
  });

  return (
    <div style={{ width: '610px' }}>
      <CorporateForm
        formData={formData}
        setFormData={setFormData}
        onCloseModal={() => {}}
        onSendData={() => {}}
        participantsOptions={participantsOptions}
        mainParticipantsOptions={[
          { label: 'Main Participant 1', value: 'Main Participant 1' },
          { label: 'Main Participant 2', value: 'Main Participant 2' },
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
  <CorporateForm
    formData={formData}
    setFormData={setFormData}
    onClose={onClose}
    onSendData={onSendData}
    anotherOneCheckbox
    participantsOptions={participantsOptions}
    mainParticipantsOptions={mainParticipantsOptions}
  />
</div>
        `,
      },
    },
  },
};
