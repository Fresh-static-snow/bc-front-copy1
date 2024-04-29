import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo, useState } from 'react';

import { weekDaysNames } from '@/shared/ui/inputs/DatePicker/const';
import { generateDays } from '@/shared/ui/inputs/DatePicker/lib';
import { Day } from '@/shared/ui/inputs/DatePicker/types';

import { CalendarButton } from '../CalendarButton/CalendarButton';
import { CalendarColumnTitle } from '../CalendarColumnTitle/CalendarColumnTitle';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';
import { CalendarLayout } from '../CalendarLayout/CalendarLayout';
import { WeekPickerProps } from './WeekPicker.types';

export const WeekPicker: React.FC<WeekPickerProps> = memo(({ activeDate, onChangeActiveDate }) => {
  const [activeMonth, setActiveMonth] = useState<Dayjs>(activeDate[1] || dayjs());

  // * Generate days for the current month.
  const calendar = useMemo<Day[][]>(
    () => generateDays(activeMonth, activeDate[0], activeDate[1]),
    [activeDate, activeMonth],
  );

  const onClickBack = useCallback(() => {
    setActiveMonth(activeMonth.subtract(1, 'month'));
  }, [activeMonth]);

  const onClickForward = useCallback(() => {
    setActiveMonth(activeMonth.add(1, 'month'));
  }, [activeMonth]);

  const onClickDay = useCallback(
    (newDay: Dayjs, otherMonth: boolean) => () => {
      // * Get start and end dates.
      const newWeek = [newDay.startOf('week'), newDay.endOf('week')] as [Dayjs, Dayjs];

      onChangeActiveDate(newWeek);

      // * If the day is in another month, then we need to change the month.
      if (otherMonth) {
        setActiveMonth(newWeek[1]);
      }
    },
    [onChangeActiveDate],
  );

  const onClickToday = useCallback(() => {
    onChangeActiveDate([dayjs().startOf('week'), dayjs().endOf('week')]);
    setActiveMonth(dayjs());
  }, [onChangeActiveDate]);

  return (
    <CalendarLayout
      title={activeMonth.format('MMMM YYYY')}
      onClickBack={onClickBack}
      onClickForward={onClickForward}
      onClickToday={onClickToday}
    >
      <CalendarGrid columns={7}>
        {weekDaysNames?.map((day) => (
          <CalendarColumnTitle key={day} day={day} />
        ))}
      </CalendarGrid>

      {calendar?.map((week) => {
        // * Check days in week if week include start days of next month.
        const isComparedWithNextMonth =
          week.at(-1).isOtherMonth && !week.some((day) => day.isToday);

        return (
          <CalendarGrid key={week[0].key} columns={7}>
            {week?.map(({ key, day, isOtherMonth, isActiveDay, isToday, rangeType }) => (
              <CalendarButton
                key={key}
                label={day.format('D')}
                isActiveDate={isActiveDay}
                rangeType={rangeType}
                isOtherPeriod={isOtherMonth}
                isCurrentDate={isToday}
                onClick={onClickDay(day, isComparedWithNextMonth)}
              />
            ))}
          </CalendarGrid>
        );
      })}
    </CalendarLayout>
  );
});
