import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';
import { CorporateMenu } from '@/widgets/desktop';

const PageLayout: React.FC = () => (
  <>
    <CorporateMenu />

    <Suspense fallback={<CircularLoader width="100%" size="36px" padding="16px" />}>
      <Outlet />
    </Suspense>
  </>
);

export default PageLayout;
