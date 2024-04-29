import { lazy } from 'react';

const PasswordContent = lazy(() => import('./ui/PasswordContent/PasswordContent'));
const PageLayout = lazy(() => import('./ui/UserContent/PageLayout'));
const UserInfo = lazy(() => import('./ui/UserContent/ui/UserInfo/UserInfo'));
const AccountNotifications = lazy(
  () => import('./ui/UserContent/ui/AccountNotifications/AccountNotifications'),
);

export const Account = {
  PageLayout,
  PasswordContent,
  UserInfo,
  AccountNotifications,
};
