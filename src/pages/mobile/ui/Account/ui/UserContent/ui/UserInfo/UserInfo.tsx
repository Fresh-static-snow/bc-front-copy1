import { CropUserAvatar, UpdateAuthedUser } from '@/features/user';

import { ContentWrapper } from '../../../ContentWrapper/ContentWrapper';
import * as S from './UserInfo.styles';

const UserInfo: React.FC = () => (
  <ContentWrapper>
    <S.Root>
      <S.AvatarWrapper>
        <CropUserAvatar />
      </S.AvatarWrapper>

      <S.FormWrapper>
        <UpdateAuthedUser />
      </S.FormWrapper>
    </S.Root>
  </ContentWrapper>
);

export default UserInfo;
