import { Route } from 'react-router-dom';

import { DetailedSegment } from '@/pages/desktop';
import { AccessControl } from '@/shared/ui/misc';
import { NoPermissions } from '@/shared/ui/page-errors';

export const DetailedSegmentRoutes: React.ReactElement = (
  <Route
    path="calendar/segment/:id"
    element={
      <AccessControl
        necessaryPermissions={['get::/api/v1/tournaments/:id']}
        NoAccessComponent={<NoPermissions />}
      >
        <DetailedSegment.PageLayout />
      </AccessControl>
    }
  >
    <Route path="main" element={<DetailedSegment.MainContent />} />
    <Route path="media" element={<DetailedSegment.MediaContent />} />
    <Route path="comments" element={<DetailedSegment.CommentsContent />} />
  </Route>
);
