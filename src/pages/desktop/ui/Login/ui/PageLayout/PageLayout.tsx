import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';

import * as S from './PageLayout.styles';

const PageLayout: React.FC = () => (
  <S.Root>
    <Suspense fallback={<CircularLoader width="100%" height="100%" size="36px" />}>
      <Outlet />
    </Suspense>
  </S.Root>
);

export default PageLayout;
