import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { useState } from 'react';

import { TimePicker } from './TimePicker';

dayjs.extend(isSameOrBefore);

export default {
  title: 'shared/inputs/DatePicker.Time',
  component: TimePicker,
  tags: ['autodocs'],
  argTypes: {
    activeRange: { control: { type: null } },
    onChangeActiveTime: { control: { type: null } },
  },
} as Meta<typeof TimePicker>;

type Story = StoryObj<typeof TimePicker>;
type StoryTemplate = StoryFn<typeof TimePicker>;

const Template: StoryTemplate = () => {
  const [activeRange, onChangeActiveTime] = useState<[string, string]>(['00:00', undefined]);

  return <TimePicker activeRange={activeRange} onChangeActiveTime={onChangeActiveTime} />;
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<TimePicker
  activeRange={activeRange}
  onChangeActiveTime={onChangeActiveTime}
/>
        `,
      },
    },
  },
};
