import { IconCalendarSvg, IconGridSvg, IconUserSvg } from '@/shared/assets';

export const mainLinks = [
  // {
  //   id: 1,
  //   href: '/work-shift',
  //   pathString: 'work-shift',
  //   Icon: IconClockSvg,
  //   label: 'Work shift',
  // },
  {
    id: 2,
    href: '/calendar',
    pathString: '/calendar/',
    Icon: IconCalendarSvg,
    label: 'Calendar',
    permissions: [
      'get::/api/v1/calendar?scope=day',
      'get::/api/v1/calendar?scope=week',
      'get::/api/v1/calendar?scope=month',
      'get::/api/v1/calendar?scope=quarter',
      'get::/api/v1/calendar?scope=year',
    ],
  },
  {
    id: 3,
    href: '/management/users',
    pathString: '/management/',
    Icon: IconGridSvg,
    label: 'Management',
    permissions: [
      'get::/api/v1/dashboard/counts',
      'get::/api/v1/dashboard/users',
      'get::/api/v1/dashboard/companies',
      'get::/api/v1/dashboard/notifications',
    ],
  },
];

export const userLinks = [
  {
    id: 1,
    href: '/account',
    pathString: '/account',
    Icon: IconUserSvg,
    label: 'View Account',
    permissions: [],
  },
  // {
  // id: 2,
  // href: '/account/settings',
  // pathString: '/account/settings',
  // Icon: IconSliderSvg,
  // label: 'Settings',
  // permissions: [],
  // },
];
