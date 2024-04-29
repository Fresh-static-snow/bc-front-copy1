import { memo } from 'react';

import { monthNames } from '@/entities/calendar/const';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import * as S from './YearRangeTitles.styles';

export const YearRangeTitles: React.FC = memo(() => (
  <S.Root>
    <ColumnTitle title="" />

    <S.MonthsGrid>
      {monthNames.map((month) => (
        <ColumnTitle key={month} title={month} />
      ))}
    </S.MonthsGrid>
  </S.Root>
));
