import { HEX } from '@/shared/types/styles.types';

export type InfoTextWithBadgeProps = {
  firstText: string;
  secondText: string;
  badgeText: string;
  color?: HEX;
  isVisible?: boolean;
  firstTextFilter?: boolean;
  secondTextFilter?: boolean;
};
