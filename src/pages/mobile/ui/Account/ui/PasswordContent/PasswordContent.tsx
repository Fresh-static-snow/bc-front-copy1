import { UpdateAuthedUserPassword } from '@/features/user';

import * as S from './PasswordContent.styles';

const PasswordContent: React.FC = () => (
  <S.FormWrapper>
    <UpdateAuthedUserPassword />
  </S.FormWrapper>
);

export default PasswordContent;
