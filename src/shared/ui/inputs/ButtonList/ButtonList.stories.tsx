import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SelectableValue } from '@/shared/types/values.types';

import { ButtonList } from './ButtonList';

export default {
  title: 'elements/ButtonList',
  component: ButtonList,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: {
        type: 'text',
      },
    },
    buttonList: {
      control: {
        type: null,
      },
    },
    activeButton: {
      control: {
        type: null,
      },
    },
    onChangeActiveButton: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof ButtonList>;

type Story = StoryObj<typeof ButtonList>;
type StoryTemplate = StoryFn<typeof ButtonList>;

const Template: StoryTemplate = (args) => {
  const [activeButton, setActiveButton] = useState<SelectableValue>({
    label: 'Button 1',
    value: '1',
  });

  return (
    <ButtonList activeButton={activeButton} onChangeActiveButton={setActiveButton} {...args} />
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    buttonList: [
      { label: 'Button 1', value: '1' },
      { label: 'Button 2', value: '2' },
      { label: 'Button 3', value: '3' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<ButtonList
  activeButton={activeButton}
  onChangeActiveButton={setActiveButton}
  buttonList={[
    { label: 'Button 1', value: '1' },
    { label: 'Button 2', value: '2' },
    { label: 'Button 3', value: '3' },
  ]}
/>
        `,
      },
    },
  },
};

export const Width: Story = {
  render: Template,
  args: {
    width: '300px',
    buttonList: [
      { label: 'Button 1', value: '1' },
      { label: 'Button 2', value: '2' },
      { label: 'Button 3', value: '3' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<ButtonList
  activeButton={activeButton}
  onChangeActiveButton={setActiveButton}
  width="300px"
  buttonList={[
    { label: 'Button 1', value: '1' },
    { label: 'Button 2', value: '2' },
    { label: 'Button 3', value: '3' },
  ]}
/>
        `,
      },
    },
  },
};
