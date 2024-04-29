import { CSSSize, HEX } from '@/shared/types/styles.types';

export type InfoTipLayoutProps = {
  InfoTipContent: React.ReactNode;
  children: React.ReactElement;
  color: HEX;
  isVisible?: boolean;
  disabled?: boolean;
};

export type StyledContentProps = {
  $width?: CSSSize;
};

export type StyledStatusIndicatorProps = {
  $stripes: boolean;
  $baseColor: HEX;
};
