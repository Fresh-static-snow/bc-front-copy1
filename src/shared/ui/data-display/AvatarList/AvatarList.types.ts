import { CSSColor } from '@/shared/types/styles.types';

export type Person = {
  id: number | string;
  name?: string;
  image: string;
  additionalBorder?: boolean;
  crownIcon?: boolean;
};

export type AvatarListProps = {
  color: CSSColor;
  people: Person[];
  avatarSize?: number;
  position?: 'left' | 'center' | 'right';
  /**
   * The list of filters.
   * @default []
   */
  filterList?: string[];
};

export type StyledRootProps = {
  $position?: 'left' | 'center' | 'right';
};
