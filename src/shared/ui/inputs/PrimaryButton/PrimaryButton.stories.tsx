import { Meta, StoryObj } from '@storybook/react';

import { IconAlertSvg, IconCheckSvg } from '@/shared/assets';
import { Counter } from '@/shared/ui/data-display';

import { PrimaryButton } from './PrimaryButton';

export default {
  title: 'ui/PrimaryButton',
  component: PrimaryButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      control: { type: null },
    },
    variant: {
      control: {
        type: 'select',
        options: ['base', 'primary', 'secondary', 'mixed', 'outlined', 'custom'],
      },
      table: { defaultValue: { summary: "'base'" } },
    },
    AdditionalComponent: {
      control: { type: null },
    },
    IconComponent: {
      control: { type: null },
    },
    customStyles: {
      control: { type: null },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    iconHeight: {
      control: { type: 'text' },
    },
    iconWidth: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    padding: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
    contentPosition: {
      control: {
        type: 'select',
        options: ['left', 'right', 'center', 'between'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'reset', 'submit'],
      },
    },
  },
} as Meta<typeof PrimaryButton>;

type Story = StoryObj<typeof PrimaryButton>;

export const Simple: Story = {
  args: {
    label: 'Some label',
  },
};

export const Icon: Story = {
  args: {
    IconComponent: IconAlertSvg,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  IconComponent={IconAlertSvg}
/>
        `,
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Some label',
    IconComponent: IconAlertSvg,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  label="Some label"
  IconComponent={IconAlertSvg}
/>
        `,
      },
    },
  },
};

export const WithAdditional: Story = {
  args: {
    label: 'Some label',
    IconComponent: IconAlertSvg,
    AdditionalComponent: <Counter count={5} />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  label="Some label"
  IconComponent={IconAlertSvg}
  AdditionalComponent={<Counter count={5} />}
/>
        `,
      },
    },
  },
};

export const Variant: Story = {
  args: {
    variant: 'primary',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    AdditionalComponent: <IconCheckSvg />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="primary"
  label="Some label"
  IconComponent={IconAlertSvg}
  AdditionalComponent={<IconCheckSvg />}
/>
        `,
      },
    },
  },
};

export const CustomVariant: Story = {
  args: {
    variant: 'custom',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    AdditionalComponent: <IconCheckSvg />,
    customStyles: {
      backgroundColor: '#E0E0E0',
      backgroundColorHovered: '#CDCDCE',
      backgroundColorActive: '#A6A6A9',
      color: '#B4232C',
      iconColor: '#ff8000',
      borderColor: '#73212B',
    },
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="custom"
  label="Some label"
  IconComponent={IconAlertSvg}
  AdditionalComponent={<IconCheckSvg />}
  customStyles={{
    backgroundColor: '#E0E0E0',
    backgroundColorHovered: '#CDCDCE',
    backgroundColorActive: '#A6A6A9',
    color: '#B4232C',
    iconColor: '#ff8000',
    borderColor: '#73212B',
  }}
/>
        `,
      },
    },
  },
};

export const Padding: Story = {
  args: {
    variant: 'primary',
    padding: '20px',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    AdditionalComponent: <IconCheckSvg />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="primary"
  padding="20px"
  label="Some label"
  IconComponent={IconAlertSvg}
  AdditionalComponent={<IconCheckSvg />}
/>
        `,
      },
    },
  },
};

export const Width: Story = {
  args: {
    variant: 'primary',
    width: '100%',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    AdditionalComponent: <IconCheckSvg />,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="primary"
  width="100%"
  label="Some label"
  IconComponent={IconAlertSvg}
  AdditionalComponent={<IconCheckSvg />}
/>
        `,
      },
    },
  },
};

export const WidthWithPosition: Story = {
  args: {
    variant: 'primary',
    width: '100%',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    AdditionalComponent: <IconCheckSvg />,
    contentPosition: 'between',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="primary"
  width="100%"
  label="Some label"
  IconComponent={IconAlertSvg}
  AdditionalComponent={<IconCheckSvg />}
  contentPosition="between"
/>
        `,
      },
    },
  },
};

export const IconSize: Story = {
  args: {
    variant: 'primary',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    iconWidth: '30px',
    iconHeight: '30px',
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="primary"
  label="Some label"
  IconComponent={IconAlertSvg}
  iconWidth="30px"
  iconHeight="30px"
/>
        `,
      },
    },
  },
};

export const Loading: Story = {
  args: {
    variant: 'primary',
    label: 'Some label',
    IconComponent: IconAlertSvg,
    iconWidth: '30px',
    iconHeight: '30px',
    isLoading: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<PrimaryButton
  variant="primary"
  label="Some label"
  IconComponent={IconAlertSvg}
  iconWidth="30px"
  iconHeight="30px"
  isLoading
/>
        `,
      },
    },
  },
};
