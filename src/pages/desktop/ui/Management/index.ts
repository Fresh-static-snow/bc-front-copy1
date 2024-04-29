import { lazy } from 'react';

const ItemsContent = lazy(() => import('./ui/ItemsContent/ItemsContent'));
const ItemsSubContentBranding = lazy(
  () => import('./ui/ItemsSubContentBranding/ItemsSubContentBranding'),
);
const ItemsSubContentDeletedCalendarItems = lazy(
  () => import('./ui/ItemsSubContentDeletedCalendarItems/ItemsSubContentDeletedCalendarItems'),
);
const ItemsSubContentDeletedSimpleItems = lazy(
  () => import('./ui/ItemsSubContentDeletedSimpleItems/ItemsSubContentDeletedSimpleItems'),
);
const PageLayout = lazy(() => import('./ui/PageLayout/PageLayout'));
const SubContentSimpleItems = lazy(
  () => import('./ui/SubContentSimpleItems/SubContentSimpleItems'),
);
const UsersContent = lazy(() => import('./ui/UsersContent/UsersContent'));
const UsersSubContentDashboard = lazy(
  () => import('./ui/UsersSubContentDashboard/UsersSubContentDashboard'),
);
const UsersSubContentDeletedUsers = lazy(
  () => import('./ui/UsersSubContentDeletedUsers/UsersSubContentDeletedUsers'),
);
const UsersSubContentUser = lazy(() => import('./ui/UsersSubContentUser/UsersSubContentUser'));
const UsersSubContentUserCompany = lazy(
  () => import('./ui/UsersSubContentUserCompany/UsersSubContentUserCompany'),
);

export const Management = {
  PageLayout,
  UsersContent,
  UsersSubContentDashboard,
  UsersSubContentUser,
  UsersSubContentUserCompany,
  UsersSubContentDeletedUsers,
  SubContentSimpleItems,
  ItemsContent,
  ItemsSubContentBranding,
  ItemsSubContentDeletedCalendarItems,
  ItemsSubContentDeletedSimpleItems,
};
