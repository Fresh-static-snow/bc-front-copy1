import { Route } from 'react-router-dom';

import { DetailedTournament } from '@/pages/desktop';
import { AccessControl } from '@/shared/ui/misc';
import { NoPermissions } from '@/shared/ui/page-errors';

export const DetailedTournamentRoutes: React.ReactElement = (
  <Route
    path="calendar/tournament/:id"
    element={
      <AccessControl
        necessaryPermissions={['get::/api/v1/tournaments/:id']}
        NoAccessComponent={<NoPermissions />}
      >
        <DetailedTournament.PageLayout />
      </AccessControl>
    }
  >
    <Route path="main" element={<DetailedTournament.MainContent />} />
    <Route path="media" element={<DetailedTournament.MediaContent />} />
    <Route path="schedule" element={<DetailedTournament.ScheduleContent />} />
    <Route path="comments" element={<DetailedTournament.CommentsContent />} />
  </Route>
);
