import { useGetAuthenticatedUser } from '@/entities/user';
import { CropUserAvatar, UpdateAuthedUser } from '@/features/user';

import * as S from './UserInfo.styles';

export const UserInfo: React.FC = () => {
  const { data: userData } = useGetAuthenticatedUser();

  return (
    <S.Root>
      <CropUserAvatar userData={userData} />

      <UpdateAuthedUser />
    </S.Root>
  );
};
