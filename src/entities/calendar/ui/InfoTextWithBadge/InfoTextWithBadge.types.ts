import { HEX } from '@/shared/types/styles.types';

export type Row = {
  key?: string;
  text: string;
  filter?: boolean;
};

export type InfoTextWithBadgeProps = {
  rows?: Row[];
  withBadge?: boolean;
  badgeText?: string;
  color?: HEX;
  isVisible?: boolean;
};
