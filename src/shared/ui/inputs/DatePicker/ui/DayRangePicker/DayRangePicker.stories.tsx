import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useState } from 'react';

import { DayRangePicker } from './DayRangePicker';

dayjs.extend(isBetween);

export default {
  title: 'modules/DatePickers/DayRangePicker',
  component: DayRangePicker,
  tags: ['autodocs'],
  argTypes: {
    activeDate: {
      control: {
        type: null,
      },
    },
    onChangeActiveDate: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof DayRangePicker>;

type Story = StoryObj<typeof DayRangePicker>;
type StoryTemplate = StoryFn<typeof DayRangePicker>;

const Template: StoryTemplate = () => {
  const [activeDate, onChangeActiveDate] = useState<[Dayjs, Dayjs]>([dayjs(), undefined]);

  return <DayRangePicker activeDate={activeDate} onChangeActiveDate={onChangeActiveDate} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<DayRangePicker
  activeDate={activeDate}
  onChangeActiveDate={onChangeActiveDate}
/>
        `,
      },
    },
  },
};
