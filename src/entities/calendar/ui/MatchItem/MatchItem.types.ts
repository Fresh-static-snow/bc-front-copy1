import { GameDiscipline, Match, TournamentInCalendarEntity } from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type MatchItemProps = {
  match: Match;
  filters?: Record<string, string[]>;
  color: HEX;
  onClickMatch?: (match: Match) => void;
};

export type MatchItemMobileProps = MatchItemProps & {
  discipline: GameDiscipline;
  tournament: Partial<TournamentInCalendarEntity>;
};
