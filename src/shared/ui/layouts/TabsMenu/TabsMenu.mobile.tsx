import { useTheme } from '@emotion/react';

import { Tabs } from '../../navigation/Tabs/Tabs';
import * as S from './TabsMenu.styles';
import { TabsMenuProps } from './TabsMenu.types';

export const TabsMenuMobile: React.FC<TabsMenuProps> = ({ tabs, activeTab, onChangeTab }) => {
  const theme = useTheme();

  return (
    <S.MobileRoot>
      <S.TabsWrapper>
        <Tabs
          color={theme.appColors.primary_05}
          withoutFocusColors
          tabList={tabs}
          activeTab={activeTab}
          setActiveTab={onChangeTab}
        />
      </S.TabsWrapper>
    </S.MobileRoot>
  );
};
