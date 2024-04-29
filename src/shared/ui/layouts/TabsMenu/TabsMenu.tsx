import { Tabs } from '../../navigation/Tabs/Tabs';
import * as S from './TabsMenu.styles';
import { TabsMenuProps } from './TabsMenu.types';

export const TabsMenu: React.FC<TabsMenuProps> = ({ tabs, activeTab, onChangeTab }) => (
  <S.Root>
    <Tabs tabList={tabs} activeTab={activeTab} setActiveTab={onChangeTab} />
  </S.Root>
);
