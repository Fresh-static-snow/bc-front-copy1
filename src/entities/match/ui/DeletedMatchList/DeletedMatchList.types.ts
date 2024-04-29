import { PreDeletedMatch } from '@/shared/types/entities.types';

export type DeletedMatchListProps = {
  mainKey: string;
  matches: PreDeletedMatch[];
  isLoading?: boolean;
  onRestore: (ids: (number | string)[]) => void;
  onDelete: (ids: (number | string)[]) => void;
};
