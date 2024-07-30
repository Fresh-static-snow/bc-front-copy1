import { PreDeletedMatch, PreDeletedSegment } from '@/shared/types/entities.types';

export type DeletedMatchListProps = {
  mainKey: string;
  matches: (PreDeletedMatch | PreDeletedSegment)[];
  isLoading?: boolean;
  onRestore: (items: (PreDeletedMatch | PreDeletedSegment)[]) => void;
  onDelete: (items: (PreDeletedMatch | PreDeletedSegment)[]) => void;
};
