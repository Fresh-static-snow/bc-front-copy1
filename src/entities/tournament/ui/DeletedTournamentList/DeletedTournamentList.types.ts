import {
  PreDeletedMatch,
  PreDeletedSegment,
  PreDeletedTournament,
} from '@/shared/types/entities.types';

export type DeletedTournamentListProps = {
  mainKey: string;
  tournaments: PreDeletedTournament[];
  isLoading?: boolean;
  dashedBorder?: boolean;
  withoutLastChildBorder?: boolean;
  onDeleteTournament?: (id: number | string) => void;
  onRestoreTournament?: (id: number | string) => void;
  onRestoreMatches: (items: (PreDeletedMatch | PreDeletedSegment)[]) => void;
  onDeleteMatches: (items: (PreDeletedMatch | PreDeletedSegment)[]) => void;
};
