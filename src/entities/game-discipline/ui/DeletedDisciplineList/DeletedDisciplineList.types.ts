import { PreDeletedDiscipline } from '@/shared/types/entities.types';

export type DeletedDisciplineListProps = {
  mainKey: string;
  disciplines: PreDeletedDiscipline[];
  isLoading?: boolean;
  onDeleteDiscipline: (id: number | string) => void;
  onRestoreDiscipline: (id: number | string) => void;
  onDeleteTournament: (id: number | string) => void;
  onRestoreTournament: (id: number | string) => void;
  onRestoreMatches: (ids: (number | string)[]) => void;
  onDeleteMatches: (ids: (number | string)[]) => void;
};
