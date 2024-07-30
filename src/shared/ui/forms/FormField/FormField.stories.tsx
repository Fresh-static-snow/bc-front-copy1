import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { PrimaryInput } from '@/shared/ui/inputs';

import { FormField } from './FormField';

export default {
  title: 'shared/forms/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    label: { control: { type: 'text' } },
    direction: { control: { type: 'select', options: ['row', 'column'] } },
    required: { control: { type: 'boolean' } },
  },
} as Meta<typeof FormField>;

type Story = StoryObj<typeof FormField>;
type StoryTemplate = StoryFn<typeof FormField>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return (
    <div style={{ width: '600px', border: '1px solid gray', borderRadius: '5px', padding: '20px' }}>
      <FormField {...args}>
        <PrimaryInput name="email" control={control} />
      </FormField>
    </div>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    label: 'Field Label',
    direction: 'row',
    children: <input type="text" />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormField
  label="Field Label"
  direction="row"
>
  <input type="text" />
</FormField>
        `,
      },
    },
  },
};

export const Required: Story = {
  render: Template,
  args: {
    label: 'Required Field',
    direction: 'row',
    required: true,
    children: <input type="text" />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormField
  label="Required Field"
  direction="row"
  required
>
  <input type="text" />
</FormField>
        `,
      },
    },
  },
};

export const ColumnDirection: Story = {
  render: Template,
  args: {
    label: 'Column Field',
    direction: 'column',
    children: <input type="text" />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormField
  label="Column Field"
  direction="column"
>
  <input type="text" />
</FormField>
        `,
      },
    },
  },
};
