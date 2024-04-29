import { Navigate, Route } from 'react-router-dom';

import { Management } from '@/pages/desktop';
import { AccessControl } from '@/shared/ui/misc';
import { NoPermissions } from '@/shared/ui/page-errors';

export const ManagementRoutes: React.ReactElement = (
  <Route
    path="management"
    element={
      <AccessControl
        method="some"
        necessaryPermissions={[
          'get::/api/v1/dashboard/counts',
          'get::/api/v1/dashboard/users',
          'get::/api/v1/dashboard/companies',
          'get::/api/v1/dashboard/notifications',
        ]}
        NoAccessComponent={<NoPermissions />}
      >
        <Management.PageLayout />
      </AccessControl>
    }
  >
    <Route index element={<Navigate to="/management/users" replace />} />

    <Route path="users" element={<Management.UsersContent />}>
      <Route index element={<Management.UsersSubContentDashboard />} />

      <Route
        path="user/:userId"
        element={
          <AccessControl
            necessaryPermissions={['get::/api/v1/users/:id']}
            NoAccessComponent={<NoPermissions />}
          >
            <Management.UsersSubContentUser />
          </AccessControl>
        }
      />

      <Route
        path="company/:companyId/edit/user?/:userId?"
        element={
          <AccessControl
            necessaryPermissions={['get::/api/v1/users/:id', 'get::/api/v1/usercompanies/:id/edit']}
            NoAccessComponent={<NoPermissions />}
          >
            <Management.UsersSubContentUserCompany />
          </AccessControl>
        }
      />

      <Route
        path="active/entity/role"
        element={
          <AccessControl
            necessaryPermissions={['get::/api/v1/roles']}
            NoAccessComponent={<NoPermissions />}
          >
            <Management.SubContentSimpleItems />
          </AccessControl>
        }
      />

      <Route
        path="deleted"
        element={
          <AccessControl necessaryPermissions={[]} NoAccessComponent={<NoPermissions />}>
            <Management.UsersSubContentDeletedUsers />
          </AccessControl>
        }
      />
    </Route>

    <Route path="items" element={<Management.ItemsContent />}>
      <Route path="active/entity/:type" element={<Management.SubContentSimpleItems />} />

      <Route path="active/branding" element={<Management.ItemsSubContentBranding />} />

      <Route
        path="deleted/calendar-entity/:type"
        element={<Management.ItemsSubContentDeletedCalendarItems />}
      />

      <Route
        path="deleted/entity/:type"
        element={<Management.ItemsSubContentDeletedSimpleItems />}
      />
    </Route>
  </Route>
);
