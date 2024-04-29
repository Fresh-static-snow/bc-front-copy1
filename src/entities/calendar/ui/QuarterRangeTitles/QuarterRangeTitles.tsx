import dayjs from 'dayjs';
import { memo, useMemo } from 'react';

import { getQuarterMonths } from '@/entities/calendar/lib';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import * as S from './QuarterRangeTitles.styles';
import { QuarterRangeTitlesProps } from './QuarterRangeTitles.types';

export const QuarterRangeTitles: React.FC<QuarterRangeTitlesProps> = memo(({ activeDate }) => {
  const quarterMonths = useMemo(() => {
    if (!activeDate) {
      return [];
    }

    const quarterIndex = dayjs(activeDate).quarter();
    return getQuarterMonths(quarterIndex);
  }, [activeDate]);

  return (
    <S.Root>
      <ColumnTitle title="" />

      <S.MonthsGrid>
        {quarterMonths?.map((month) => (
          <ColumnTitle key={month} title={month} />
        ))}
      </S.MonthsGrid>
    </S.Root>
  );
});
