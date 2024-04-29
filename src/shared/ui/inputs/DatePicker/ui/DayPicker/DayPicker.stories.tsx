import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import { useState } from 'react';

import { DayPicker } from './DayPicker';

export default {
  title: 'modules/DatePickers/DayPicker',
  component: DayPicker,
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
} as Meta<typeof DayPicker>;

type Story = StoryObj<typeof DayPicker>;
type StoryTemplate = StoryFn<typeof DayPicker>;

const Template: StoryTemplate = () => {
  const [activeDate, onChangeActiveDate] = useState(dayjs());

  return <DayPicker activeDate={activeDate} onChangeActiveDate={onChangeActiveDate} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<DayPicker
  activeDate={activeDate}
  onChangeActiveDate={onChangeActiveDate}
/>
        `,
      },
    },
  },
};
