import {
  CorporateInCalendarEntity,
  CorporateWithTier,
  GameDiscipline,
  TournamentInCalendarEntity,
  TournamentWithTier,
} from '@/shared/types/entities.types';

export type QuarterRangeItemProps = {
  activeDate: string;
  discipline: GameDiscipline;
  tournaments: TournamentWithTier[];
  corporates: CorporateWithTier[];
  filters?: Record<string, string[]>;
  onClickDiscipline?: (discipline: GameDiscipline) => void;
  onClickTournament?: (tournament: TournamentInCalendarEntity) => void;
  onClickCorporate?: (corporate: CorporateInCalendarEntity) => void;
};
