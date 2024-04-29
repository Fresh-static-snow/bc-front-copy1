import dayjs from 'dayjs';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { useOnScreen } from '@/shared/lib';
import { useVisibleItems } from '@/shared/model/useVisibleItems.store';

import { CorporateItemMobile } from '../CorporateItem/CorporateItem.mobile';
import { DisciplineTitleMobile } from '../DisciplineTitle/DisciplineTitle.mobile';
import { TournamentItemMobile } from '../TournamentItem/TournamentItem.mobile';
import * as S from './DisciplineItem.styles';
import { DisciplineItemMobileProps } from './DisciplineItem.types';

export const DisciplineItemMobile: React.FC<DisciplineItemMobileProps> = memo(
  ({
    discipline,
    tournaments,
    corporates,
    filters,
    day,
    onClickDiscipline,
    onClickTournament,
    onClickCorporate,
    onClickMatch,
  }) => {
    const setVisible = useVisibleItems((s) => s.setVisible);
    const location = useLocation();
    const matchWeek = matchPath('/calendar/week', location.pathname);
    const matchMonth = matchPath('/calendar/month', location.pathname);
    const matchDay = matchPath('/calendar/day', location.pathname);

    const refDisciplineTitle = useRef();
    const isVisibleDisciplineTitle = useOnScreen(refDisciplineTitle, {
      threshold: 0,
      rootMargin: `-${matchWeek ? 124 : 80}px 0px 0px 0px`,
    });

    const refTournamentList = useRef();
    const isVisibleTournamentList = useOnScreen(refTournamentList, {
      threshold: 0,
      rootMargin: `-${matchWeek ? 168 : 124}px 0px -${window.innerHeight - 168 - 40}px  0px`,
    });

    const onClickDisciplineTitle = useCallback(() => {
      if (!tournaments || tournaments?.length === 0) {
        return;
      }

      if (onClickDiscipline) {
        onClickDiscipline(discipline);
      }
    }, [discipline, onClickDiscipline, tournaments]);

    useEffect(() => {
      if (isVisibleTournamentList && day?.date) {
        setVisible('visibleDate', dayjs(day.date).toString());
      }
    }, [isVisibleTournamentList, day?.date]);

    const [disciplineTitle, setDisciplineTitle] = useState<string>(
      discipline?.title?.length ? discipline?.title : '---',
    );

    return (
      <S.RootMobile id={`WeekItem-${dayjs(day?.date).format('D')}`}>
        <DisciplineTitleMobile
          ref={refDisciplineTitle}
          title={disciplineTitle}
          onClickDiscipline={onClickDiscipline ? onClickDisciplineTitle : null}
          top={matchWeek || matchMonth ? '124px' : '68px'}
        />

        <S.TournamentListMobile ref={refTournamentList}>
          {tournaments?.map((tournament, index) => (
            <TournamentItemMobile
              index={index}
              key={tournament.id}
              discipline={discipline}
              tournament={tournament}
              filters={filters}
              onClickTournament={onClickTournament}
              onClickMatch={onClickMatch}
              setDisciplineTitle={setDisciplineTitle}
              isVisibleDisciplineTitle={isVisibleDisciplineTitle}
            />
          ))}

          {corporates?.map((corporate) => (
            <CorporateItemMobile
              key={corporate.id}
              discipline={discipline}
              corporate={corporate}
              onClickCorporate={onClickCorporate}
            />
          ))}
        </S.TournamentListMobile>
      </S.RootMobile>
    );
  },
);
