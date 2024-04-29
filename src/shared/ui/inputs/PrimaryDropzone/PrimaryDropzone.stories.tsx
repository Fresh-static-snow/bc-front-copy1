import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PrimaryDropzone } from './PrimaryDropzone';

export default {
  title: 'ui/PrimaryDropzone',
  component: PrimaryDropzone,
  tags: ['autodocs'],
  argTypes: {
    control: {
      control: { type: null },
    },
    name: {
      control: { type: null },
    },
    types: {
      control: { type: null },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof PrimaryDropzone>;

type Story = StoryObj<typeof PrimaryDropzone>;
type StoryTemplate = StoryFn<typeof PrimaryDropzone>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return <PrimaryDropzone control={control} name="default" {...args} />;
};

export const Images: Story = {
  render: Template,
  args: {
    types: ['jpg', 'png', 'svg'],
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryDropzone
  control={control}
  name="default"
  types={['jpg', 'png', 'svg']}
/>
        `,
      },
    },
  },
};

export const PDF: Story = {
  render: Template,
  args: {
    types: ['pdf'],
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryDropzone
  control={control}
  name="default"
  types={['pdf']}
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

  return <PrimaryDropzone control={control} name="default" {...args} />;
};

export const Error: Story = {
  render: ErrorTemplate,
  args: {
    types: ['jpg', 'png', 'svg'],
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryDropzone
  control={control}
  name="default"
  types={['jpg', 'png', 'svg']}
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
<PrimaryDropzone
  control={control}
  name="default"
  disabled
/>
        `,
      },
    },
  },
};
