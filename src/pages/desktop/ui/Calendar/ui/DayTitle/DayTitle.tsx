import dayjs from 'dayjs';
import { useEffect } from 'react';

import { useScrollTo } from '@/shared/lib';

import * as S from './DayTitle.styles';
import { DayTitleProps } from './DayTitle.types';

export const DayTitle: React.FC<DayTitleProps> = ({ date }) => {
  const [scrollToRef, setShouldScrollTo] = useScrollTo<HTMLDivElement>();

  useEffect(() => {
    if (date && dayjs(date).isSame(dayjs(), 'day')) {
      setShouldScrollTo(true);
    }
  }, [date, setShouldScrollTo]);

  return (
    <S.Root ref={scrollToRef}>
      <S.Date>{date ? dayjs(date).format('dddd, MMM DD') : 'Without Date'}</S.Date>
    </S.Root>
  );
};
