import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PrimarySelectableValue } from '@/shared/types/values.types';
import { PrimaryButton } from '@/shared/ui/inputs';

import { EditEntityModal } from './EditEntityModal';

export default {
  title: 'shared/feedback/EditEntityModal',
  component: EditEntityModal,
  tags: ['autodocs'],
  argTypes: {
    isMobile: { control: { type: 'boolean' } },
    requestButtons: { control: { type: null } },
    formTemplates: { control: { type: null } },
    requestType: { control: { type: null } },
    setRequestType: { control: { type: null } },
  },
} as Meta<typeof EditEntityModal>;

type Story = StoryObj<typeof EditEntityModal>;
type StoryTemplate = StoryFn<typeof EditEntityModal>;

const Template: StoryTemplate = (args) => {
  const [requestType, setRequestType] = useState<PrimarySelectableValue>();

  const onOpen = () => setRequestType({ value: 'event', label: 'Event' });

  return (
    <>
      <EditEntityModal requestType={requestType} setRequestType={setRequestType} {...args} />

      <PrimaryButton label="Button" onClick={onOpen} variant="primary" />
    </>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    isMobile: false,
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
<EditEntityModal
  isMobile={false}
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
<EditEntityModal
  isMobile={true}
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
