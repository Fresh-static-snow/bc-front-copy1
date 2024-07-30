import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SelectableValue } from '@/shared/types/values.types';

import { SortButton } from './SortButton';

export default {
  title: 'shared/inputs/SortButton',
  component: SortButton,
  tags: ['autodocs'],
  argTypes: {
    sortingValue: { control: { type: null } },
    setSortingValue: { control: { type: null } },
    sortingButtons: { control: { type: null } },
  },
} as Meta<typeof SortButton>;

type Story = StoryObj<typeof SortButton>;
type StoryTemplate = StoryFn<typeof SortButton>;

const Template: StoryTemplate = (args) => {
  const { sortingButtons } = args;
  const [sortingValue, setSortingValue] = useState<SelectableValue>(sortingButtons[0]);

  return <SortButton sortingValue={sortingValue} setSortingValue={setSortingValue} {...args} />;
};

export const Simple: Story = {
  render: Template,
  args: {
    sortingButtons: [
      { value: 'date', label: 'Date' },
      { value: 'name', label: 'Name' },
      { value: 'priority', label: 'Priority' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<SortButton
  sortingValue={{ value: 'name', label: 'Name' }}
  setSortingValue={setSortingValue}
  sortingButtons={[
    { value: 'date', label: 'Date' },
    { value: 'name', label: 'Name' },
    { value: 'priority', label: 'Priority' },
  ]}
/>
        `,
      },
    },
  },
};
