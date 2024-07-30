import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useCallback, useState } from 'react';

import { IconSliderSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs';
import { DropDownChevron } from '@/shared/ui/misc';

import { DropDownButton } from './DropDownButton';

export default {
  title: 'shared/layouts/DropDownButton',
  component: DropDownButton,
  tags: ['autodocs'],
  argTypes: {
    anchorEl: { control: { type: null } },
    ButtonComponent: { control: { type: null } },
    ContentComponent: { control: { type: null } },
    isOpen: { control: { type: null } },
    onClose: { control: { type: null } },
    anchorOrigin: { control: { type: null } },
    transformOrigin: { control: { type: null } },
  },
} as Meta<typeof DropDownButton>;

type Story = StoryObj<typeof DropDownButton>;
type StoryTemplate = StoryFn<typeof DropDownButton>;

const Template: StoryTemplate = (args) => {
  const [anchor, setAnchor] = useState<HTMLButtonElement>(null);

  const onChangeAnchor = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  }, []);

  const onClearAnchor = useCallback(() => {
    setAnchor(null);
  }, []);

  return (
    <DropDownButton
      ButtonComponent={
        <PrimaryButton
          label="Filter"
          variant="mixed"
          IconComponent={IconSliderSvg}
          AdditionalComponent={<DropDownChevron active={!!anchor} />}
          onClick={onChangeAnchor}
        />
      }
      ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
      isOpen={!!anchor}
      anchorEl={anchor}
      onClose={onClearAnchor}
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
<DropDownButton
  ButtonComponent={
    <PrimaryButton
      label="Filter"
      variant="mixed"
      IconComponent={IconSliderSvg}
      AdditionalComponent={<DropDownChevron active={!!anchor} />}
      onClick={onChangeAnchor}
    />
  }
  ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
  isOpen={!!anchor}
  anchorEl={anchor}
  onClose={onClearAnchor}
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
<DropDownButton
  ButtonComponent={
    <PrimaryButton
      label="Filter"
      variant="mixed"
      IconComponent={IconSliderSvg}
      AdditionalComponent={<DropDownChevron active={!!anchor} />}
      onClick={onChangeAnchor}
    />
  }
  ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
  isOpen={!!anchor}
  anchorEl={anchor}
  onClose={onClearAnchor}
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
