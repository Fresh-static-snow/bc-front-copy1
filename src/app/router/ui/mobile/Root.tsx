import * as Sentry from '@sentry/react';
import { useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { useAuthStore } from '@/shared/model/auth/auth.store';
import { PageNotFound } from '@/shared/ui/page-errors';
import { AuthedPageLayout } from '@/widgets/mobile';

import { LoginRoutes } from '../desktop/Login';
import { AccountRoutes } from './Account';
import { CalendarRoutes } from './Calendar';
import { DetailedCorporateRoutes } from './DetailedCorporate';
import { DetailedTournamentRoutes } from './DetailedTournament';

const sentryCreateBrowserRouter = Sentry.wrapCreateBrowserRouter(createBrowserRouter);

export const MobileRouter: React.FC = () => {
  const authedUser = useAuthStore((state) => state.authedUser);

  const mainRouter = sentryCreateBrowserRouter(
    createRoutesFromElements(
      <>
        {/* <Route path="telegram/:chatId" element={<Account.TelegramContent />} /> */}
        <Route path="login" element={<Navigate to="/calendar" replace />} />
        <Route path="invitation/accept" element={<Navigate to="/calendar" replace />} />
        <Route path="password/email-checking" element={<Navigate to="/calendar" replace />} />
        <Route path="password/reset" element={<Navigate to="/calendar" replace />} />

        <Route path="/" element={<AuthedPageLayout />}>
          <Route index element={<Navigate to="/calendar" replace />} />

          {CalendarRoutes}

          {AccountRoutes}

          {DetailedTournamentRoutes}

          {DetailedCorporateRoutes}

          {/* {ManagementRoutes} */}
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </>,
    ),
  );

  const loginRouter = sentryCreateBrowserRouter(createRoutesFromElements(LoginRoutes));
  const router = useMemo(() => {
    if (authedUser) {
      return mainRouter;
    }

    return loginRouter;
  }, [authedUser, loginRouter, mainRouter]);

  return <RouterProvider router={router} />;
};
