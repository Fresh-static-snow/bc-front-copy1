import { useTheme } from '@emotion/react';
import { memo } from 'react';

import { monthNames } from '@/entities/calendar/const';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import * as S from './YearRangeTitles.styles';

export const YearRangeTitlesMobile: React.FC = memo(() => {
  const theme = useTheme();

  return (
    <S.Root>
      <ColumnTitle title="" />

      <S.MonthsGrid>
        {monthNames.map((month) => (
          <ColumnTitle color={theme.appColors.primary_03} key={month} title={month} />
        ))}
      </S.MonthsGrid>
    </S.Root>
  );
});
