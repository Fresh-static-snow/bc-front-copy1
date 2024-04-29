import {
  CalendarFilters,
  Corporate,
  CorporateWithTier,
  GameDiscipline,
  Tournament,
  TournamentWithTier,
} from '@/shared/types/entities.types';

// * Params.
export type GetCalendarParams = {
  focused_date?: string;
  scope: CalendarScope;
  searchParams?: Record<string, string[]>;
};

// * Responses.
export type DayDisciplineItem = {
  discipline: GameDiscipline;
  tournaments: Tournament[];
  corporates: Corporate[];
};

export type WeekMonthDisciplineItem = {
  date: string;
  type: 'tournament' | 'corporate';
  disciplines: DayDisciplineItem[];
};

export type QuarterYearDisciplineItem = {
  discipline: GameDiscipline;
  tournaments: TournamentWithTier[];
  corporates: CorporateWithTier[];
};

export type CalendarScope = 'day' | 'week' | 'month' | 'quarter' | 'year';

export type GetCalendarResponse<T extends CalendarScope> = T extends 'day'
  ? DayDisciplineItem[]
  : T extends 'quarter' | 'year'
  ? QuarterYearDisciplineItem[]
  : WeekMonthDisciplineItem[];

export type GetCalendarFiltersResponse = CalendarFilters;
