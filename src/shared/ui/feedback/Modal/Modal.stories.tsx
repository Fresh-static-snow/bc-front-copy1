import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { useToggle } from '@/shared/lib';

import { PrimaryButton } from '../../inputs';
import { Modal } from './Modal';

export default {
  title: 'shared/feedback/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    isOpen: { control: { type: null } },
    onClose: { control: { type: null } },
    maxWidth: { control: { type: 'text' } },
    maxHeight: { control: { type: 'text' } },
    isMobile: { control: { type: 'boolean' } },
    width: { control: { type: 'text' } },
    verticalAlign: { control: { type: 'select', options: ['top', 'center', 'bottom'] } },
    borderRadius: { control: { type: 'text' } },
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

export const MobileView: Story = {
  render: Template,
  args: {
    isMobile: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal isOpen={isOpen} onClose={onClose} isMobile={true}>
  <div style={{ width: '600px', height: '600px' }} />
</Modal>
        `,
      },
    },
  },
};

export const CustomSize: Story = {
  render: Template,
  args: {
    width: '80%',
    maxWidth: '800px',
    maxHeight: '80vh',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal isOpen={isOpen} onClose={onClose} width="80%" maxWidth="800px" maxHeight="80vh">
  <div style={{ width: '600px', height: '600px' }} />
</Modal>
        `,
      },
    },
  },
};

export const VerticalAlignBottom: Story = {
  render: Template,
  args: {
    verticalAlign: 'bottom',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal isOpen={isOpen} onClose={onClose} verticalAlign="bottom">
  <div style={{ width: '600px', height: '600px' }} />
</Modal>
        `,
      },
    },
  },
};

export const WithBorderRadius: Story = {
  render: Template,
  args: {
    borderRadius: '10px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal isOpen={isOpen} onClose={onClose} borderRadius="10px">
  <div style={{ width: '600px', height: '600px' }} />
</Modal>
        `,
      },
    },
  },
};

export const FullCustomization: Story = {
  render: Template,
  args: {
    isMobile: false,
    width: '80%',
    maxWidth: '800px',
    maxHeight: '80vh',
    verticalAlign: 'center',
    borderRadius: '15px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Modal
  isOpen={isOpen}
  onClose={onClose}
  isMobile={false}
  width="80%"
  maxWidth="800px"
  maxHeight="80vh"
  verticalAlign="center"
  borderRadius="15px"
>
  <div style={{ width: '600px', height: '600px' }} />
</Modal>
        `,
      },
    },
  },
};
