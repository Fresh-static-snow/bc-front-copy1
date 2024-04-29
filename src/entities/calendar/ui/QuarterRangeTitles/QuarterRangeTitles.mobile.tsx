import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { memo, useMemo } from 'react';

import { getQuarterMonths } from '@/entities/calendar/lib';

import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import * as S from './QuarterRangeTitles.styles';
import { QuarterRangeTitlesProps } from './QuarterRangeTitles.types';

export const QuarterRangeTitlesMobile: React.FC<QuarterRangeTitlesProps> = memo(
  ({ activeDate }) => {
    const quarterMonths = useMemo(() => {
      if (!activeDate) {
        return [];
      }

      const quarterIndex = dayjs(activeDate).quarter();
      return getQuarterMonths(quarterIndex);
    }, [activeDate]);

    const theme = useTheme();

    return (
      <S.Root>
        <ColumnTitle title="" />

        <S.MonthsGrid>
          {quarterMonths?.map((month) => (
            <ColumnTitle color={theme.appColors.primary_03} key={month} title={month} />
          ))}
        </S.MonthsGrid>
      </S.Root>
    );
  },
);
