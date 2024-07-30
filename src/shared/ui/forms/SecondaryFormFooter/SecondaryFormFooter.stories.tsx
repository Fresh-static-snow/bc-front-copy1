import { Meta, StoryObj } from '@storybook/react';

import { PrimaryButton } from '@/shared/ui/inputs';

import { SecondaryFormFooter } from './SecondaryFormFooter';

export default {
  title: 'shared/forms/SecondaryFormFooter',
  component: SecondaryFormFooter,
  tags: ['autodocs'],
  argTypes: {
    isDirty: { control: { type: 'boolean' } },
    CustomComponent: { control: { type: null } },
    withDelete: { control: { type: 'boolean' } },
    submitButtonLabel: { control: { type: 'text' } },
    isLoading: { control: { type: 'boolean' } },
    onClickDelete: { control: { type: null } },
    onReset: { control: { type: null } },
  },
} as Meta<typeof SecondaryFormFooter>;

type Story = StoryObj<typeof SecondaryFormFooter>;

export const Simple: Story = {
  args: {
    isDirty: true,
    submitButtonLabel: 'Submit',
  },
  parameters: {
    docs: {
      source: {
        code: `
<SecondaryFormFooter
  isDirty={true}
  submitButtonLabel="Submit"
/>
        `,
      },
    },
  },
};

export const WithDeleteButton: Story = {
  args: {
    isDirty: false,
    submitButtonLabel: 'Submit',
    withDelete: true,
    onClickDelete: () => alert('Delete clicked'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<SecondaryFormFooter
  isDirty={false}
  submitButtonLabel="Submit"
  withDelete
  onClickDelete={() => alert('Delete clicked')}
/>
        `,
      },
    },
  },
};

export const WithCustomComponent: Story = {
  args: {
    isDirty: false,
    submitButtonLabel: 'Submit',
    CustomComponent: <PrimaryButton label="Custom Button" variant="secondary" />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<SecondaryFormFooter
  isDirty={false}
  submitButtonLabel="Submit"
  CustomComponent={<PrimaryButton label="Custom Button" variant="secondary" />}
/>
        `,
      },
    },
  },
};

export const LoadingState: Story = {
  args: {
    isDirty: true,
    submitButtonLabel: 'Submit',
    isLoading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<SecondaryFormFooter
  isDirty={true}
  submitButtonLabel="Submit"
  isLoading
/>
        `,
      },
    },
  },
};

export const FullCustomization: Story = {
  args: {
    isDirty: true,
    submitButtonLabel: 'Save Changes',
    withDelete: true,
    isLoading: false,
    CustomComponent: <PrimaryButton label="Extra Action" variant="secondary" />,
    onClickDelete: () => alert('Delete clicked'),
    onReset: () => alert('Reset clicked'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<SecondaryFormFooter
  isDirty={true}
  submitButtonLabel="Save Changes"
  withDelete
  isLoading={false}
  CustomComponent={<PrimaryButton label="Extra Action" variant="secondary" />}
  onClickDelete={() => alert('Delete clicked')}
  onReset={() => alert('Reset clicked')}
/>
        `,
      },
    },
  },
};
