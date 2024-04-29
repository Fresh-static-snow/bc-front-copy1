import { useTheme } from '@emotion/react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { IconEyeSvg } from '@/shared/assets';
import { PrimarySelectableValue } from '@/shared/types/values.types';
import { Avatar } from '@/shared/ui/data-display';

import { AutocompleteMultiple } from './AutocompleteMultiple';

export default {
  title: 'modules/Autocomplete/AutocompleteMultiple',
  component: AutocompleteMultiple,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: { type: null },
    },
    name: {
      control: { type: null },
    },
    control: {
      control: { type: null },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    AdditionalElement: {
      control: { type: null },
    },
    CustomPopupIcon: {
      control: { type: null },
    },
    popupIconColor: {
      control: { type: 'color' },
    },
    optionCheckbox: {
      control: { type: 'boolean' },
    },
    disablePopupIconRotation: {
      control: { type: 'boolean' },
    },
    withOptionCreation: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof AutocompleteMultiple>;

type Story = StoryObj<typeof AutocompleteMultiple>;
type StoryTemplate = StoryFn<typeof AutocompleteMultiple>;

const Template: StoryTemplate = (args) => {
  const { control } = useForm();

  return (
    <div style={{ width: '40%' }}>
      <AutocompleteMultiple control={control} name="default" {...args} />
    </div>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
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
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
    placeholder: 'Placeholder',
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ]}
  placeholder="Placeholder"
/>
        `,
      },
    },
  },
};

type AvatarBadgeProps = {
  option: PrimarySelectableValue;
};

const AvatarBadge: React.FC<AvatarBadgeProps> = ({ option }) => {
  const theme = useTheme();

  return (
    <Avatar
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
    options: [
      { label: 'Option 1', value: 'Option 1', additional: 'https://picsum.photos/200' },
      { label: 'Option 2', value: 'Option 2', additional: 'https://picsum.photos/200' },
      { label: 'Option 3', value: 'Option 3', additional: 'https://picsum.photos/200' },
      { label: 'Option 4', value: 'Option 4', additional: 'https://picsum.photos/200' },
    ],
    AdditionalElement: AvatarBadge,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1', additional: 'https://picsum.photos/200' },
    { label: 'Option 2', value: 'Option 2', additional: 'https://picsum.photos/200' },
    { label: 'Option 3', value: 'Option 3', additional: 'https://picsum.photos/200' },
    { label: 'Option 4', value: 'Option 4', additional: 'https://picsum.photos/200' },
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
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
    CustomPopupIcon: IconEyeSvg,
    popupIconColor: '#F4252D',
    disablePopupIconRotation: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
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
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
    optionCheckbox: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
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
      <AutocompleteMultiple control={control} name="default" {...args} />
    </div>
  );
};

export const Error: Story = {
  render: ErrorTemplate,
  args: {
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
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
<AutocompleteMultiple
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
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ]}
  disabled
/>
        `,
      },
    },
  },
};

export const WithOptionCreation: Story = {
  render: Template,
  args: {
    options: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' },
      { label: 'Option 4', value: 'Option 4' },
    ],
    withOptionCreation: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<AutocompleteMultiple
  control={control}
  name="default"
  options={[
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
    { label: 'Option 4', value: 'Option 4' },
  ]}
  withOptionCreation
/>
        `,
      },
    },
  },
};
