import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { FieldErrorMessage } from './FieldErrorMessage';

export default {
  title: 'ui/FieldErrorMessage',
  component: FieldErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    errorMessage: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof FieldErrorMessage>;

type Story = StoryObj<typeof FieldErrorMessage>;
type StoryTemplate = StoryFn<typeof FieldErrorMessage>;

const Template: StoryTemplate = (args) => (
  <div style={{ position: 'relative' }}>
    <FieldErrorMessage {...args} />
  </div>
);

export const Simple: Story = {
  render: Template,
  args: {
    errorMessage: 'Some error',
  },
};
