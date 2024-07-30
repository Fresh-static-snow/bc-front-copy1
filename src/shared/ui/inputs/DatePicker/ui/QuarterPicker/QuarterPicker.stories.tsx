import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import quarterOfYear from 'dayjs/plugin/quarterOfYear';
import { useState } from 'react';

import { QuarterPicker } from './QuarterPicker';

dayjs.extend(isBetween);
dayjs.extend(quarterOfYear);

export default {
  title: 'shared/inputs/DatePicker.Quarter',
  component: QuarterPicker,
  tags: ['autodocs'],
  argTypes: {
    activeDate: { control: { type: null } },
    onChangeActiveDate: { control: { type: null } },
  },
} as Meta<typeof QuarterPicker>;

type Story = StoryObj<typeof QuarterPicker>;
type StoryTemplate = StoryFn<typeof QuarterPicker>;

const Template: StoryTemplate = () => {
  const [activeDate, onChangeActiveDate] = useState<[Dayjs, Dayjs]>([
    dayjs().startOf('quarter'),
    dayjs().endOf('quarter'),
  ]);

  return <QuarterPicker activeDate={activeDate} onChangeActiveDate={onChangeActiveDate} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<QuarterPicker
  activeDate={activeDate}
  onChangeActiveDate={onChangeActiveDate}
/>
        `,
      },
    },
  },
};
