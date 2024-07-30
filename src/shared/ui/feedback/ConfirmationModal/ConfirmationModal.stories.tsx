import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { useToggle } from '@/shared/lib';
import { PrimaryButton } from '@/shared/ui/inputs';

import { ConfirmationModal } from './ConfirmationModal';

export default {
  title: 'shared/feedback/ConfirmationModal',
  component: ConfirmationModal,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: { type: null } },
    title: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    additionalContent: { control: { type: null } },
    isOpen: { control: { type: null } },
    isLoading: { control: { type: 'boolean' } },
    confirmButtonLabel: { control: { type: 'text' } },
    additionalButtonLabel: { control: { type: 'text' } },
    closeButtonLabel: { control: { type: 'text' } },
    withAdditionalButton: { control: { type: 'boolean' } },
    maxWidth: { control: { type: 'text' } },
    onConfirm: { control: { type: null } },
    onClickAdditionalButton: { control: { type: null } },
    onClose: { control: { type: null } },
  },
} as Meta<typeof ConfirmationModal>;

type Story = StoryObj<typeof ConfirmationModal>;
type StoryTemplate = StoryFn<typeof ConfirmationModal>;

const Template: StoryTemplate = (args) => {
  const [isOpen, setOpen] = useToggle(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const onConfirm = () => {
    alert('Confirmed');
    setOpen(false);
  };

  return (
    <>
      <ConfirmationModal isOpen={isOpen} onClose={onClose} onConfirm={onConfirm} {...args} />

      <PrimaryButton label="Button" onClick={onOpen} variant="primary" />
    </>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    title: 'Confirm Action',
    message: 'Are you sure you want to perform this action?',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ConfirmationModal
  isOpen={isOpen}
  onClose={onClose}
  onConfirm={onConfirm}
  title="Confirm Action"
  message="Are you sure you want to perform this action?"
/>
        `,
      },
    },
  },
};

export const WithLoading: Story = {
  render: Template,
  args: {
    isLoading: true,
    title: 'Loading Confirmation',
    message: 'Please wait while we process your request.',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ConfirmationModal
  isOpen={isOpen}
  onClose={onClose}
  onConfirm={onConfirm}
  isLoading
  title="Loading Confirmation"
  message="Please wait while we process your request."
/>
        `,
      },
    },
  },
};

export const WithAdditionalContent: Story = {
  render: Template,
  args: {
    title: 'Additional Content',
    message: 'Here is some additional content below the message.',
    additionalContent: <div>Extra information or controls can go here.</div>,
  },
  parameters: {
    docs: {
      source: {
        code: `
<ConfirmationModal
  isOpen={isOpen}
  onClose={onClose}
  onConfirm={onConfirm}
  title="Additional Content"
  message="Here is some additional content below the message."
  additionalContent={<div>Extra information or controls can go here.</div>}
/>
        `,
      },
    },
  },
};

export const WithAdditionalButton: Story = {
  render: Template,
  args: {
    title: 'Additional Button',
    message: 'This modal has an additional button.',
    additionalButtonLabel: 'More Info',
    withAdditionalButton: true,
    onClickAdditionalButton: () => alert('Additional button clicked'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<ConfirmationModal
  isOpen={isOpen}
  onClose={onClose}
  onConfirm={onConfirm}
  title="Additional Button"
  message="This modal has an additional button."
  additionalButtonLabel="More Info"
  withAdditionalButton
  onClickAdditionalButton={() => alert('Additional button clicked')}
/>
        `,
      },
    },
  },
};

export const CustomMaxWidth: Story = {
  render: Template,
  args: {
    title: 'Custom Max Width',
    message: 'This modal has a custom maximum width.',
    maxWidth: '200px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<ConfirmationModal
  isOpen={isOpen}
  onClose={onClose}
  onConfirm={onConfirm}
  title="Custom Max Width"
  message="This modal has a custom maximum width."
  maxWidth="200px"
/>
        `,
      },
    },
  },
};
