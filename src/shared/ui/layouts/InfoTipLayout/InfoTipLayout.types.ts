import { CSSProperties } from 'react';

import { HEX } from '@/shared/types/styles.types';

export type InfoTipLayoutProps = {
  InfoTipContent: React.ReactNode;
  children: React.ReactElement;
  color: HEX;
  isVisible?: boolean;
  disabled?: boolean;
  open?: boolean | null;
  arrow?: boolean;
  followCursor?: boolean;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
};

export type StyledContentProps = {
  $width?: CSSProperties['width'];
};

export type StyledStatusIndicatorProps = {
  $stripes: boolean;
  $baseColor: HEX;
};
