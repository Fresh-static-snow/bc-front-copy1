import dayjs, { Dayjs } from 'dayjs';

import { DatePicker } from '@/shared/ui/inputs';

import { DateControlTemplates } from './dateControlTemplates.types';

export const dateControlTemplates: DateControlTemplates = {
  empty: () => ({
    dateLabel: '',
    onClickToday: () => {},
    onClickBack: () => {},
    onClickForward: () => {},
    DatePicker: <div />,
  }),

  day: (activeDay: Dayjs, setActiveDay: (day: Dayjs) => void) => ({
    dateLabel: activeDay.format('DD MMMM YYYY'),
    onClickToday: () => setActiveDay(dayjs()),
    onClickBack: () => setActiveDay(activeDay.add(-1, 'day')),
    onClickForward: () => setActiveDay(activeDay.add(1, 'day')),
    DatePicker: <DatePicker.Day activeDate={activeDay} onChangeActiveDate={setActiveDay} />,
  }),

  week: (activeWeek: [Dayjs, Dayjs], setActiveWeek: (week: [Dayjs, Dayjs]) => void) => ({
    dateLabel: `${activeWeek[0].format('DD')}-${activeWeek[1].format('DD MMMM YYYY')}`,
    onClickToday: () => setActiveWeek([dayjs().startOf('week'), dayjs().endOf('week')]),
    onClickBack: () =>
      setActiveWeek([
        activeWeek[0].add(-1, 'week').startOf('week'),
        activeWeek[1].add(-1, 'week').endOf('week'),
      ]),
    onClickForward: () =>
      setActiveWeek([
        activeWeek[0].add(1, 'week').startOf('week'),
        activeWeek[1].add(1, 'week').endOf('week'),
      ]),
    DatePicker: <DatePicker.Week activeDate={activeWeek} onChangeActiveDate={setActiveWeek} />,
  }),

  month: (activeMonth: Dayjs, setActiveMonth: (month: Dayjs) => void) => ({
    dateLabel: activeMonth.format('MMM YYYY'),
    onClickToday: () => setActiveMonth(dayjs().startOf('month')),
    onClickBack: () => setActiveMonth(activeMonth.add(-1, 'month')),
    onClickForward: () => setActiveMonth(activeMonth.add(1, 'month')),
    DatePicker: <DatePicker.Month activeDate={activeMonth} onChangeActiveDate={setActiveMonth} />,
  }),

  quarter: (
    activeQuarter: [Dayjs, Dayjs],
    setActiveQuarter: (quarter: [Dayjs, Dayjs]) => void,
  ) => ({
    dateLabel: `${activeQuarter[0].format('MMM')}-${activeQuarter[1].format('MMM YYYY')}`,
    onClickToday: () => setActiveQuarter([dayjs().startOf('quarter'), dayjs().endOf('quarter')]),
    onClickBack: () =>
      setActiveQuarter([
        activeQuarter[0].add(-1, 'quarter').startOf('quarter'),
        activeQuarter[1].add(-1, 'quarter').endOf('quarter'),
      ]),
    onClickForward: () =>
      setActiveQuarter([
        activeQuarter[0].add(1, 'quarter').startOf('quarter'),
        activeQuarter[1].add(1, 'quarter').endOf('quarter'),
      ]),
    DatePicker: (
      <DatePicker.Quarter activeDate={activeQuarter} onChangeActiveDate={setActiveQuarter} />
    ),
  }),

  year: (activeYear: Dayjs, setActiveYear: (year: Dayjs) => void) => ({
    dateLabel: activeYear.format('YYYY'),
    onClickToday: () => setActiveYear(dayjs().startOf('year')),
    onClickBack: () => setActiveYear(activeYear.add(-1, 'year')),
    onClickForward: () => setActiveYear(activeYear.add(1, 'year')),
    DatePicker: <DatePicker.Year activeDate={activeYear} onChangeActiveDate={setActiveYear} />,
  }),
};
