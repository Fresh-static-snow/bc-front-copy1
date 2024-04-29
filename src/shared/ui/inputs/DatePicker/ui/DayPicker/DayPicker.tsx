import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo, useState } from 'react';

import { weekDaysNames } from '@/shared/ui/inputs/DatePicker/const';
import { generateDays } from '@/shared/ui/inputs/DatePicker/lib';
import { Day } from '@/shared/ui/inputs/DatePicker/types';

import { CalendarButton } from '../CalendarButton/CalendarButton';
import { CalendarColumnTitle } from '../CalendarColumnTitle/CalendarColumnTitle';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';
import { CalendarLayout } from '../CalendarLayout/CalendarLayout';
import { DayPickerProps } from './DayPicker.types';

export const DayPicker: React.FC<DayPickerProps> = memo(({ activeDate, onChangeActiveDate }) => {
  const [activeMonth, setActiveMonth] = useState<Dayjs>(activeDate || dayjs());

  // * Generate days for the current month.
  const calendar = useMemo<Day[][]>(
    () => generateDays(activeMonth, activeDate),
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
      onChangeActiveDate(newDay);
      // * If the day is in another month, then we need to change the month.
      if (otherMonth) {
        setActiveMonth(newDay);
      }
    },
    [onChangeActiveDate],
  );

  const onClickToday = useCallback(() => {
    onChangeActiveDate(dayjs());
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

      {calendar?.map((week) => (
        <CalendarGrid key={week[0].key} columns={7}>
          {week?.map(({ key, day, isOtherMonth, isActiveDay, isToday }) => (
            <CalendarButton
              key={key}
              label={day.format('D')}
              isActiveDate={isActiveDay}
              isOtherPeriod={isOtherMonth}
              isCurrentDate={isToday}
              onClick={onClickDay(day, isOtherMonth)}
            />
          ))}
        </CalendarGrid>
      ))}
    </CalendarLayout>
  );
});
