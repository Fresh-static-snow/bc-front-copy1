import { useTheme } from '@emotion/react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLogout } from '@/entities/auth';
import { useGetBrandingMain } from '@/entities/branding';
import { LogoMaincastSvg } from '@/shared/assets';
import { useAuthStore } from '@/shared/model/auth/auth.store';
import { Avatar } from '@/shared/ui/data-display';
import { AccessControl } from '@/shared/ui/misc';
import { NavigationButton, NavigationDropDown } from '@/shared/ui/navigation';

import { mainLinks, userLinks } from './Header.const';
import * as S from './Header.styles';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const authedUser = useAuthStore((state) => state.authedUser);

  const { mutate: logout } = useLogout();

  const { data: brandingMainData } = useGetBrandingMain();

  const onClickLogo = useCallback(() => {
    navigate('/calendar');
  }, [navigate]);

  const onLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <S.Root>
      <S.Logo type="button" onClick={onClickLogo}>
        {brandingMainData && (
          <>
            {brandingMainData?.logo?.url ? (
              <img src={brandingMainData?.logo?.url} alt="" />
            ) : (
              <LogoMaincastSvg />
            )}
          </>
        )}
      </S.Logo>

      <S.Navigation>
        {mainLinks.map(({ id, href, pathString, Icon, label, permissions }) => (
          <AccessControl key={id} necessaryPermissions={permissions} method="some">
            <NavigationButton href={href} activePathString={pathString} variant="primary">
              <S.NavigationButtonContent>
                <Icon />
                {label}
              </S.NavigationButtonContent>
            </NavigationButton>
          </AccessControl>
        ))}

        <NavigationDropDown
          ButtonContentComponent={
            <Avatar
              name={authedUser?.display_name}
              image={authedUser?.avatar?.url}
              size="32px"
              textColor={theme.appColors.primary_01}
              borderColor={authedUser?.avatar?.url ? undefined : theme.appColors.primary_01}
              fontSize="13px"
              fontWeight="400"
            />
          }
          ContentComponent={
            <S.DropDownContent>
              <S.DropDownContentItem>
                {userLinks.map(({ id, href, pathString, Icon, label, permissions }) => (
                  <AccessControl key={id} necessaryPermissions={permissions} method="some">
                    <NavigationButton
                      href={href}
                      activePathString={pathString}
                      variant="secondary"
                      padding="8px 32px"
                    >
                      <S.NavigationButtonContent>
                        <Icon /> {label}
                      </S.NavigationButtonContent>
                    </NavigationButton>
                  </AccessControl>
                ))}
              </S.DropDownContentItem>

              <S.Separator />

              <S.DropDownContentItem>
                <NavigationButton
                  tag="button"
                  variant="secondary"
                  padding="8px 32px"
                  onClick={onLogout}
                >
                  Sign Out
                </NavigationButton>
              </S.DropDownContentItem>
            </S.DropDownContent>
          }
          activePathString="account"
          buttonVariant="avatar"
          buttonInnerBorder={!authedUser?.avatar?.url}
          buttonPadding="8px"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        />
      </S.Navigation>
    </S.Root>
  );
};
