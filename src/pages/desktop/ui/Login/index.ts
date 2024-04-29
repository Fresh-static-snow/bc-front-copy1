import { lazy } from 'react';

const EmailCheckingContent = lazy(() => import('./ui/EmailCheckingContent/EmailCheckingContent'));
const InvitationContent = lazy(() => import('./ui/InvitationContent/InvitationContent'));
const LoginContent = lazy(() => import('./ui/LoginContent/LoginContent'));
const PageLayout = lazy(() => import('./ui/PageLayout/PageLayout'));
const ResetPasswordContent = lazy(() => import('./ui/ResetPasswordContent/ResetPasswordContent'));

export const Login = {
  EmailCheckingContent,
  InvitationContent,
  LoginContent,
  PageLayout,
  ResetPasswordContent,
};
