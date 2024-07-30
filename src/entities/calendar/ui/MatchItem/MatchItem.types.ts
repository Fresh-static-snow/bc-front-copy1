import {
  GameDiscipline,
  Match,
  SegmentInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type MatchItemProps = {
  match: Match;
  filters?: Record<string, string[]>;
  color: HEX;
  onClickMatch?: (match: Match) => void;
};

export type MatchItemMobileProps = {
  match: Match | SegmentInCalendarEntity;
  filters?: Record<string, string[]>;
  color: HEX;
  onClickMatch?: (match: Match | SegmentInCalendarEntity) => void;
  discipline: GameDiscipline;
  tournament: Partial<TournamentInCalendarEntity>;
};
