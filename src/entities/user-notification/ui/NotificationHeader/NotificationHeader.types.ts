import { CSSIndents } from '@/shared/types/styles.types';

export type HeaderProps = {
  padding?: CSSIndents;
  onReadAllUserNotifications: () => void;
};

export type StyledHeaderProps = {
  $padding?: CSSIndents;
};
