import { useGetAuthenticatedUser } from '@/entities/user';
import { CropUserAvatar, UpdateAuthedUser } from '@/features/user';

import { ContentWrapper } from '../../../ContentWrapper/ContentWrapper';
import * as S from './UserInfo.styles';

const UserInfo: React.FC = () => {
  const { data: userData } = useGetAuthenticatedUser();

  return (
    <ContentWrapper>
      <S.Root>
        <S.AvatarWrapper>
          <CropUserAvatar userData={userData} />
        </S.AvatarWrapper>

        <S.FormWrapper>
          <UpdateAuthedUser />
        </S.FormWrapper>
      </S.Root>
    </ContentWrapper>
  );
};

export default UserInfo;
