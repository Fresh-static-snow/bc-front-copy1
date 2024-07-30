import { PreDeletedSegment } from '@/shared/types/entities.types';

export type DeletedSegmentListProps = {
  mainKey: string;
  segments: PreDeletedSegment[];
  isLoading?: boolean;
  onRestore: (ids: (number | string)[]) => void;
  onDelete: (ids: (number | string)[]) => void;
};
