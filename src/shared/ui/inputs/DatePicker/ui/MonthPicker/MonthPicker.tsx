import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo, useState } from 'react';

import { generateMonths } from '@/shared/ui/inputs/DatePicker/lib';
import { Month } from '@/shared/ui/inputs/DatePicker/types';

import { CalendarButton } from '../CalendarButton/CalendarButton';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';
import { CalendarLayout } from '../CalendarLayout/CalendarLayout';
import { MonthPickerProps } from './MonthPicker.types';

export const MonthPicker: React.FC<MonthPickerProps> = memo(
  ({ activeDate, onChangeActiveDate }) => {
    const [activeYear, setActiveYear] = useState<Dayjs>(activeDate || dayjs());

    // * Generate months for the current year.
    const calendar = useMemo<Month[][]>(
      () => generateMonths(activeYear, activeDate),
      [activeDate, activeYear],
    );

    const onClickBack = useCallback(() => {
      setActiveYear(activeYear.subtract(1, 'year'));
    }, [activeYear]);

    const onClickForward = useCallback(() => {
      setActiveYear(activeYear.add(1, 'year'));
    }, [activeYear]);

    const onClickMonth = useCallback(
      (newMonth: Dayjs, otherYear: boolean) => () => {
        onChangeActiveDate(newMonth);
        // * If the month is in another year, then we need to change the year.
        if (otherYear) {
          setActiveYear(newMonth);
        }
      },
      [onChangeActiveDate],
    );

    const onClickToday = useCallback(() => {
      onChangeActiveDate(dayjs().startOf('month'));
      setActiveYear(dayjs());
    }, [onChangeActiveDate]);

    return (
      <CalendarLayout
        title={activeYear.format('YYYY')}
        onClickBack={onClickBack}
        onClickForward={onClickForward}
        onClickToday={onClickToday}
      >
        {calendar?.map((monthsRow) => (
          <CalendarGrid key={monthsRow[0].key} columns={4}>
            {monthsRow?.map(({ key, month, isOtherYear, isActiveMonth, isCurrentMonth }) => (
              <CalendarButton
                key={key}
                isBig
                label={month.format('MMM')}
                isActiveDate={isActiveMonth}
                isOtherPeriod={isOtherYear}
                isCurrentDate={isCurrentMonth}
                onClick={onClickMonth(month, isOtherYear)}
              />
            ))}
          </CalendarGrid>
        ))}
      </CalendarLayout>
    );
  },
);
