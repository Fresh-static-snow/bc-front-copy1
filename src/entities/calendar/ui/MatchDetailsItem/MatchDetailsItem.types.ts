import { CSSProperties } from 'react';

import {
  GameDiscipline,
  Match,
  MatchCast,
  SegmentInCalendarEntity,
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
  match: Match | SegmentInCalendarEntity;
  onEditMatch: (match: Match | SegmentInCalendarEntity) => void;
};

export type StyledDetailedWrapperMobileProps = {
  $alignItems?: CSSProperties['alignItems'];
};
