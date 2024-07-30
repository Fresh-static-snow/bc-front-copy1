import {
  CorporateInCalendarEntity,
  GameDiscipline,
  Match,
  SegmentInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';

import { WeekMonthDisciplineItem } from '../../api/calendar.service.types';

export type DisciplineItemProps = {
  discipline: GameDiscipline;
  tournaments?: TournamentInCalendarEntity[];
  corporates?: CorporateInCalendarEntity[];
  filters?: Record<string, string[]>;
  onClickDiscipline?: (discipline: GameDiscipline) => void;
  onClickTournament?: (tournament: TournamentInCalendarEntity) => void;
  onClickCorporate?: (corporate: CorporateInCalendarEntity) => void;
  onClickMatch?: (match: Match | SegmentInCalendarEntity) => void;
};

export type DisciplineItemMobileProps = DisciplineItemProps & {
  day?: WeekMonthDisciplineItem;
};
