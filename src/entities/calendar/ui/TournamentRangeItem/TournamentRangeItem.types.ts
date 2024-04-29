import { GameDiscipline, TournamentInCalendarEntity } from '@/shared/types/entities.types';

export type TournamentRangeItemProps = {
  periodLength: number;
  tournament: TournamentInCalendarEntity;
  discipline: GameDiscipline;
  withParticipants?: boolean;
  filters?: Record<string, string[]>;
  onClickTournament?: (tournament: TournamentInCalendarEntity) => void;
};

export type StyledTournamentWrapperProps = {
  $periodLength: number;
};
