import { CSSProperties } from 'react';

import { TabValue } from '@/shared/types/values.types';

export type TabsProps = {
  tabList: TabValue[];
  activeTab: TabValue;
  color?: CSSProperties['color'];
  withoutFocusColors?: boolean;
  setActiveTab: (value: TabValue) => void;
};

export type StyledTabLabelProps = {
  $active: boolean;
};

export type StyledTabProps = {
  $color?: CSSProperties['color'];
  $withoutFocusColors?: boolean;
};
