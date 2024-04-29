import { memo, useCallback } from 'react';

import { CorporateItem } from '../CorporateItem/CorporateItem';
import { DisciplineTitle } from '../DisciplineTitle/DisciplineTitle';
import { TournamentItem } from '../TournamentItem/TournamentItem';
import * as S from './DisciplineItem.styles';
import { DisciplineItemProps } from './DisciplineItem.types';

export const DisciplineItem: React.FC<DisciplineItemProps> = memo(
  ({
    discipline,
    tournaments,
    corporates,
    filters,
    onClickDiscipline,
    onClickTournament,
    onClickCorporate,
    onClickMatch,
  }) => {
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
          title={discipline.title}
          logo={discipline.cover?.url}
          onClickDiscipline={onClickDiscipline ? onClickDisciplineTitle : null}
          borderWrapper={filters?.game_discipline?.includes(String(discipline.id))}
        />

        <S.TournamentList>
          {tournaments?.map((tournament) => (
            <TournamentItem
              key={tournament.id}
              tournament={tournament}
              filters={filters}
              onClickTournament={onClickTournament}
              onClickMatch={onClickMatch}
            />
          ))}

          {corporates?.map((corporate) => (
            <CorporateItem
              key={corporate.id}
              corporate={corporate}
              onClickCorporate={onClickCorporate}
            />
          ))}
        </S.TournamentList>
      </S.Root>
    );
  },
);
