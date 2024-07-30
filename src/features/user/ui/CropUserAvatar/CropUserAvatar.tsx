import { useUpdateUserAvatar } from '@/entities/user';

import { CropUserAvatarProps } from './CropUserAvatar.types';
import { UserAvatar } from './ui/UserAvatar/UserAvatar';

export const CropUserAvatar: React.FC<CropUserAvatarProps> = ({
  userData,
  size,
  fontSize,
  buttonGap,
}) => {
  const { mutate: updateAvatar } = useUpdateUserAvatar();

  const onUpdateAvatar = (file: File) => {
    const formData = new FormData();

    formData.append('avatar', file);

    updateAvatar({ id: userData?.id, formData });
  };

  return (
    <UserAvatar
      image={userData?.avatar?.url}
      name={userData?.display_name}
      size={size}
      fontSize={fontSize}
      buttonGap={buttonGap}
      onUpdateAvatar={onUpdateAvatar}
    />
  );
};
