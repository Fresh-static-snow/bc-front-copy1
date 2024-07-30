import { CSSProperties } from 'react';

export type HeaderProps = {
  padding?: CSSProperties['padding'];
  onReadAllUserNotifications: () => void;
};

export type StyledHeaderProps = {
  $padding?: CSSProperties['padding'];
};
