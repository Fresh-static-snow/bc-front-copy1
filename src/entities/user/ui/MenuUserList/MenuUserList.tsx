import { Fragment, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { UserInDashboard } from '@/shared/types/entities.types';
import { NavigationItem, NavigationMenuAccordionButton } from '@/shared/ui/navigation';

import * as S from './MenuUserList.styles';
import { MenuUserListProps } from './MenuUserList.types';

export const MenuUserList: React.FC<MenuUserListProps> = ({ rolesWithUsers }) => {
  const { pathname } = useLocation();

  const hasActivePath = useCallback(
    (users: UserInDashboard[]) =>
      users?.some(({ id: userId }) => pathname === `/management/users/user/${userId}`),
    [pathname],
  );

  return (
    <>
      {rolesWithUsers?.map(({ id, title, user_count, users }) => (
        <Fragment key={id}>
          {user_count > 0 && (
            <NavigationMenuAccordionButton
              title={title}
              count={user_count}
              defaultExpandedStatus={hasActivePath(users)}
            >
              <S.MenuUserList>
                {users?.map(({ id: userId, display_name, avatar }) => (
                  <NavigationItem
                    key={userId}
                    linkPath={`/management/users/user/${userId}`}
                    name={display_name}
                    avatarImage={avatar?.url}
                    padding="7px 24px 7px 50px"
                    variant="colored"
                  />
                ))}
              </S.MenuUserList>
            </NavigationMenuAccordionButton>
          )}
        </Fragment>
      ))}
    </>
  );
};
