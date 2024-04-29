import { UpdateAuthedUserPassword } from '@/features/user';
import { SlicedContentLayout, SubMenu } from '@/shared/ui/layouts';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import * as S from './PasswordContent.styles';

const PasswordContent: React.FC = () => (
  <>
    <SubMenu title="Change password" backButtonLabel="Account" backButtonLink="/account" />

    <ContentWrapper>
      <SlicedContentLayout.Body>
        <SlicedContentLayout.Section fragments={1} borderLeft borderRight>
          <S.FormWrapper>
            <UpdateAuthedUserPassword />
          </S.FormWrapper>
        </SlicedContentLayout.Section>
      </SlicedContentLayout.Body>
    </ContentWrapper>
  </>
);

export default PasswordContent;
