import dayjs, { Dayjs } from 'dayjs';
import { memo, useCallback, useMemo, useState } from 'react';

import { generateDecades } from '@/shared/ui/inputs/DatePicker/lib';
import { Year } from '@/shared/ui/inputs/DatePicker/types';

import { CalendarButton } from '../CalendarButton/CalendarButton';
import { CalendarGrid } from '../CalendarGrid/CalendarGrid';
import { CalendarLayout } from '../CalendarLayout/CalendarLayout';
import { YearPickerProps } from './YearPicker.types';

export const YearPicker: React.FC<YearPickerProps> = memo(({ activeDate, onChangeActiveDate }) => {
  const [activeDecade, setActiveDecade] = useState<number>(
    Math.floor(+activeDate.format('YYYY') / 10) * 10,
  );

  // * Generate years for the current decade.
  const calendar = useMemo<Year[]>(
    () => generateDecades(activeDecade, activeDate),
    [activeDate, activeDecade],
  );

  const onClickBack = useCallback(() => {
    setActiveDecade(activeDecade - 10);
  }, [activeDecade]);

  const onClickForward = useCallback(() => {
    setActiveDecade(activeDecade + 10);
  }, [activeDecade]);

  const onClickYear = useCallback(
    (newYear: Dayjs, otherDecade: boolean) => () => {
      onChangeActiveDate(newYear);

      // * If the year is in another decade, then we need to change the decade.
      if (otherDecade) {
        setActiveDecade(Math.floor(+newYear.format('YYYY') / 10) * 10);
      }
    },
    [onChangeActiveDate],
  );

  const onClickToday = useCallback(() => {
    onChangeActiveDate(dayjs().startOf('year'));
    setActiveDecade(Math.floor(+dayjs().format('YYYY') / 10) * 10);
  }, [onChangeActiveDate]);

  return (
    <CalendarLayout
      title={`${activeDecade}-${activeDecade + 9}`}
      onClickBack={onClickBack}
      onClickForward={onClickForward}
      onClickToday={onClickToday}
    >
      <CalendarGrid columns={4}>
        {calendar?.map(({ key, isActiveYear, isCurrentYear, isOtherDecade, year }) => (
          <CalendarButton
            key={key}
            isBig
            label={year.format('YYYY')}
            isActiveDate={isActiveYear}
            isOtherPeriod={isOtherDecade}
            isCurrentDate={isCurrentYear}
            onClick={onClickYear(year, isOtherDecade)}
          />
        ))}
      </CalendarGrid>
    </CalendarLayout>
  );
});
