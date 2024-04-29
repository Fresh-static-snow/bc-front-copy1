import { lazy } from 'react';

const DayContent = lazy(() => import('./ui/DayContent/DayContent'));
const MonthContent = lazy(() => import('./ui/MonthContent/MonthContent'));
const PageLayout = lazy(() => import('./ui/PageLayout/PageLayout'));
const QuarterContent = lazy(() => import('./ui/QuarterContent/QuarterContent'));
const WeekContent = lazy(() => import('./ui/WeekContent/WeekContent'));
const YearContent = lazy(() => import('./ui/YearContent/YearContent'));

export const Calendar = {
  PageLayout,
  DayContent,
  WeekContent,
  MonthContent,
  QuarterContent,
  YearContent,
};
