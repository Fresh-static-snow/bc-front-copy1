import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { InfinityScrollbar } from './InfinityScrollbar';

export default {
  title: 'shared/layouts/InfinityScrollbar',
  component: InfinityScrollbar,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: null } },
    active: { control: { type: 'boolean' } },
    noScrollX: { control: { type: 'boolean' } },
    noScrollY: { control: { type: 'boolean' } },
    disableTracksWidthCompensation: { control: { type: 'boolean' } },
    canFetchNextPage: { control: { type: 'boolean' } },
    fetchNextPage: { control: { type: null } },
  },
} as Meta<typeof InfinityScrollbar>;

type Story = StoryObj<typeof InfinityScrollbar>;
type StoryTemplate = StoryFn<typeof InfinityScrollbar>;

const Template: StoryTemplate = (args) => {
  const { children } = args;
  const [additionalPages, setAdditionalPages] = useState<React.ReactNode[]>([]);

  const onFetchNewPage = () => {
    setAdditionalPages((prev) => [
      ...prev,
      <div style={{ height: '500px', borderBottom: '1px solid gray' }}>Page {prev.length + 2}</div>,
    ]);
  };

  return (
    <div style={{ height: '300px', width: '100%', border: '1px solid #ccc' }}>
      <InfinityScrollbar fetchNextPage={onFetchNewPage} {...args}>
        {children}
        {additionalPages}
      </InfinityScrollbar>
    </div>
  );
};

export const Simple: Story = {
  render: Template,
  args: {
    children: <div style={{ height: '500px', borderBottom: '1px solid gray' }}>Page 1</div>,
    canFetchNextPage: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
<InfinityScrollbar
  canFetchNextPage={true}
  fetchNextPage={onFetchNewPage}
>
  <div style={{ height: '500px', borderBottom: '1px solid gray' }}>Page 1</div>
</InfinityScrollbar>
        `,
      },
    },
  },
};
