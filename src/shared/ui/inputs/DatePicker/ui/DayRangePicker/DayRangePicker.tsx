import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo, useState } from 'react';

import { weekDaysNames } from '@/shared/ui/inputs/DatePicker/const';
import { generateDays, sortTwoDates } from '@/shared/ui/inputs/DatePicker/lib';
import { Day } from '@/shared/ui/inputs/DatePicker/types';

import { CalendarButton } from '../CalendarButton/CalendarButton';
import { CalendarColumnTitle } from '../CalendarColumnTitle/CalendarColumnTitle';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';
import { CalendarLayout } from '../CalendarLayout/CalendarLayout';
import { DayRangePickerProps } from './DayRangePicker.types';

export const DayRangePicker: React.FC<DayRangePickerProps> = memo(
  ({ activeDate, onChangeActiveDate }) => {
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
        const newRange: [Dayjs, Dayjs] =
          activeDate[1] || (!activeDate[1] && activeDate[0].isSame(newDay, 'day'))
            ? [newDay, undefined]
            : [activeDate[0], newDay];

        // * Sort dates in ascending order.
        const sortedRange = sortTwoDates(newRange[0], newRange[1]);

        onChangeActiveDate(sortedRange);

        // * If the day is in another month, then we need to change the month.
        if (otherMonth) {
          setActiveMonth(newDay);
        }
      },
      [activeDate, onChangeActiveDate],
    );

    const onClickToday = useCallback(() => {
      onChangeActiveDate([dayjs(), undefined]);
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
            {week?.map(({ key, day, isOtherMonth, isActiveDay, isToday, rangeType }) => (
              <CalendarButton
                key={key}
                label={day.format('D')}
                isActiveDate={isActiveDay}
                rangeType={rangeType}
                isOtherPeriod={isOtherMonth}
                isCurrentDate={isToday}
                onClick={onClickDay(day, isOtherMonth)}
              />
            ))}
          </CalendarGrid>
        ))}
      </CalendarLayout>
    );
  },
);
