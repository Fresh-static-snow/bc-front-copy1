import { ItemWithRelatedEvents } from '@/shared/types/entities.types';

export type EditEntityListProps = {
  mainKey: string;
  dataList: ItemWithRelatedEvents[];
  isLoading?: boolean;
  onEdit: (id: string | number) => void;
  onDelete: (id: string | number) => void;
};
