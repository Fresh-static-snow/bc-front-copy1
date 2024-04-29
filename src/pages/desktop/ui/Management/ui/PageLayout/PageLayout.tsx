import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { ManagementMenu } from '@/widgets/desktop';

import { ContentWrapper } from '../ContentWrapper/ContentWrapper';

const PageLayout: React.FC = () => (
  <>
    <ManagementMenu />

    <ContentWrapper>
      <Suspense fallback={<CircularLoader width="100%" size="36px" padding="16px" />}>
        <SlicedContentLayout.Body padding="0">
          <Outlet />
        </SlicedContentLayout.Body>
      </Suspense>
    </ContentWrapper>
  </>
);

export default PageLayout;
