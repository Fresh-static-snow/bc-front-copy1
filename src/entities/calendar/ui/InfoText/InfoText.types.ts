import { HEX } from '@/shared/types/styles.types';

export type InfoTextProps = {
  text?: string;
  textList?: string[];
  color?: HEX;
  isVisible?: boolean;
  marked?: boolean;
  markedItems?: string[];
};
