import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PrimaryTextarea } from './PrimaryTextarea';

export default {
  title: 'ui/PrimaryTextarea',
  component: PrimaryTextarea,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    control: {
      control: { type: null },
    },
    name: {
      control: { type: null },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof PrimaryTextarea>;

type Story = StoryObj<typeof PrimaryTextarea>;
type StoryTemplate = StoryFn<typeof PrimaryTextarea>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return <PrimaryTextarea control={control} name="default" {...args} />;
};

export const Simple: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryTextarea
  control={control}
  name="default"
/>
        `,
      },
    },
  },
};

export const Placeholder: Story = {
  render: Template,
  args: {
    placeholder: 'Enter your text',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryTextarea
  control={control}
  name="default"
  placeholder="Enter your text"
/>
        `,
      },
    },
  },
};

const ErrorTemplate: StoryTemplate = (args) => {
  const { control, setError } = useForm();

  useEffect(() => {
    setError('default', { message: 'Some error' });
  }, [setError]);

  return <PrimaryTextarea control={control} name="default" {...args} />;
};

export const Error: Story = {
  render: ErrorTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryTextarea
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
<PrimaryTextarea
  control={control}
  name="default"
  disabled
/>
        `,
      },
    },
  },
};
