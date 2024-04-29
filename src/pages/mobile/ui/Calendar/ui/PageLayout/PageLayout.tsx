import { Suspense, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useCheckAccess } from '@/shared/lib';
import { Corporate, GameDiscipline, Match, Tournament } from '@/shared/types/entities.types';
import { CircularLoader } from '@/shared/ui/feedback';
import { CalendarDatesMenu, useDatesMobileMenuStore } from '@/widgets/mobile';

import * as S from './PageLayout.styles';

const PageLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const setEditingRequestType = useDatesMobileMenuStore((state) => state.setEditingRequestType);
  const checkAccess = useCheckAccess();

  // * Open the discipline edit modal by clicking on the discipline.
  const onClickDiscipline = useCallback((discipline: GameDiscipline) => {
    // setEditingRequestType({
    //   label: 'Discipline',
    //   value: 'discipline',
    //   additional: String(discipline.id),
    // });
  }, []);

  // * Navigate to the tournament page by clicking on the tournament.
  const onClickTournament = useCallback(
    (tournament: Tournament) => {
      navigate(`/calendar/tournament/${tournament.id}/main`, {
        state: { prevPath: location.pathname + location.search },
        preventScrollReset: true,
      });
    },
    [location.pathname, location.search, navigate],
  );

  const onClickMatch = useCallback(
    (match: Match) => {
      setEditingRequestType({
        label: 'Match',
        value: 'match',
        additional: String(match.id),
      });
    },
    [setEditingRequestType],
  );

  const onClickCorporate = useCallback(
    (corporate: Corporate) => {
      navigate(`/calendar/corporate/${corporate.id}/main`, {
        state: { prevPath: location.pathname + location.search },
        preventScrollReset: true,
      });
    },
    [location.pathname, location.search, navigate],
  );

  return (
    <S.Root>
      <CalendarDatesMenu />

      <Suspense fallback={<CircularLoader width="100%" size="36px" padding="16px" />}>
        <Outlet
          context={{
            onClickDiscipline: checkAccess([
              'get::/api/v1/gamedisciplines/:id/edit',
              'put::/api/v1/gamedisciplines/:id',
            ])
              ? onClickDiscipline
              : null,
            onClickTournament: checkAccess(['get::/api/v1/tournaments/:id'])
              ? onClickTournament
              : null,
            onClickCorporate: checkAccess(['get::/api/v1/corporates/:id'])
              ? onClickCorporate
              : null,
            onClickMatch: checkAccess(['get::/api/v1/matches/:id/edit', 'put::/api/v1/matches/:id'])
              ? onClickMatch
              : null,
          }}
        />
      </Suspense>
    </S.Root>
  );
};

export default PageLayout;
