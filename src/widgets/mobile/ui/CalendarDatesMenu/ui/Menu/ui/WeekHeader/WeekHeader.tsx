import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useLayoutEffect, useMemo } from 'react';

import { getDaysBetweenDates, useCustomSearchParams } from '@/shared/lib';

import { useVisibleItems } from '../../../../../../../../shared/model/useVisibleItems.store';
import * as S from './WeekHeader.styles';

export const WeekHeader: React.FC = () => {
  const { params } = useCustomSearchParams(['start_at']);

  const theme = useTheme();
  const visibleDate = useVisibleItems((s) => s.visibleDate);
  const setVisibleDate = useVisibleItems((s) => s.setVisible);
  const days = useMemo(() => getDaysBetweenDates(dayjs(params.start_at), 7), [params.start_at]);

  useLayoutEffect(() => {
    if (!visibleDate && params?.start_at) {
      setVisibleDate('visibleDate', params.start_at);
    }
  }, [visibleDate, params?.start_at]);

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
            dayjs(visibleDate).format('D') === day.format('D')
              ? theme.appColors.palette_02
              : 'initial';
          const linkElement = `WeekItem-${day.format('D')}`;

          return (
            <S.ActiveCircle
              href={`#${linkElement}`}
              key={day.format('D')}
              color={color}
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById(linkElement);
                if (targetElement) {
                  const topPosition = targetElement.getBoundingClientRect().top;
                  const adjustedTop = topPosition + window.scrollY - 110;

                  window.scrollTo({ top: adjustedTop, behavior: 'smooth' });
                }
              }}
            >
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
