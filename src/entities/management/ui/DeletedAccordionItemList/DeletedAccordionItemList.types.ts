import { ItemWithRelatedEvents } from '@/shared/types/entities.types';

export type DeletedAccordionItemListProps = {
  mainKey: string;
  dataList: ItemWithRelatedEvents[];
  isLoading?: boolean;
  onDelete: (id: string | number) => void;
  onRestore: (id: string | number) => void;
};
