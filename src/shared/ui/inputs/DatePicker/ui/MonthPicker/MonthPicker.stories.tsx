import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { MonthPicker } from './MonthPicker';

export default {
  title: 'shared/inputs/DatePicker.Month',
  component: MonthPicker,
  tags: ['autodocs'],
  argTypes: {
    activeDate: { control: { type: null } },
    onChangeActiveDate: { control: { type: null } },
  },
} as Meta<typeof MonthPicker>;

type Story = StoryObj<typeof MonthPicker>;
type StoryTemplate = StoryFn<typeof MonthPicker>;

const Template: StoryTemplate = () => {
  const [activeDate, onChangeActiveDate] = useState(dayjs().startOf('month'));

  return <MonthPicker activeDate={activeDate} onChangeActiveDate={onChangeActiveDate} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<MonthPicker
  activeDate={activeDate}
  onChangeActiveDate={onChangeActiveDate}
/>
        `,
      },
    },
  },
};
