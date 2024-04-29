import { useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';

import { Account } from '@/pages/desktop';
import { useAuthStore } from '@/shared/model/auth/auth.store';
import { PageNotFound } from '@/shared/ui/page-errors';
import { AuthedPageLayout } from '@/widgets/desktop';

import { AccountRoutes } from './Account';
import { CalendarRoutes } from './Calendar';
import { DetailedCorporateRoutes } from './DetailedCorporate';
import { DetailedTournamentRoutes } from './DetailedTournament';
import { LoginRoutes } from './Login';
import { ManagementRoutes } from './Management';

export const DesktopRouter: React.FC = () => {
  const authedUser = useAuthStore((state) => state.authedUser);

  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path=":botPlatform/:chatId" element={<Account.BotIntegrationContent />} />
        <Route path="login" element={<Navigate to="/calendar" replace />} />
        <Route path="invitation/accept" element={<Navigate to="/calendar" replace />} />
        <Route path="password/email-checking" element={<Navigate to="/calendar" replace />} />
        <Route path="password/reset" element={<Navigate to="/calendar" replace />} />

        <Route path="/" element={<AuthedPageLayout />}>
          <Route index element={<Navigate to="/calendar" replace />} />

          {CalendarRoutes}

          {DetailedTournamentRoutes}

          {DetailedCorporateRoutes}

          {ManagementRoutes}

          {AccountRoutes}

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </>,
    ),
  );

  const loginRouter = createBrowserRouter(createRoutesFromElements(LoginRoutes));
  const router = useMemo(() => {
    if (authedUser) {
      return mainRouter;
    }

    return loginRouter;
  }, [authedUser, loginRouter, mainRouter]);

  return <RouterProvider router={router} />;
};
