import { PopoverOrigin } from '@mui/material';
import { CSSProperties } from 'react';

export type NavigationDropDownProps = {
  ButtonContentComponent: React.ReactNode;
  ContentComponent: React.ReactNode;
  activePathString: string;
  buttonVariant?: 'primary' | 'avatar' | 'base' | 'secondary';
  buttonInnerBorder?: boolean;
  buttonPadding?: CSSProperties['padding'];
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
};
