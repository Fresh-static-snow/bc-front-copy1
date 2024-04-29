import { Fragment, memo, useCallback, useMemo } from 'react';

import { sortQuarterRangeRows } from '@/entities/calendar/lib';
import {
  CorporateInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';

import { CorporateRangeRowMobile } from '../CorporateRangeRow/CorporateRangeRow.mobile';
import { DisciplineTitle } from '../DisciplineTitle/DisciplineTitle';
import { TournamentRangeRowMobile } from '../TournamentRangeRow/TournamentRangeRow.mobile';
import * as S from './QuarterRangeItem.styles';
import { QuarterRangeItemProps } from './QuarterRangeItem.types';

export const QuarterRangeItemMobile: React.FC<QuarterRangeItemProps> = memo(
  ({
    activeDate,
    discipline,
    tournaments,
    corporates,
    filters,
    onClickDiscipline,
    onClickTournament,
    onClickCorporate,
  }) => {
    const tournamentRows = useMemo(() => {
      if (tournaments?.length > 0) {
        return tournaments?.map(({ tier, list }) => ({
          tier,
          list: sortQuarterRangeRows<TournamentInCalendarEntity>(activeDate, list),
        }));
      }
      return null;
    }, [activeDate, tournaments]);
    const corporateRows = useMemo(() => {
      if (corporates?.length > 0) {
        return corporates?.map(({ tier, list }) => ({
          tier,
          list: sortQuarterRangeRows<CorporateInCalendarEntity>(activeDate, list),
        }));
      }
      return null;
    }, [activeDate, corporates]);

    const onClickDisciplineTitle = useCallback(() => {
      if (!tournaments || tournaments?.length === 0) {
        return;
      }

      if (onClickDiscipline) {
        onClickDiscipline(discipline);
      }
    }, [discipline, onClickDiscipline, tournaments]);

    return (
      <S.Root>
        <DisciplineTitle
          title={discipline.keyword}
          logo={discipline.cover?.url}
          onClickDiscipline={onClickDiscipline ? onClickDisciplineTitle : null}
          borderWrapper={filters?.game_discipline?.includes(String(discipline.id))}
        />

        <S.RowList>
          {tournamentRows?.map(({ tier, list }) => (
            <Fragment key={tier}>
              {list?.map((row) => (
                <TournamentRangeRowMobile
                  key={row.id}
                  row={row}
                  discipline={discipline}
                  withParticipants
                  monthCount={3}
                  onClickTournament={onClickTournament}
                  filters={filters}
                />
              ))}
            </Fragment>
          ))}
          {corporateRows?.map(({ tier, list }) => (
            <Fragment key={tier}>
              {list?.map((row) => (
                <CorporateRangeRowMobile
                  key={row.id}
                  row={row}
                  monthCount={3}
                  onClickCorporate={onClickCorporate}
                />
              ))}
            </Fragment>
          ))}
        </S.RowList>
      </S.Root>
    );
  },
);
