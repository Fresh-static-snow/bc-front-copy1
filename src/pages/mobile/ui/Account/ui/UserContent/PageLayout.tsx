import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';
import { AccountMenu } from '@/widgets/mobile';

const PageLayout: React.FC = () => (
  <>
    <AccountMenu />

    <Suspense fallback={<CircularLoader width="100%" height="100%" size="36px" />}>
      <Outlet />
    </Suspense>
  </>
);

export default PageLayout;
