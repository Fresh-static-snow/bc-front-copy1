import { lazy } from 'react';

const PageLayout = lazy(() => import('./ui/PageLayout/PageLayout'));
const PasswordContent = lazy(() => import('./ui/PasswordContent/PasswordContent'));
const UserContent = lazy(() => import('./ui/UserContent/UserContent'));
const BotIntegrationContent = lazy(
  () => import('./ui/BotIntegrationContent/BotIntegrationContent'),
);

export const Account = {
  PageLayout,
  PasswordContent,
  UserContent,
  BotIntegrationContent,
};
