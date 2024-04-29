import { lazy } from 'react';

const CommentsContent = lazy(() => import('./ui/CommentsContent/CommentsContent'));
const MainContent = lazy(() => import('./ui/MainContent/MainContent'));
const MediaContent = lazy(() => import('./ui/MediaContent/MediaContent'));
const PageLayout = lazy(() => import('./ui/PageLayout/PageLayout'));
const ScheduleContent = lazy(() => import('./ui/ScheduleContent/ScheduleContent'));

export const DetailedTournament = {
  PageLayout,
  ScheduleContent,
  MainContent,
  MediaContent,
  CommentsContent,
};
