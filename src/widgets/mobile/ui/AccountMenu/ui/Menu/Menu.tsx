import { useTheme } from '@emotion/react';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetAuthenticatedUser, useGetUserNotificationsCount } from '@/entities/user';
import { IconChevronLeftSvg } from '@/shared/assets';
import { TabValue } from '@/shared/types/values.types';
import { Counter } from '@/shared/ui/data-display';
import { PrimaryButton } from '@/shared/ui/inputs';
import { SubMenu, TabsMenuMobile } from '@/shared/ui/layouts';

import { LocationState } from './Menu.types';

export const Menu: React.FC = () => {
  const { data: notificationsCount } = useGetUserNotificationsCount();
  const { data: user } = useGetAuthenticatedUser();

  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const isPasswordPage = useMemo(() => location.pathname.includes('password'), [location.pathname]);

  const tabs = useMemo<TabValue[]>(
    () => [
      {
        label: 'Notification',
        value: '/account/notification',
        additional: <Counter count={notificationsCount || 0} />,
      },
      { label: 'Profile', value: '/account' },
    ],
    [notificationsCount],
  );

  const [activeTab, setActiveTab] = useState<TabValue>(() => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    const defaultTab = tabs.find((tab) => tab.value === lastSegment);

    return defaultTab;
  });

  const onChangeTab = (tab: TabValue) => {
    setActiveTab(tab);
    const state = location.state as LocationState;
    navigate(tab.value, { state });
  };

  const onClickBackButton = () => {
    navigate(isPasswordPage ? '/account' : '/calendar');
  };

  return (
    <>
      <SubMenu
        title={isPasswordPage ? 'Change Password' : user?.display_name}
        backButtonPrimaryLabel={null}
        color={theme.appColors.primary_05}
        buttonPadding="0"
        backgroundColor={theme.appColors.primary_02}
        borderNone
        CustomBackButton={
          <PrimaryButton
            IconComponent={IconChevronLeftSvg}
            variant="custom"
            padding="0"
            customStyles={{
              iconColor: theme.appColors.primary_05,
            }}
            onClick={onClickBackButton}
          />
        }
      />

      {!isPasswordPage && (
        <TabsMenuMobile tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />
      )}
    </>
  );
};
