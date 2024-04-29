import { useQuery } from '@tanstack/react-query';

import { CALENDAR } from '@/shared/api';

import * as calendarService from './calendar.service';

export const useGetCalendarDay = (date: string, searchParams: Record<string, string[]>) =>
  useQuery(
    [CALENDAR.DAY, date, searchParams],
    () => calendarService.getCalendar<'day'>({ focused_date: date, scope: 'day', searchParams }),
    { enabled: !!date, refetchOnWindowFocus: false },
  );

export const useGetCalendarWeek = (date: string, searchParams: Record<string, string[]>) =>
  useQuery(
    [CALENDAR.WEEK, date, searchParams],
    async () =>
      calendarService.getCalendar<'week'>({ focused_date: date, scope: 'week', searchParams }),
    { enabled: !!date, refetchOnWindowFocus: false },
  );

export const useGetCalendarMonth = (date: string, searchParams: Record<string, string[]>) =>
  useQuery(
    [CALENDAR.MONTH, date, searchParams],
    async () =>
      calendarService.getCalendar<'month'>({ focused_date: date, scope: 'month', searchParams }),
    { enabled: !!date, refetchOnWindowFocus: false },
  );

export const useGetCalendarQuarter = (date: string, searchParams: Record<string, string[]>) =>
  useQuery(
    [CALENDAR.QUARTER, date, searchParams],
    async () =>
      calendarService.getCalendar<'quarter'>({
        focused_date: date,
        scope: 'quarter',
        searchParams,
      }),
    { enabled: !!date, refetchOnWindowFocus: false },
  );

export const useGetCalendarYear = (date: string, searchParams: Record<string, string[]>) =>
  useQuery(
    [CALENDAR.YEAR, date, searchParams],
    async () =>
      calendarService.getCalendar<'year'>({ focused_date: date, scope: 'year', searchParams }),
    { enabled: !!date, refetchOnWindowFocus: false },
  );

export const useGetCalendarFilters = () =>
  useQuery([CALENDAR.FILTERS], async () => calendarService.getCalendarFilters(), {
    refetchOnWindowFocus: false,
  });
