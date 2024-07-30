import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { TimePickerInput } from './TimePickerInput';

export default {
  title: 'shared/inputs/TimePickerInput',
  component: TimePickerInput,
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    control: { control: { type: null } },
    name: { control: { type: null } },
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

export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<TimePickerInput
  control={control}
  name="default"
  disabled
/>
        `,
      },
    },
  },
};

export const CustomWidth: Story = {
  render: Template,
  args: {
    width: '300px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<TimePickerInput
  control={control}
  name="default"
  width="300px"
/>
        `,
      },
    },
  },
};
