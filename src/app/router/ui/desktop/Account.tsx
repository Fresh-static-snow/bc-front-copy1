import { Route } from 'react-router-dom';

import { Account } from '@/pages/desktop';

export const AccountRoutes: React.ReactElement = (
  <Route path="account" element={<Account.PageLayout />}>
    <Route index element={<Account.UserContent />} />
    <Route path="password" element={<Account.PasswordContent />} />
  </Route>
);
