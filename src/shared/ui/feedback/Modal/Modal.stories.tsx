import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { useToggle } from '@/shared/lib';

import { PrimaryButton } from '../../inputs';
import { Modal } from './Modal';

export default {
  title: 'components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    isOpen: {
      control: {
        type: null,
      },
    },
    onClose: {
      control: {
        type: null,
      },
    },
    maxWidth: {
      control: {
        type: 'text',
      },
    },
    maxHeight: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof Modal>;

type Story = StoryObj<typeof Modal>;
type StoryTemplate = StoryFn<typeof Modal>;

const Template: StoryTemplate = (args) => {
  const [isOpen, setOpen] = useToggle(false);

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} {...args}>
        <div style={{ width: '600px', height: '600px' }} />
      </Modal>

      <PrimaryButton label="Button" onClick={onOpen} variant="primary" />
    </>
  );
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<Modal isOpen={isOpen} onClose={onClose}>
  <div style={{ width: '600px', height: '600px' }} />
</Modal>
        `,
      },
    },
  },
};
