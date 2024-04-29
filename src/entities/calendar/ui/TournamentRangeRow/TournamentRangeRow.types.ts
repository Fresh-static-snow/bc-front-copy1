import { RangeMatrixRow } from '@/entities/calendar/types';
import { GameDiscipline, TournamentInCalendarEntity } from '@/shared/types/entities.types';

export type TournamentRangeRowProps = {
  row: RangeMatrixRow<TournamentInCalendarEntity>;
  discipline: GameDiscipline;
  monthCount: number;
  withParticipants?: boolean;
  filters?: Record<string, string[]>;
  onClickTournament?: (tournament: TournamentInCalendarEntity) => void;
};

export type StyledRootProps = {
  $monthCount: number;
};
