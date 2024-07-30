import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { ChangeEvent, useRef, useState } from 'react';

import { AvatarCropper } from './AvatarCropper';

export default {
  title: 'shared/inputs/AvatarCropper',
  component: AvatarCropper,
  tags: ['autodocs'],
  argTypes: {
    image: { control: { type: null } },
    onCancel: { control: { type: null } },
    onUpdateAvatar: { control: { type: null } },
  },
} as Meta<typeof AvatarCropper>;

type Story = StoryObj<typeof AvatarCropper>;
type StoryTemplate = StoryFn<typeof AvatarCropper>;

const Template: StoryTemplate = (args) => {
  const [avatarFile, setAvatarFile] = useState<File>();

  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setAvatarFile(event.target.files[0]);
  };

  return (
    <>
      <input
        style={{ padding: '20px', width: '100%' }}
        type="file"
        ref={hiddenFileInputRef}
        onChange={onFileSelect}
        accept="image/png, image/jpeg"
        data-testid="File-input"
      />

      <AvatarCropper {...args} image={avatarFile} onUpdateAvatar={() => {}} onCancel={() => {}} />
    </>
  );
};

export const Simple: Story = {
  render: Template,
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<AvatarCropper
  image={avatarFile}
  onUpdateAvatar={onUpdateAvatar}
  onCancel={onCancel}
/>
        `,
      },
    },
  },
};
