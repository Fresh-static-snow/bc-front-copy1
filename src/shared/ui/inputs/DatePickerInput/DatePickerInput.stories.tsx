import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { DatePickerInput } from './DatePickerInput';

export default {
  title: 'elements/DatePickerInput',
  component: DatePickerInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['day', 'range'],
      control: { type: 'radio' },
    },
    control: {
      control: { type: null },
    },
    name: {
      control: { type: null },
    },
  },
} as Meta<typeof DatePickerInput>;

type Story = StoryObj<typeof DatePickerInput>;
type StoryTemplate = StoryFn<typeof DatePickerInput>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return <DatePickerInput control={control} name="default" {...args} />;
};

export const Simple: Story = {
  render: Template,
  args: {
    type: 'day',
  },
  parameters: {
    docs: {
      source: {
        code: `
<DatePickerInput
  control={control}
  name="default"
/>
        `,
      },
    },
  },
};

export const Range: Story = {
  render: Template,
  args: {
    type: 'range',
  },
  parameters: {
    docs: {
      source: {
        code: `
<DatePickerInput
  control={control}
  name="default"
  type="range"
/>
        `,
      },
    },
  },
};
