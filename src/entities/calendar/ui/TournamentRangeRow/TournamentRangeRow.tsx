import { memo } from 'react';

import { TournamentRangeItem } from '../TournamentRangeItem/TournamentRangeItem';
import * as S from './TournamentRangeRow.styles';
import { TournamentRangeRowProps } from './TournamentRangeRow.types';

export const TournamentRangeRow: React.FC<TournamentRangeRowProps> = memo(
  ({ row, discipline, monthCount, withParticipants, filters, onClickTournament }) => (
    <S.Root $monthCount={monthCount}>
      {row.months.map((month) => (
        <S.MonthCell key={month.id}>
          {month.fourths.map((fourth) => (
            <S.FourthCell key={fourth.id}>
              {fourth.event && (
                <TournamentRangeItem
                  key={fourth.event?.id}
                  withParticipants={withParticipants}
                  periodLength={fourth.periodLength}
                  tournament={fourth.event}
                  discipline={discipline}
                  onClickTournament={onClickTournament}
                  filters={filters}
                />
              )}
            </S.FourthCell>
          ))}
        </S.MonthCell>
      ))}
    </S.Root>
  ),
);
