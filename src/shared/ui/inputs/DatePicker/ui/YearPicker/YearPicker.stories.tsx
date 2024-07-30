import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { YearPicker } from './YearPicker';

export default {
  title: 'shared/inputs/DatePicker.Year',
  component: YearPicker,
  tags: ['autodocs'],
  argTypes: {
    activeDate: { control: { type: null } },
    onChangeActiveDate: { control: { type: null } },
  },
} as Meta<typeof YearPicker>;

type Story = StoryObj<typeof YearPicker>;
type StoryTemplate = StoryFn<typeof YearPicker>;

const Template: StoryTemplate = () => {
  const [activeDate, onChangeActiveDate] = useState(dayjs().startOf('year'));

  return <YearPicker activeDate={activeDate} onChangeActiveDate={onChangeActiveDate} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<YearPicker
  activeDate={activeDate}
  onChangeActiveDate={onChangeActiveDate}
/>
        `,
      },
    },
  },
};
