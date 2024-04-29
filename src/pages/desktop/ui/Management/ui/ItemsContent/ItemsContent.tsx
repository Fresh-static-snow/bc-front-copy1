import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CircularLoader } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { ManagementItemsSideMenu } from '@/widgets/desktop';

const ItemsContent: React.FC = () => (
  <>
    <SlicedContentLayout.Section width="340px" backgroundColor="transparent" borderRight>
      <ManagementItemsSideMenu />
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

export default ItemsContent;
