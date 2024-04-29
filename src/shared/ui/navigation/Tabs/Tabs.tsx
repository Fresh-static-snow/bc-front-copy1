import { TabValue } from '@/shared/types/values.types';

import * as S from './Tabs.styles';
import { TabsProps } from './Tabs.types';

export const Tabs: React.FC<TabsProps> = ({
  tabList,
  activeTab,
  color,
  withoutFocusColors,
  setActiveTab,
}) => {
  const onClickTab = (tab: TabValue) => () => {
    setActiveTab(tab);
  };

  return (
    <S.Root>
      {tabList?.map((tab) => (
        <S.Tab
          key={tab.value}
          $color={color}
          $withoutFocusColors={withoutFocusColors}
          onClick={onClickTab(tab)}
          type="button"
        >
          <S.TabLabel $active={activeTab?.value === tab.value}>
            {tab.label}
            {tab.additional}
          </S.TabLabel>
        </S.Tab>
      ))}
    </S.Root>
  );
};
