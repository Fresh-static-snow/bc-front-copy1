import { lazy } from 'react';

const CommentsContent = lazy(() => import('./ui/CommentsContent/CommentsContent'));
const MainContent = lazy(() => import('./ui/MainContent/MainContent'));
const MediaContent = lazy(() => import('./ui/MediaContent/MediaContent'));
const PageLayout = lazy(() => import('./ui/PageLayout/PageLayout'));

export const DetailedSegment = {
  PageLayout,
  MainContent,
  MediaContent,
  CommentsContent,
};
