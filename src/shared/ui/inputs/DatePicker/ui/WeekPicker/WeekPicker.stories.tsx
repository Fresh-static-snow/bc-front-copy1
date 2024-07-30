import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';

import { WeekPicker } from './WeekPicker';

export default {
  title: 'shared/inputs/DatePicker.Week',
  component: WeekPicker,
  tags: ['autodocs'],
  argTypes: {
    activeDate: { control: { type: null } },
    onChangeActiveDate: { control: { type: null } },
  },
} as Meta<typeof WeekPicker>;

type Story = StoryObj<typeof WeekPicker>;
type StoryTemplate = StoryFn<typeof WeekPicker>;

const Template: StoryTemplate = () => {
  const [activeDate, onChangeActiveDate] = useState<[Dayjs, Dayjs]>([
    dayjs().startOf('week'),
    dayjs().endOf('week'),
  ]);

  return <WeekPicker activeDate={activeDate} onChangeActiveDate={onChangeActiveDate} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<WeekPicker
  activeDate={activeDate}
  onChangeActiveDate={onChangeActiveDate}
/>
        `,
      },
    },
  },
};
