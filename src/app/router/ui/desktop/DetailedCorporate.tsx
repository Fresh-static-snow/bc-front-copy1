import { Route } from 'react-router-dom';

import { DetailedCorporate } from '@/pages/desktop';
import { AccessControl } from '@/shared/ui/misc';
import { NoPermissions } from '@/shared/ui/page-errors';

export const DetailedCorporateRoutes: React.ReactElement = (
  <Route
    path="calendar/corporate/:id"
    element={
      <AccessControl
        necessaryPermissions={['get::/api/v1/corporates/:id']}
        NoAccessComponent={<NoPermissions />}
      >
        <DetailedCorporate.PageLayout />
      </AccessControl>
    }
  >
    <Route path="main" element={<DetailedCorporate.MainContent />} />
    <Route path="comments" element={<DetailedCorporate.CommentsContent />} />
  </Route>
);
