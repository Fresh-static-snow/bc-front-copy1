import { CSSProperties } from 'react';

export type SubMenuProps = {
  title: string;
  backButtonPrimaryLabel?: string;
  backButtonLabel?: string;
  backButtonLink?: string;
  buttonPadding?: CSSProperties['padding'];
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
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
  $backgroundColor?: CSSProperties['backgroundColor'];
  $borderNone?: boolean;
};

export type StyledSectionWrapper = {
  $flexPosition?: 'flex-start' | 'center' | 'flex-end';
};
