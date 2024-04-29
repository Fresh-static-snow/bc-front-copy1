import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { ManagementUsersSideMenu } from '@/widgets/desktop';

const UsersContent: React.FC = () => (
  <>
    <SlicedContentLayout.Section
      width="340px"
      backgroundColor="transparent"
      borderRight
      scrollActive={false}
    >
      <ManagementUsersSideMenu />
    </SlicedContentLayout.Section>

    <Suspense
      fallback={
        <SlicedContentLayout.Section
          width="calc(100% - 340px)"
          backgroundColor="transparent"
          fragments={2}
        >
          <CircularLoader width="100%" size="36px" padding="16px" />
        </SlicedContentLayout.Section>
      }
    >
      <Outlet />
    </Suspense>
  </>
);

export default UsersContent;
