import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TimePickerInput } from './TimePickerInput';

export default {
  title: 'elements/TimePickerInput',
  component: TimePickerInput,
  tags: ['autodocs'],
  argTypes: {
    control: {
      control: { type: null },
    },
    name: {
      control: { type: null },
    },
  },
} as Meta<typeof TimePickerInput>;

type Story = StoryObj<typeof TimePickerInput>;
type StoryTemplate = StoryFn<typeof TimePickerInput>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return <TimePickerInput control={control} name="default" {...args} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<TimePickerInput
  control={control}
  name="default"
/>
        `,
      },
    },
  },
};
