import { useTheme } from '@emotion/react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { IconEyeSvg } from '@/shared/assets';
import { PrimarySelectableValue } from '@/shared/types/values.types';
import { Avatar } from '@/shared/ui/data-display';

import { AutocompleteCascader } from './AutocompleteCascader';

export default {
  title: 'shared/inputs/Autocomplete.Cascader',
  component: AutocompleteCascader,
  tags: ['autodocs'],
  argTypes: {
    options: { control: { type: null } },
    name: { control: { type: null } },
    control: { control: { type: null } },
    disabled: { control: { type: 'boolean' } },
    placeholder: { control: { type: 'text' } },
    AdditionalElement: { control: { type: null } },
    CustomPopupIcon: { control: { type: null } },
    popupIconColor: { control: { type: 'color' } },
    optionCheckbox: { control: { type: 'boolean' } },
    disablePopupIconRotation: { control: { type: 'boolean' } },
  },
} as Meta<typeof AutocompleteCascader>;

type Story = StoryObj<typeof AutocompleteCascader>;
type StoryTemplate = StoryFn<typeof AutocompleteCascader>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return (
    <div style={{ width: '40%' }}>
      <AutocompleteCascader control={control} name="default" {...args} />
    </div>
  );
};

const simpleOptions = [
  {
    label: 'Option 1',
    value: 'Option 1',
    children: [
      { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
      { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
      { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
    ],
  },
  {
    label: 'Option 2',
    value: 'Option 2',
    children: [
      { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
      { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
      { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
      { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
      { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
      { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
    ],
  },
];

const additionalOptions = [
  {
    label: 'Option 1',
    value: 'Option 1',
    children: [
      {
        label: 'Option 1.1',
        value: 'Option 1.1',
        additional: 'https://picsum.photos/200',
        parents: ['Option 1'],
      },
      {
        label: 'Option 1.2',
        value: 'Option 1.2',
        additional: 'https://picsum.photos/200',
        parents: ['Option 1'],
      },
      {
        label: 'Option 1.3',
        value: 'Option 1.3',
        additional: 'https://picsum.photos/200',
        parents: ['Option 1'],
      },
    ],
  },
  {
    label: 'Option 2',
    value: 'Option 2',
    children: [
      {
        label: 'Option 2.1',
        value: 'Option 2.1',
        additional: 'https://picsum.photos/200',
        parents: ['Option 2'],
      },
      {
        label: 'Option 2.2',
        value: 'Option 2.2',
        additional: 'https://picsum.photos/200',
        parents: ['Option 2'],
      },
      {
        label: 'Option 2.3',
        value: 'Option 2.3',
        additional: 'https://picsum.photos/200',
        parents: ['Option 2'],
      },
      {
        label: 'Option 2.4',
        value: 'Option 2.4',
        additional: 'https://picsum.photos/200',
        parents: ['Option 2'],
      },
      {
        label: 'Option 2.5',
        value: 'Option 2.5',
        additional: 'https://picsum.photos/200',
        parents: ['Option 2'],
      },
      {
        label: 'Option 2.6',
        value: 'Option 2.6',
        additional: 'https://picsum.photos/200',
        parents: ['Option 2'],
      },
    ],
  },
];

export const Simple: Story = {
  render: Template,
  args: {
    options: simpleOptions,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
        { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
        { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
          { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
          { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
          { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
          { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
          { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
      ],
    },
  ]}
/>
        `,
      },
    },
  },
};

export const Placeholder: Story = {
  render: Template,
  args: {
    options: simpleOptions,
    placeholder: 'Placeholder',
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
        { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
        { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
        { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
        { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
        { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
        { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
        { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
      ],
    },
  ]}
  placeholder="Placeholder"
/>
        `,
      },
    },
  },
};

interface AvatarBadgeProps {
  type?: 'option' | 'input' | 'chip';
  option: PrimarySelectableValue;
}

const AvatarBadge: React.FC<AvatarBadgeProps> = ({ option, type = 'option' }) => {
  const theme = useTheme();

  return (
    <Avatar
      size={type === 'input' ? '32px' : '20px'}
      fontSize={type === 'input' ? '13px' : '10px'}
      fontWeight={type === 'input' ? '400' : '600'}
      name={option.label}
      image={option.additional}
      backgroundColor={theme.appColors.secondary_03}
      textColor={theme.appColors.secondary_04}
    />
  );
};

export const AdditionalElement: Story = {
  render: Template,
  args: {
    options: additionalOptions,
    AdditionalElement: AvatarBadge,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        {
          label: 'Option 1.1',
          value: 'Option 1.1',
          additional: 'https://picsum.photos/200',
          parents: ['Option 1'],
        },
        {
          label: 'Option 1.2',
          value: 'Option 1.2',
          additional: 'https://picsum.photos/200',
          parents: ['Option 1'],
        },
        {
          label: 'Option 1.3',
          value: 'Option 1.3',
          additional: 'https://picsum.photos/200',
          parents: ['Option 1'],
        },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        {
          label: 'Option 2.1',
          value: 'Option 2.1',
          additional: 'https://picsum.photos/200',
          parents: ['Option 2'],
        },
        {
          label: 'Option 2.2',
          value: 'Option 2.2',
          additional: 'https://picsum.photos/200',
          parents: ['Option 2'],
        },
        {
          label: 'Option 2.3',
          value: 'Option 2.3',
          additional: 'https://picsum.photos/200',
          parents: ['Option 2'],
        },
        {
          label: 'Option 2.4',
          value: 'Option 2.4',
          additional: 'https://picsum.photos/200',
          parents: ['Option 2'],
        },
        {
          label: 'Option 2.5',
          value: 'Option 2.5',
          additional: 'https://picsum.photos/200',
          parents: ['Option 2'],
        },
        {
          label: 'Option 2.6',
          value: 'Option 2.6',
          additional: 'https://picsum.photos/200',
          parents: ['Option 2'],
        },
      ],
    },
  ]}
  AdditionalElement={AvatarBadge}
/>
        `,
      },
    },
  },
};

export const CustomPopupIcon: Story = {
  render: Template,
  args: {
    options: simpleOptions,
    CustomPopupIcon: IconEyeSvg,
    popupIconColor: '#F4252D',
    disablePopupIconRotation: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
        { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
        { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
        { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
        { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
        { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
        { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
        { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
      ],
    },
  ]}
  CustomPopupIcon={IconEyeOffSvg}
  popupIconColor="#F4252D"
  disablePopupIconRotation
/>
        `,
      },
    },
  },
};

export const OptionCheckbox: Story = {
  render: Template,
  args: {
    options: simpleOptions,
    optionCheckbox: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
        { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
        { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
        { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
        { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
        { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
        { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
        { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
      ],
    },
  ]}
  optionCheckbox
/>
        `,
      },
    },
  },
};

const ErrorTemplate: StoryTemplate = (args) => {
  const { control, setError } = useForm();

  useEffect(() => {
    setError('default', { message: 'Some error' });
  }, [setError]);

  return (
    <div style={{ width: '40%' }}>
      <AutocompleteCascader control={control} name="default" {...args} />
    </div>
  );
};

export const Error: Story = {
  render: ErrorTemplate,
  args: {
    options: simpleOptions,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
        { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
        { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
        { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
        { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
        { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
        { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
        { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
      ],
    },
  ]}
/>
        `,
      },
    },
  },
};

export const LoadingOptions: Story = {
  render: Template,
  args: {
    options: undefined,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={undefined}
/>
        `,
      },
    },
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    options: simpleOptions,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteCascader
  control={control}
  name="default"
  options={[
    {
      label: 'Option 1',
      value: 'Option 1',
      children: [
        { label: 'Option 1.1', value: 'Option 1.1', parents: ['Option 1'] },
        { label: 'Option 1.2', value: 'Option 1.2', parents: ['Option 1'] },
        { label: 'Option 1.3', value: 'Option 1.3', parents: ['Option 1'] },
      ],
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      children: [
        { label: 'Option 2.1', value: 'Option 2.1', parents: ['Option 2'] },
        { label: 'Option 2.2', value: 'Option 2.2', parents: ['Option 2'] },
        { label: 'Option 2.3', value: 'Option 2.3', parents: ['Option 2'] },
        { label: 'Option 2.4', value: 'Option 2.4', parents: ['Option 2'] },
        { label: 'Option 2.5', value: 'Option 2.5', parents: ['Option 2'] },
        { label: 'Option 2.6', value: 'Option 2.6', parents: ['Option 2'] },
      ],
    },
  ]}
  disabled
/>
        `,
      },
    },
  },
};
