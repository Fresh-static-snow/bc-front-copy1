import {
  PreDeletedDiscipline,
  PreDeletedMatch,
  PreDeletedSegment,
} from '@/shared/types/entities.types';

export type DeletedDisciplineListProps = {
  mainKey: string;
  disciplines: PreDeletedDiscipline[];
  isLoading?: boolean;
  onDeleteDiscipline: (id: number | string) => void;
  onRestoreDiscipline: (id: number | string) => void;
  onDeleteTournament: (id: number | string) => void;
  onRestoreTournament: (id: number | string) => void;
  onRestoreMatches: (items: (PreDeletedMatch | PreDeletedSegment)[]) => void;
  onDeleteMatches: (items: (PreDeletedMatch | PreDeletedSegment)[]) => void;
};
