import { PopoverOrigin } from '@mui/material';

import { CSSIndents } from '@/shared/types/styles.types';

export type NavigationDropDownProps = {
  ButtonContentComponent: React.ReactNode;
  ContentComponent: React.ReactNode;
  activePathString: string;
  buttonVariant?: 'primary' | 'avatar' | 'base' | 'secondary';
  buttonInnerBorder?: boolean;
  buttonPadding?: CSSIndents;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
};
