import { UserWithEvents } from '@/shared/types/entities.types';

export type DeletedUserListProps = {
  mainKey: string;
  dataList: UserWithEvents[];
  isLoading?: boolean;
  onDelete: (id: string | number) => void;
  onRestore: (id: string | number) => void;
};
