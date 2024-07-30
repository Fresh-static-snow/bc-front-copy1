import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogout } from '@/entities/auth';
import { useGetUserNotificationsCount } from '@/entities/user';
import { LogoMaincastDarkSvg } from '@/shared/assets';
import { NavigationButton } from '@/shared/ui/navigation';

import { tabsBottom, tabsTop } from './ContentDrawer.const';
import * as S from './ContentDrawer.styles';
import { ContentDrawerProps } from './ContentDrawer.types';

export const ContentDrawer: React.FC<ContentDrawerProps> = ({
  isOpenContentDrawer,
  setOpenContentDrawer,
}) => {
  const navigate = useNavigate();

  const { mutate: logout } = useLogout();
  const { data: notificationCount } = useGetUserNotificationsCount();

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  const onNavigate = (href: string) => () => {
    navigate(href);
  };

  const onCloseContentDrawer = () => {
    setOpenContentDrawer(false);
  };

  return (
    <S.Root
      open={isOpenContentDrawer}
      onClose={onCloseContentDrawer}
      sx={{ zIndex: 2000 }}
      PaperProps={{
        elevation: 0,
      }}
    >
      <LogoMaincastDarkSvg style={{ paddingInline: 30 }} />

      <S.List>
        {tabsTop().map(({ id, href, Icon, label }) => (
          <NavigationButton
            key={id}
            tag="button"
            variant="secondary"
            padding="8px 30px"
            width="100%"
            onClick={onNavigate(href)}
          >
            <S.NavigationButtonContent>
              <Icon /> {label}
            </S.NavigationButtonContent>
          </NavigationButton>
        ))}
      </S.List>

      <S.List>
        {tabsBottom(notificationCount).map(({ id, href, Icon, label }) => (
          <NavigationButton
            key={id}
            tag="button"
            variant="secondary"
            padding="8px 30px"
            width="100%"
            onClick={onNavigate(href)}
          >
            <S.NavigationButtonContent>
              <Icon /> {label}
            </S.NavigationButtonContent>
          </NavigationButton>
        ))}

        <NavigationButton
          tag="button"
          variant="secondary"
          padding="8px 30px"
          width="100%"
          onClick={onLogout}
        >
          Logout
        </NavigationButton>
      </S.List>
    </S.Root>
  );
};
