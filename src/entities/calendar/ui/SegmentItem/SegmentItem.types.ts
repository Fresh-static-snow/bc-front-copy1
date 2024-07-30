import {
  GameDiscipline,
  Match,
  SegmentInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';
import { HEX } from '@/shared/types/styles.types';

export type SegmentItemProps = {
  discipline?: GameDiscipline;
  tournament?: TournamentInCalendarEntity;
  segment: SegmentInCalendarEntity;
  filters?: Record<string, string[]>;
  color: HEX;
  onClickSegment?: (match: SegmentInCalendarEntity) => void;
};
