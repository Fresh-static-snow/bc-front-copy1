import { useTheme } from '@emotion/react';
import { ChangeEvent, useRef, useState } from 'react';

import { IconEditSvg } from '@/shared/assets';
import { Avatar } from '@/shared/ui/data-display';
import { PrimaryButton } from '@/shared/ui/inputs';

import { AvatarEditModal } from '../AvatarEditModal/AvatarEditModal';
import * as S from './UserAvatar.styles';
import { UserAvatarProps } from './UserAvatar.types';

export const UserAvatar: React.FC<UserAvatarProps> = ({ name, image, onUpdateAvatar }) => {
  const theme = useTheme();

  const [avatarFile, setAvatarFile] = useState<File>();

  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.click();
    }
  };

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    setAvatarFile(event.target.files[0]);
  };

  const onCloseModal = () => {
    hiddenFileInputRef.current.value = '';
    setAvatarFile(undefined);
  };

  return (
    <>
      <AvatarEditModal
        avatarFile={avatarFile}
        onClose={onCloseModal}
        onUpdateAvatar={onUpdateAvatar}
      />

      <S.Root>
        <S.AvatarWrapper>
          <Avatar
            size="300px"
            fontSize="150px"
            backgroundColor={theme.appColors.primary_04}
            textColor={theme.appColors.secondary_04}
            fontWeight="400"
            name={name}
            image={image}
          />

          <S.EditButtonWrapper>
            <PrimaryButton
              variant="primary"
              IconComponent={IconEditSvg}
              label="Edit"
              onClick={onButtonClick}
            />
            <input
              type="file"
              style={{ display: 'none' }}
              ref={hiddenFileInputRef}
              onChange={onFileSelect}
              accept="image/png, image/jpeg"
              data-testid="File-input"
            />
          </S.EditButtonWrapper>
        </S.AvatarWrapper>
      </S.Root>
    </>
  );
};
