import { memo } from 'react';

import { CorporateRangeItem } from '../CorporateRangeItem/CorporateRangeItem';
import * as S from './CorporateRangeRow.styles';
import { CorporateRangeRowProps } from './CorporateRangeRow.types';

export const CorporateRangeRow: React.FC<CorporateRangeRowProps> = memo(
  ({ row, monthCount, withParticipants, onClickCorporate }) => (
    <S.Root $monthCount={monthCount}>
      {row.months.map((month) => (
        <S.MonthCell key={month.id}>
          {month.fourths.map((fourth) => (
            <S.FourthCell key={fourth.id}>
              {fourth.event && (
                <CorporateRangeItem
                  key={fourth.event?.id}
                  withParticipants={withParticipants}
                  periodLength={fourth.periodLength}
                  corporate={fourth.event}
                  onClickCorporate={onClickCorporate}
                />
              )}
            </S.FourthCell>
          ))}
        </S.MonthCell>
      ))}
    </S.Root>
  ),
);
