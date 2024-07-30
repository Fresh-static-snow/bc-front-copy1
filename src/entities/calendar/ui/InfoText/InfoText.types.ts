import { HEX } from '@/shared/types/styles.types';

export type Item = {
  name: string;
  marked?: boolean;
};

export type InfoTextProps = {
  itemList?: Item[];
  color?: HEX;
  isVisible?: boolean;
};
