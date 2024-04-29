import { Navigate, Route } from 'react-router-dom';

import { Account } from '@/pages/mobile';

export const AccountRoutes: React.ReactElement = (
  <Route path="account" element={<Account.PageLayout />}>
    <Route index element={<Account.UserInfo />} />
    <Route path="password" element={<Account.PasswordContent />} />
    <Route path="notification" element={<Account.AccountNotifications />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Route>
);
