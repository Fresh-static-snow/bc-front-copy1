import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PrimaryInput } from './PrimaryInput';

export default {
  title: 'shared/inputs/PrimaryInput',
  component: PrimaryInput,
  tags: ['autodocs'],
  argTypes: {
    type: { options: ['text', 'password'], control: { type: 'select' } },
    placeholder: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    control: { control: { type: null } },
    name: { control: { type: null } },
  },
} as Meta<typeof PrimaryInput>;

type Story = StoryObj<typeof PrimaryInput>;
type StoryTemplate = StoryFn<typeof PrimaryInput>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return <PrimaryInput control={control} name="default" {...args} />;
};

export const Simple: Story = {
  render: Template,
  args: {
    type: 'text',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryInput
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
    type: 'text',
    placeholder: 'Enter your text',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryInput
  control={control}
  name="default"
  placeholder="Enter your text"
/>
        `,
      },
    },
  },
};

export const Password: Story = {
  render: Template,
  args: {
    type: 'password',
    placeholder: 'Enter your password',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryInput
  control={control}
  name="default"
  type="password"
  placeholder="Enter your password"
/>
        `,
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    type: 'text',
    placeholder: 'Enter your text',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryInput
  control={control}
  name="default"
  placeholder="Enter your text"
  disabled
/>
        `,
      },
    },
  },
};

export const DisabledPassword: Story = {
  render: Template,
  args: {
    type: 'password',
    placeholder: 'Enter your password',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryInput
  control={control}
  name="default"
  type="password"
  placeholder="Enter your password"
  disabled
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

  return <PrimaryInput control={control} name="default" {...args} />;
};

export const Error: Story = {
  render: ErrorTemplate,
  args: {
    type: 'text',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryInput
  control={control}
  name="default"
/>
        `,
      },
    },
  },
};
