import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

import { getDaysBetweenDates } from '@/shared/lib';

import { useVisibleItems } from '../../../../../../../../shared/model/useVisibleItems.store';
import * as S from './MonthHeader.styles';

export const MonthHeader: React.FC = () => {
  const theme = useTheme();
  const visibleDate = dayjs(useVisibleItems((s) => s.visibleDate));
  const [render, setRender] = useState(true);
  const [days, setDays] = useState(getDaysBetweenDates(dayjs(visibleDate), 7));

  useEffect(() => {
    if (visibleDate && render) {
      setDays(getDaysBetweenDates(dayjs(visibleDate), 7));
      setRender(false);
    }

    const rerender = !days
      ?.map((day) => day?.format('DD MM'))
      .includes(visibleDate?.format('DD MM'));

    if (!render && rerender) {
      const isHigher = days.every(
        (day) =>
          Number(day.format('M')) < Number(visibleDate?.format('M')) ||
          Number(day.format('D')) < Number(visibleDate?.format('D')),
      );

      const isLower = days.every(
        (day) =>
          Number(day.format('M')) > Number(visibleDate?.format('M')) ||
          Number(day.format('D')) > Number(visibleDate?.format('D')),
      );

      if (isHigher) {
        setDays(getDaysBetweenDates(dayjs(days.at(-1)).add(1, 'day'), 7));
      }

      if (isLower) {
        setDays(getDaysBetweenDates(dayjs(days[0]).add(-1, 'week'), 7));
      }
    }
  }, [visibleDate, render, days]);

  return (
    <S.Root>
      <S.FlexWrapper>
        {days.map((day) => (
          <S.DayContainer key={day.format('D')}>{day.format('ddd')[0]}</S.DayContainer>
        ))}
      </S.FlexWrapper>

      <S.FlexWrapper>
        {days.map((day) => {
          const color =
            visibleDate?.format('DD MM') === day.format('DD MM')
              ? theme.appColors.palette_02
              : 'initial';

          return (
            <S.ActiveCircle key={day.format('D')} color={color}>
              <S.DayContainer color={theme.appColors.primary_03}>
                {dayjs(day).format('D')}
              </S.DayContainer>
            </S.ActiveCircle>
          );
        })}
      </S.FlexWrapper>
    </S.Root>
  );
};
