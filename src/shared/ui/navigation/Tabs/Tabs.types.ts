import { CSSColor } from '@/shared/types/styles.types';
import { TabValue } from '@/shared/types/values.types';

export type TabsProps = {
  tabList: TabValue[];
  activeTab: TabValue;
  color?: CSSColor;
  withoutFocusColors?: boolean;
  setActiveTab: (value: TabValue) => void;
};

export type StyledTabLabelProps = {
  $active: boolean;
};

export type StyledTabProps = {
  $color?: CSSColor;
  $withoutFocusColors?: boolean;
};
