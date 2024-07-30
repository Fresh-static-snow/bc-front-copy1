import { Suspense, useCallback } from 'react';
import { GetScrollRestorationKeyFunction, Outlet, ScrollRestoration } from 'react-router-dom';

import { ConfirmGoogleCalendarIntegration } from '@/features/google-integration';
import { useWebSocketNotifications } from '@/shared/lib/hooks/useWebSocketNotifications/useWebSocketNotifications.hook';
import { CircularLoader } from '@/shared/ui/feedback';

import * as S from './Layout.styles';

export const Layout: React.FC = () => {
  useWebSocketNotifications();

  const getKey: GetScrollRestorationKeyFunction = useCallback((location) => {
    const key = location.pathname + location.search;
    return key;
  }, []);

  return (
    <>
      <ConfirmGoogleCalendarIntegration />

      <S.AppContent>
        <Suspense fallback={<CircularLoader width="100%" height="100%" size="36px" />}>
          <Outlet />
        </Suspense>
      </S.AppContent>

      <ScrollRestoration getKey={getKey} />
    </>
  );
};
