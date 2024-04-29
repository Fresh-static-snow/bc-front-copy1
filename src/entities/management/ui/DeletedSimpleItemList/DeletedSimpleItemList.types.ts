import { ItemWithRelatedEvents } from '@/shared/types/entities.types';

export type DeletedSimpleItemListProps = {
  mainKey: string;
  dataList: ItemWithRelatedEvents[];
  isLoading?: boolean;
  onDelete: (id: string | number) => void;
  onRestore: (id: string | number) => void;
};
