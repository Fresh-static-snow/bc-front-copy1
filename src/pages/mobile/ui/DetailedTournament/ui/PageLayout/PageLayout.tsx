import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';
import { TournamentMenu } from '@/widgets/mobile';

const PageLayout: React.FC = () => (
  <>
    <TournamentMenu />

    <Suspense fallback={<CircularLoader width="100%" size="36px" padding="16px" />}>
      <Outlet />
    </Suspense>
  </>
);

export default PageLayout;
