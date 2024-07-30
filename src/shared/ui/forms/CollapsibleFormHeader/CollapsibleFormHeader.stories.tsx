import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { CollapsibleFormHeader } from './CollapsibleFormHeader';

export default {
  title: 'shared/forms/CollapsibleFormHeader',
  component: CollapsibleFormHeader,
  tags: ['autodocs'],
  argTypes: {
    AvatarComponent: { control: { type: null } },
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    extendedStatus: { control: { type: 'boolean' } },
    onChangeExtendedStatus: { control: { type: null } },
    onOpenConfirmationModal: { control: { type: null } },
  },
} as Meta<typeof CollapsibleFormHeader>;

type Story = StoryObj<typeof CollapsibleFormHeader>;
type StoryTemplate = StoryFn<typeof CollapsibleFormHeader>;

const Template: StoryTemplate = (args) => {
  const [extendedStatus, setExtendedStatus] = useState(false);

  const handleChangeExtendedStatus = () => {
    setExtendedStatus((prev) => !prev);
  };

  const handleOpenConfirmationModal = () => {
    alert('Confirmation Modal Opened');
  };

  return (
    <>
      <CollapsibleFormHeader
        {...args}
        extendedStatus={extendedStatus}
        onChangeExtendedStatus={handleChangeExtendedStatus}
        onOpenConfirmationModal={handleOpenConfirmationModal}
      />

      {extendedStatus && <div style={{ padding: '20px 0' }}>Form Content</div>}
    </>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    title: 'Form Header',
    subtitle: 'This is a subtitle',
  },
  parameters: {
    docs: {
      source: {
        code: `
<CollapsibleFormHeader
  title="Form Header"
  subtitle="This is a subtitle"
  extendedStatus={extendedStatus}
  onChangeExtendedStatus={handleChangeExtendedStatus}
  onOpenConfirmationModal={handleOpenConfirmationModal}
/>
        `,
      },
    },
  },
};

export const WithAvatar: Story = {
  render: Template,
  args: {
    AvatarComponent: (
      <img src="https://picsum.photos/50" alt="Avatar" style={{ borderRadius: '50%' }} />
    ),
    title: 'Form Header',
    subtitle: 'This is a subtitle',
    extendedStatus: false,
  },
  parameters: {
    docs: {
      source: {
        code: `
<CollapsibleFormHeader
  AvatarComponent={<img src="https://picsum.photos/50" alt="Avatar" />}
  title="Form Header"
  subtitle="This is a subtitle"
  extendedStatus={extendedStatus}
  onChangeExtendedStatus={handleChangeExtendedStatus}
  onOpenConfirmationModal={handleOpenConfirmationModal}
/>
        `,
      },
    },
  },
};
