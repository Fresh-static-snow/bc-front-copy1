import * as Sentry from '@sentry/react';
import { useEffect } from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

const dsn = import.meta.env.VITE_SENTRY_DSN;
const tracePropagationTargets = import.meta.env.VITE_SENTRY_PROPAGATION_TARGETS;
const environment = import.meta.env.VITE_ENVIRONMENT;

if (dsn && tracePropagationTargets) {
  Sentry.init({
    environment,
    dsn,
    tracePropagationTargets: tracePropagationTargets.split(', '),
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.reactRouterV6BrowserTracingIntegration({
        useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes,
      }),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 0.025,
    replaysSessionSampleRate: 0.025,
    replaysOnErrorSampleRate: 1.0,
  });
}
