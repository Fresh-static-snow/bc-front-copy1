import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { SlicedContentLayout } from '@/shared/ui/layouts';

import { bodyTemplates } from './ItemsSubContentDeletedCalendarItems.const';

const ItemsSubContentDeletedCalendarItems: React.FC = () => {
  const location = useLocation();
  const match = matchPath('/management/:items/deleted/calendar-entity/:type', location.pathname);
  const ActiveTemplate = useMemo(() => bodyTemplates[match?.params?.type], [match?.params?.type]);

  return (
    <SlicedContentLayout.Section width="608px" borderRight>
      {!!ActiveTemplate && <ActiveTemplate />}
    </SlicedContentLayout.Section>
  );
};

export default ItemsSubContentDeletedCalendarItems;
