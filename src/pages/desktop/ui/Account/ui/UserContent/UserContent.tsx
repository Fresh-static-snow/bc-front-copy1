import { useGetAuthenticatedUser } from '@/entities/user';
import { SlicedContentLayout, SubMenu } from '@/shared/ui/layouts';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { AccountNotifications } from './ui/AccountNotifications/AccountNotifications';
import { UserInfo } from './ui/UserInfo/UserInfo';

const UserContent: React.FC = () => {
  const { data: userData } = useGetAuthenticatedUser();

  return (
    <>
      <SubMenu
        title={userData?.display_name}
        backButtonLabel="Calendar"
        backButtonLink="/calendar"
      />

      <ContentWrapper>
        <SlicedContentLayout.Body>
          <SlicedContentLayout.Section fragments={1} borderLeft borderRight>
            <UserInfo />
          </SlicedContentLayout.Section>

          <SlicedContentLayout.Section fragments={1} borderRight scrollActive={false}>
            <AccountNotifications />
          </SlicedContentLayout.Section>
        </SlicedContentLayout.Body>
      </ContentWrapper>
    </>
  );
};

export default UserContent;
