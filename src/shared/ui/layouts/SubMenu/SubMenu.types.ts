import { CSSColor, CSSIndents } from '@/shared/types/styles.types';

export type SubMenuProps = {
  title: string;
  backButtonPrimaryLabel?: string;
  backButtonLabel?: string;
  backButtonLink?: string;
  buttonPadding?: CSSIndents;
  backgroundColor?: CSSColor;
  color?: CSSColor;
  borderNone?: boolean;
  /**
   * The additional component that will be rendered after the title.
   */
  AdditionalComponent?: React.ReactNode;
  CustomBackButton?: React.ReactNode;
};

export type LocationState = {
  prevPath?: string;
};

export type StyledRootProps = {
  $backgroundColor?: string;
  $borderNone?: boolean;
};

export type StyledSectionWrapper = {
  $flexPosition?: 'flex-start' | 'center' | 'flex-end';
};
