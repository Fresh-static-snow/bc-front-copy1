import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { GameDisciplineForm } from './GameDisciplineForm';
import { GameDisciplineFormSchema } from './GameDisciplineForm.types';

export default {
  title: 'modules/AppForms/GameDisciplineForm',
  component: GameDisciplineForm,
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
} as Meta<typeof GameDisciplineForm>;

type Story = StoryObj<typeof GameDisciplineForm>;
type StoryTemplate = StoryFn<typeof GameDisciplineForm>;

const Template: StoryTemplate = (args) => {
  const [formData, setFormData] = useState<GameDisciplineFormSchema>({});

  return (
    <div style={{ width: '610px' }}>
      <GameDisciplineForm
        formData={formData}
        setFormData={setFormData}
        onCloseModal={() => {}}
        onSendData={() => {}}
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
  <GameDisciplineForm
    formData={formData}
    setFormData={setFormData}
    onClose={onClose}
    onSendData={onSendData}
    anotherOneCheckbox
  />
</div>
        `,
      },
    },
  },
};
