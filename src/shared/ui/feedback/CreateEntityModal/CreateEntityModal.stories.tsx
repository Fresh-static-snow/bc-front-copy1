import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PrimarySelectableValue } from '@/shared/types/values.types';
import { PrimaryButton } from '@/shared/ui/inputs';

import { CreateEntityModal } from './CreateEntityModal';

export default {
  title: 'shared/feedback/CreateEntityModal',
  component: CreateEntityModal,
  tags: ['autodocs'],
  argTypes: {
    isMobile: { control: { type: 'boolean' } },
    requestButtons: { control: { type: null } },
    formTemplates: { control: { type: null } },
    requestType: { control: { type: null } },
    setRequestType: { control: { type: null } },
  },
} as Meta<typeof CreateEntityModal>;

type Story = StoryObj<typeof CreateEntityModal>;
type StoryTemplate = StoryFn<typeof CreateEntityModal>;

const Template: StoryTemplate = (args) => {
  const [requestType, setRequestType] = useState<PrimarySelectableValue>();

  const onOpen = () => setRequestType({ value: 'event', label: 'Event' });

  return (
    <>
      <CreateEntityModal requestType={requestType} setRequestType={setRequestType} {...args} />

      <PrimaryButton label="Button" onClick={onOpen} variant="primary" />
    </>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    isMobile: false,
    requestButtons: [
      { value: 'event', label: 'Event' },
      { value: 'task', label: 'Task' },
    ],
    formTemplates: {
      event: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Event Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
      task: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Task Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<CreateEntityModal
  isMobile={false}
  requestButtons={[
    { value: 'event', label: 'Event' },
    { value: 'task', label: 'Task' },
  ]}
  formTemplates={{
    event: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Event Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
    task: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Task Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
  }}
  requestType={requestType}
  setRequestType={setRequestType}
/>
        `,
      },
    },
  },
};

export const MobileView: Story = {
  render: Template,
  args: {
    isMobile: true,
    requestButtons: [
      { value: 'event', label: 'Event' },
      { value: 'task', label: 'Task' },
    ],
    formTemplates: {
      event: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Event Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
      task: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Task Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<CreateEntityModal
  isMobile={true}
  requestButtons={[
    { value: 'event', label: 'Event' },
    { value: 'task', label: 'Task' },
  ]}
  formTemplates={{
    event: ({ setEntityModal }) => (
        <>
          <div style={{ padding: '20px' }}>Event Form</div>
          <div style={{ padding: '20px' }}>
            <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
          </div>
        </>
      ),
    task: ({ setEntityModal }) => (
      <>
        <div style={{ padding: '20px' }}>Task Form</div>
        <div style={{ padding: '20px' }}>
          <PrimaryButton label="Close" onClick={() => setEntityModal()} variant="primary" />
        </div>
      </>
    ),
  }}
  requestType={requestType}
  setRequestType={setRequestType}
/>
        `,
      },
    },
  },
};
