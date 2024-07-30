import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { PrimaryFormFooter } from './PrimaryFormFooter';

export default {
  title: 'shared/forms/PrimaryFormFooter',
  component: PrimaryFormFooter,
  tags: ['autodocs'],
  argTypes: {
    control: { control: { type: null } },
    disabledFields: { control: { type: null } },
    hiddenFields: { control: { type: null } },
    anotherOneCheckbox: { control: { type: 'boolean' } },
    visibleSwitch: { control: { type: 'boolean' } },
    withDelete: { control: { type: 'boolean' } },
    checkBoxName: { control: { type: 'text' } },
    switchName: { control: { type: 'text' } },
    submitChecked: { control: { type: 'boolean' } },
    submitButtonLabel: { control: { type: 'text' } },
    isLoading: { control: { type: 'boolean' } },
    onClose: { control: { type: null } },
    onClickDelete: { control: { type: null } },
  },
} as Meta<typeof PrimaryFormFooter>;

type Story = StoryObj<typeof PrimaryFormFooter>;
type StoryTemplate = StoryFn<typeof PrimaryFormFooter>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return <PrimaryFormFooter control={control} {...args} />;
};

export const Simple: Story = {
  render: Template,
  args: {
    submitChecked: false,
    submitButtonLabel: 'Submit',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryFormFooter
  control={control}
  submitChecked={false}
  submitButtonLabel="Submit"
/>
        `,
      },
    },
  },
};

export const WithDeleteButton: Story = {
  render: Template,
  args: {
    submitChecked: false,
    submitButtonLabel: 'Submit',
    withDelete: true,
    onClickDelete: () => alert('Delete clicked'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryFormFooter
  control={control}
  submitChecked={false}
  submitButtonLabel="Submit"
  withDelete
  onClickDelete={() => alert('Delete clicked')}
/>
        `,
      },
    },
  },
};

export const WithCheckboxAndSwitch: Story = {
  render: Template,
  args: {
    submitChecked: false,
    submitButtonLabel: 'Submit',
    anotherOneCheckbox: true,
    visibleSwitch: true,
    checkBoxName: 'anotherOne',
    switchName: 'visibleSwitch',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryFormFooter
  control={control}
  submitChecked={false}
  submitButtonLabel="Submit"
  anotherOneCheckbox
  visibleSwitch
  checkBoxName="anotherOne"
  switchName="visibleSwitch"
/>
        `,
      },
    },
  },
};

export const LoadingState: Story = {
  render: Template,
  args: {
    submitChecked: false,
    submitButtonLabel: 'Submit',
    isLoading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryFormFooter
  control={control}
  submitChecked={false}
  submitButtonLabel="Submit"
  isLoading
/>
        `,
      },
    },
  },
};

export const FullCustomization: Story = {
  render: Template,
  args: {
    submitChecked: true,
    submitButtonLabel: 'Submit',
    anotherOneCheckbox: true,
    visibleSwitch: true,
    checkBoxName: 'anotherOne',
    switchName: 'visibleSwitch',
    withDelete: true,
    isLoading: false,
    onClose: () => alert('Close clicked'),
    onClickDelete: () => alert('Delete clicked'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryFormFooter
  control={control}
  submitChecked
  submitButtonLabel="Submit"
  anotherOneCheckbox
  visibleSwitch
  checkBoxName="anotherOne"
  switchName="visibleSwitch"
  withDelete
  isLoading={false}
  onClose={() => alert('Close clicked')}
  onClickDelete={() => alert('Delete clicked')}
/>
        `,
      },
    },
  },
};
