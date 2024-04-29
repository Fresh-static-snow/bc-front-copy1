import { memo } from 'react';

import { CorporateRangeItemMobile } from '../CorporateRangeItem/CorporateRangeItem.mobile';
import * as S from './CorporateRangeRow.styles';
import { CorporateRangeRowProps } from './CorporateRangeRow.types';

export const CorporateRangeRowMobile: React.FC<CorporateRangeRowProps> = memo(
  ({ row, monthCount, withParticipants, onClickCorporate }) => (
    <S.Root $monthCount={monthCount}>
      {row.months.map((month) => (
        <S.MonthCell key={month.id}>
          {month.fourths.map((fourth) => (
            <S.FourthCell key={fourth.id}>
              {fourth.event && (
                <CorporateRangeItemMobile
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
