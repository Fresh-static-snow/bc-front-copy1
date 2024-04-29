import { Fragment, memo, useCallback, useMemo } from 'react';

import {
  CorporateInCalendarEntity,
  TournamentInCalendarEntity,
} from '@/shared/types/entities.types';

import { sortYearRangeRows } from '../../lib';
import { CorporateRangeRowMobile } from '../CorporateRangeRow/CorporateRangeRow.mobile';
import { DisciplineTitle } from '../DisciplineTitle/DisciplineTitle';
import { TournamentRangeRowMobile } from '../TournamentRangeRow/TournamentRangeRow.mobile';
import * as S from './YearRangeItem.styles';
import { YearRangeItemProps } from './YearRangeItem.types';

export const YearRangeItemMobile: React.FC<YearRangeItemProps> = memo(
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
          list: sortYearRangeRows<TournamentInCalendarEntity>(activeDate, list),
        }));
      }
      return null;
    }, [activeDate, tournaments]);
    const corporateRows = useMemo(() => {
      if (corporates?.length > 0) {
        return corporates?.map(({ tier, list }) => ({
          tier,
          list: sortYearRangeRows<CorporateInCalendarEntity>(activeDate, list),
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
                  monthCount={12}
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
                  monthCount={12}
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
