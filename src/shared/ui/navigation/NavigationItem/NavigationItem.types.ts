import { CSSIndents } from '@/shared/types/styles.types';

export type NavigationItemProps = {
  linkPath: string;
  name: string;
  avatarImage: string;
  AdditionalComponent?: React.ReactNode;
  activePathExact?: boolean;
  variant?: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  padding?: CSSIndents;
};
