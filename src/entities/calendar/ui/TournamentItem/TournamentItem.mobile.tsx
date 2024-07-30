import { useTheme } from '@emotion/react';
import { ElementRef, memo, useCallback, useEffect, useMemo, useRef } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { matchItemEmpty } from '@/entities/calendar/const';
import { useOnScreen } from '@/shared/lib';
import { BackgroundColor } from '@/shared/ui/data-display';

import { MatchItemMobile } from '../MatchItem/MatchItem.mobile';
import { TournamentTitleMobile } from '../TournamentTitle/TournamentTitle.mobile';
import * as S from './TournamentItem.styles';
import { TournamentItemMobileProps } from './TournamentItem.types';

export const TournamentItemMobile: React.FC<TournamentItemMobileProps> = memo(
  ({
    discipline,
    tournament,
    filters,
    onClickTournament,
    onClickMatch,
    setDisciplineTitle,
    isVisibleDisciplineTitle,
    index,
  }) => {
    const theme = useTheme();
    const color = useMemo(
      () => tournament.ui_template?.primary || theme.appColors.palette_01,
      [theme.appColors.palette_01, tournament.ui_template?.primary],
    );
    const location = useLocation();
    const matchWeek = matchPath('/calendar/week', location.pathname);

    // * If there are no matches in the tournament, then we add an empty match.
    const tournamentMatches = useMemo(
      () => (tournament?.matches?.length > 0 ? tournament.matches : [matchItemEmpty]),
      [tournament.matches],
    );

    const onClickTournamentTitle = useCallback(() => {
      if (onClickTournament) {
        onClickTournament(tournament);
      }
    }, [onClickTournament, tournament]);

    const refTournamentMatches = useRef<ElementRef<'ul'>>();
    const isVisibleTournamentMatches = useOnScreen(refTournamentMatches, {
      threshold: 0,
      rootMargin: `-${matchWeek ? 168 : 124}px 0px 0px 0px`,
    });

    const refTournamentFirstMatch = useRef<ElementRef<'li'>>();
    const isVisibleTournamentFirstMatch = useOnScreen(refTournamentFirstMatch, {
      threshold: 1,
      rootMargin: `-${matchWeek ? 168 : 124}px 0px 0px 0px`,
    });

    const refTournamentTitle = useRef<ElementRef<'button'>>();
    const isVisibleTournamentTitle = useOnScreen(refTournamentTitle, {
      threshold: 0,
      rootMargin: `-${matchWeek ? 194 : 150}px 0px 0px 0px`,
    });

    const tournamentInScreenOrHigher =
      refTournamentTitle.current?.getBoundingClientRect().y < window.innerHeight;

    useEffect(() => {
      const renderBreadcrumb =
        isVisibleDisciplineTitle &&
        !isVisibleTournamentTitle &&
        tournamentInScreenOrHigher &&
        isVisibleTournamentMatches;

      if (renderBreadcrumb) {
        if (discipline?.title?.length && tournament?.title) {
          setDisciplineTitle(`${discipline?.title} • ${tournament?.title}`);
        }

        if (discipline?.title?.length && !tournament?.title) {
          setDisciplineTitle(discipline?.title ?? '---');
        }

        if (!discipline?.title?.length && !tournament?.title) {
          setDisciplineTitle(discipline?.title ?? '---');
        }

        if (!discipline?.title?.length && tournament?.title) {
          setDisciplineTitle(discipline?.title ?? '---');
        }
      }

      if (!isVisibleDisciplineTitle && !isVisibleTournamentTitle && !tournamentInScreenOrHigher) {
        setDisciplineTitle(discipline?.title ?? '---');
      }

      const renderTitle =
        isVisibleDisciplineTitle &&
        isVisibleTournamentTitle &&
        tournamentInScreenOrHigher &&
        isVisibleTournamentMatches &&
        isVisibleTournamentFirstMatch;

      if (renderTitle) {
        setDisciplineTitle(discipline?.title ?? '---');
      }
    }, [
      isVisibleDisciplineTitle,
      isVisibleTournamentTitle,
      discipline?.title,
      tournament?.title,
      tournamentInScreenOrHigher,
      isVisibleTournamentMatches,
      isVisibleTournamentFirstMatch,
    ]);

    return (
      <S.RootMobile>
        <S.LineMobile $color={color} />

        <BackgroundColor baseColor={color} stripes={false} borderRadius={false}>
          <TournamentTitleMobile
            ref={refTournamentTitle}
            title={tournament.title}
            color={color}
            isVisible={tournament.visible}
            onClickTournament={onClickTournament ? onClickTournamentTitle : null}
          />
        </BackgroundColor>

        <S.MatchListMobile ref={refTournamentMatches}>
          {tournamentMatches?.map((match, matchIndex) => (
            <MatchItemMobile
              ref={matchIndex === 0 && index === 0 ? refTournamentFirstMatch : null}
              key={match.id}
              discipline={discipline}
              tournament={tournament}
              match={match}
              color={color}
              filters={filters}
              onClickMatch={onClickMatch}
            />
          ))}
        </S.MatchListMobile>
      </S.RootMobile>
    );
  },
);
