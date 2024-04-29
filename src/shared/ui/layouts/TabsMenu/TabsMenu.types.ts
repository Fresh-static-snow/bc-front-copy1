import { TabValue } from '@/shared/types/values.types';

export type TabsMenuProps = {
  tabs: TabValue[];
  activeTab: TabValue;
  onChangeTab: (value: TabValue) => void;
};
