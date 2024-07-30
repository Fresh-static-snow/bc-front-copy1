import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { CopyBlock } from './CopyBlock';

export default {
  title: 'shared/forms/CopyBlock',
  component: CopyBlock,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    copyButtonDisabled: { control: { type: 'boolean' } },
    pasteButtonDisabled: { control: { type: 'boolean' } },
    onCopy: { control: { type: null } },
    onPaste: { control: { type: null } },
  },
} as Meta<typeof CopyBlock>;

type Story = StoryObj<typeof CopyBlock>;
type StoryTemplate = StoryFn<typeof CopyBlock>;

const Template: StoryTemplate = (args) => {
  const { children } = args;

  const onCopy = () => {
    alert('Content copied!');
  };

  const onPaste = () => {
    alert('Content pasted!');
  };

  return (
    <CopyBlock onCopy={onCopy} onPaste={onPaste} {...args}>
      {children}
    </CopyBlock>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    title: 'Copy and Paste Block',
    children: 'This is some content to copy and paste.',
  },
  parameters: {
    docs: {
      source: {
        code: `
<CopyBlock
  title="Copy and Paste Block"
  onCopy={onCopy}
  onPaste={onPaste}
>
  This is some content to copy and paste.
</CopyBlock>
        `,
      },
    },
  },
};

export const DisabledButtons: Story = {
  render: Template,
  args: {
    title: 'Copy and Paste Block',
    children: 'This is some content to copy and paste.',
    copyButtonDisabled: true,
    pasteButtonDisabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<CopyBlock
  title="Copy and Paste Block"
  onCopy={onCopy}
  onPaste={onPaste}
  copyButtonDisabled
  pasteButtonDisabled
>
  This is some content to copy and paste.
</CopyBlock>
        `,
      },
    },
  },
};
