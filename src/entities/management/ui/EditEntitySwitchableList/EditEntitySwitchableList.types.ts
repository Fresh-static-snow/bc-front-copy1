import { PrimarySelectableValue } from '@/shared/types/values.types';

export type EditEntitySwitchableListProps = {
  mainKey: string;
  dataList: PrimarySelectableValue[];
  isLoading?: boolean;
  onSwitch: (id: string | number) => void;
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
};
