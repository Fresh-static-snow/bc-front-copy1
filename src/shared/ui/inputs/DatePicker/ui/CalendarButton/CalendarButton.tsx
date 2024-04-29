import { memo } from 'react';

import * as S from './CalendarButton.styles';
import { CalendarButtonProps } from './CalendarButton.types';

export const CalendarButton: React.FC<CalendarButtonProps> = memo(
  ({
    isBig,
    label,
    isOtherPeriod,
    isCurrentDate,
    isActiveDate,
    rangeType = 'neutral',
    onClick,
  }) => (
    <S.Root $rangeType={rangeType}>
      <S.Button
        $isBig={isBig}
        $isActiveDate={isActiveDate}
        $isCurrentDate={isCurrentDate}
        onClick={onClick}
      >
        <S.Date
          $isOtherPeriod={isOtherPeriod}
          $isActiveDate={isActiveDate}
          $isCurrentDate={isCurrentDate}
        >
          {label}
        </S.Date>
      </S.Button>
    </S.Root>
  ),
);
