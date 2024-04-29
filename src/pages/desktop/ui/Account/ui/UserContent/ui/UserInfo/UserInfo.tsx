import { CropUserAvatar, UpdateAuthedUser } from '@/features/user';

import * as S from './UserInfo.styles';

export const UserInfo: React.FC = () => (
  <S.Root>
    <CropUserAvatar />

    <UpdateAuthedUser />
  </S.Root>
);
