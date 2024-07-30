import { CSSProperties } from 'react';

export type NavigationItemProps = {
  linkPath: string;
  name: string;
  avatarImage: string;
  AdditionalComponent?: React.ReactNode;
  activePathExact?: boolean;
  variant?: 'base' | 'primary' | 'secondary' | 'colored' | 'avatar';
  padding?: CSSProperties['padding'];
};
