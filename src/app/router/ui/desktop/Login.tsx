import { Navigate, Route } from 'react-router-dom';

import { Login } from '@/pages/desktop';

export const LoginRoutes: React.ReactElement = (
  <Route path="/" element={<Login.PageLayout />}>
    <Route index element={<Navigate to="/login" replace />} />

    <Route path="login" element={<Login.LoginContent />} />
    <Route path="invitation/accept" element={<Login.InvitationContent />} />
    <Route path="password/email-checking" element={<Login.EmailCheckingContent />} />
    <Route path="password/reset" element={<Login.ResetPasswordContent />} />

    <Route path="*" element={<Navigate to="/login" replace />} />
  </Route>
);
