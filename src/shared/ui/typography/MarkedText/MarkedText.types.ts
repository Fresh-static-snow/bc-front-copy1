import { HEX } from '@/shared/types/styles.types';

export type MarkedTextProps = {
  children: React.ReactNode;
  color?: HEX;
};

export type StyledRootProps = {
  $color?: HEX;
};
