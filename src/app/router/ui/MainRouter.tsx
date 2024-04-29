import { Suspense } from 'react';

import { mobileMedia } from '@/shared/const';
import { useMediaQuery } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { DesktopRouter } from './desktop/Root';
import { MobileRouter } from './mobile/Root';

export const MainRouter: React.FC = () => {
  const isMobile = useMediaQuery(mobileMedia);

  if (isMobile) {
    return (
      <Suspense fallback={<CircularLoader width="100%" height="100dvh" size="36px" />}>
        <MobileRouter />
      </Suspense>
    );
  }

  if (isMobile === false) {
    return (
      <Suspense fallback={<CircularLoader width="100%" height="100dvh" size="36px" />}>
        <DesktopRouter />
      </Suspense>
    );
  }

  return null;
};
