import { useGetAuthenticatedUser, useUpdateUserAvatar } from '@/entities/user';

import { UserAvatar } from './ui/UserAvatar/UserAvatar';

export const CropUserAvatar: React.FC = () => {
  const { data: userData } = useGetAuthenticatedUser();
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
      onUpdateAvatar={onUpdateAvatar}
    />
  );
};
