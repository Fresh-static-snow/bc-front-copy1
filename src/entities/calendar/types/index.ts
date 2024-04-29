import {
  CorporateInCalendarEntity,
  TournamentInCalendarEntity,
  UserInCalendarEntity,
} from '@/shared/types/entities.types';

export type ScheduleTitles = {
  discipline: string;
  tournament: string;
  time: string;
  match: string;
  studio: string;
  analytics: string;
  staff: string;
  channel: string;
  media: string;
};

export type CalendarPerson = UserInCalendarEntity & {
  additionalBorder?: boolean;
  crownIcon?: boolean;
  additionalText?: string;
};

export type ScheduleParticipant = {
  id: number | string;
  nick: string;
  firstName: string;
  lastName: string;
  image: string;
  additionalBorder?: boolean;
  crownIcon?: boolean;
  additionalText?: string;
};

export type Fourth<T extends TournamentInCalendarEntity | CorporateInCalendarEntity> = {
  /**
   * The id of the fourth.
   */
  id: string;
  /**
   * The period length of the fourth tournament.
   */
  periodLength?: number;
  /**
   * The tournament or corporate data of the fourth.
   */
  event?: T;
};

export type Month<T extends TournamentInCalendarEntity | CorporateInCalendarEntity> = {
  /**
   * The id of the month.
   */
  id: string;
  fourths: Fourth<T>[];
};

export type RangeMatrixRow<T extends TournamentInCalendarEntity | CorporateInCalendarEntity> = {
  /**
   * The id of the range matrix row.
   */
  id: string;
  months: Month<T>[];
};
