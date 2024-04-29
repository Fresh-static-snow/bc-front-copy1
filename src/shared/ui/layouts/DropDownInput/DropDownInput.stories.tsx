import { Meta, StoryFn, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { useState } from 'react';

import { IconClockSvg } from '@/shared/assets';

import { DatePicker } from '../../inputs';
import { DropDownInput } from './DropDownInput';

dayjs.extend(isSameOrBefore);

export default {
  title: 'elements/DropDownInput',
  component: DropDownInput,
  tags: ['autodocs'],
  argTypes: {
    InputIcon: {
      control: {
        type: null,
      },
    },
    InputComponent: {
      control: {
        type: null,
      },
    },
    ContentComponent: {
      control: {
        type: null,
      },
    },
    anchorOrigin: {
      control: {
        type: null,
      },
    },
    transformOrigin: {
      control: {
        type: null,
      },
    },
    error: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof DropDownInput>;

type Story = StoryObj<typeof DropDownInput>;
type StoryTemplate = StoryFn<typeof DropDownInput>;

const Template: StoryTemplate = (args) => {
  const [activeTime, setActiveTime] = useState<[string, string]>(null);

  return (
    <DropDownInput
      InputIcon={<IconClockSvg />}
      InputComponent={
        <div style={{ width: '100px ' }}>
          {activeTime?.[0]}
          {activeTime?.[1] && ` — ${activeTime?.[1]}`}
        </div>
      }
      ContentComponent={
        <DatePicker.Time activeRange={activeTime} onChangeActiveTime={setActiveTime} />
      }
      {...args}
    />
  );
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<DropDownInput
  InputIcon={<IconClockSvg />}
  InputComponent={
    <div style={{ width: '100px ' }}>
      {activeTime?.[0]}
      {activeTime?.[1] && \` — \${activeTime?.[1]}\`}
    </div>
  }
  ContentComponent={
    <DatePickers.TimePicker activeRange={activeTime} onChangeActiveTime={setActiveTime} />
  }
/>
        `,
      },
    },
  },
};

export const Origin: Story = {
  render: Template,
  args: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'right',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<DropDownInput
  InputIcon={<IconClockSvg />}
  InputComponent={
    <div style={{ width: '100px ' }}>
      {activeTime?.[0]}
      {activeTime?.[1] && \` — \${activeTime?.[1]}\`}
    </div>
  }
  ContentComponent={
    <DatePickers.TimePicker activeRange={activeTime} onChangeActiveTime={setActiveTime} />
  }
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
/>
        `,
      },
    },
  },
};
