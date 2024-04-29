import { CSSProperties } from 'react';

import {
  GameDiscipline,
  Match,
  MatchCast,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type MatchCastsItemProps = {
  matchDetails: MatchCast;
  filters?: Record<string, string[]>;
  color: HEX;
  isVisible?: boolean;
};

export type MatchCastsItemMobileProps = MatchCastsItemProps & {
  discipline: GameDiscipline;
  tournament: Partial<TournamentInCalendarEntity>;
  match: Match;
  onEditMatch: (match: Match) => void;
};

export type StyledDetailedWrapperMobileProps = {
  $alignItems?: CSSProperties['alignItems'];
};
