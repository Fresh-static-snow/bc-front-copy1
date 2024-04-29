import dayjs from 'dayjs';
import { Navigate, Route } from 'react-router-dom';

import { Calendar } from '@/pages/desktop';
import { AccessControl } from '@/shared/ui/misc';
import { NoPermissions } from '@/shared/ui/page-errors';

export const CalendarRoutes: React.ReactElement = (
  <Route
    path="calendar"
    element={
      <AccessControl
        method="some"
        necessaryPermissions={[
          'get::/api/v1/calendar?scope=day',
          'get::/api/v1/calendar?scope=week',
          'get::/api/v1/calendar?scope=month',
          'get::/api/v1/calendar?scope=quarter',
          'get::/api/v1/calendar?scope=year',
        ]}
        NoAccessComponent={<NoPermissions />}
      >
        <Calendar.PageLayout />
      </AccessControl>
    }
  >
    <Route
      index
      element={
        <Navigate
          to={{
            pathname: '/calendar/day',
            search: `start_at=${dayjs().format('YYYY-MM-DD')}&current_user=true`,
          }}
          replace
        />
      }
    />

    <Route
      path="day"
      element={
        <AccessControl
          necessaryPermissions={['get::/api/v1/calendar?scope=day']}
          NoAccessComponent={
            <Navigate
              to={{
                pathname: '/calendar/week',
                search: `start_at=${dayjs().format('YYYY-MM-DD')}&current_user=true`,
              }}
              replace
            />
          }
        >
          <Calendar.DayContent />
        </AccessControl>
      }
    />

    <Route
      path="week"
      element={
        <AccessControl
          necessaryPermissions={['get::/api/v1/calendar?scope=week']}
          NoAccessComponent={
            <Navigate
              to={{
                pathname: '/calendar/month',
                search: `start_at=${dayjs().format('YYYY-MM-DD')}&current_user=true`,
              }}
              replace
            />
          }
        >
          <Calendar.WeekContent />
        </AccessControl>
      }
    />

    <Route
      path="month"
      element={
        <AccessControl
          necessaryPermissions={['get::/api/v1/calendar?scope=month']}
          NoAccessComponent={
            <Navigate
              to={{
                pathname: '/calendar/quarter',
                search: `start_at=${dayjs().format('YYYY-MM-DD')}&current_user=true`,
              }}
              replace
            />
          }
        >
          <Calendar.MonthContent />
        </AccessControl>
      }
    />

    <Route
      path="quarter"
      element={
        <AccessControl
          necessaryPermissions={['get::/api/v1/calendar?scope=quarter']}
          NoAccessComponent={
            <Navigate
              to={{
                pathname: '/calendar/year',
                search: `start_at=${dayjs().format('YYYY-MM-DD')}&current_user=true`,
              }}
              replace
            />
          }
        >
          <Calendar.QuarterContent />
        </AccessControl>
      }
    />

    <Route
      path="year"
      element={
        <AccessControl
          necessaryPermissions={['get::/api/v1/calendar?scope=year']}
          NoAccessComponent={
            <Navigate
              to={{
                pathname: '/calendar/day',
                search: `start_at=${dayjs().format('YYYY-MM-DD')}&current_user=true`,
              }}
              replace
            />
          }
        >
          <Calendar.YearContent />
        </AccessControl>
      }
    />
  </Route>
);
