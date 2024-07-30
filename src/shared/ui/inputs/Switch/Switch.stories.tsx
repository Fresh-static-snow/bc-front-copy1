import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import { Switch } from './Switch';

export default {
  title: 'shared/inputs/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: { type: 'boolean' } },
    onChange: { control: { type: null } },
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
  },
} as Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;
type StoryTemplate = StoryFn<typeof Switch>;

const Template: StoryTemplate = (args) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <Switch
      checked={isChecked}
      onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) => setChecked(checked)}
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
<Switch
  checked={isChecked}
  onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) => setChecked(checked)}
/>
        `,
      },
    },
  },
};

export const Label: Story = {
  render: Template,
  args: {
    label: 'Some label',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Switch
  checked={isChecked}
  onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) => setChecked(checked)}
  label="Some label"
/>
        `,
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    checked: true,
    label: 'Some label',
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<Switch
  checked={isChecked}
  onChange={(event: ChangeEvent<HTMLInputElement>, checked: boolean) => setChecked(checked)}
  label="Some label"
  disabled
/>
        `,
      },
    },
  },
};
