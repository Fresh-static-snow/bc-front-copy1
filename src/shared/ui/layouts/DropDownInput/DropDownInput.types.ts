import { PopoverOrigin } from '@mui/material';
import { CSSProperties } from 'react';

export type DropDownInputProps = {
  width?: CSSProperties['width'];
  InputIcon?: React.ReactNode;
  InputComponent: React.ReactNode;
  ContentComponent: React.ReactNode;
  /**
   * The anchor origin.
   * @default { vertical: 'bottom', horizontal: 'left' }
   * @description This is the point on the anchor where the popover's `anchorEl` will attach to.
   */
  anchorOrigin?: PopoverOrigin;
  /**
   * The transform origin.
   * @default { vertical: 'top', horizontal: 'left' }
   * @description This is the point on the content which will attach to the anchor's origin.
   */
  transformOrigin?: PopoverOrigin;
  /**
   * If `true`, the error styles will be applied.
   * @default false
   */
  error?: boolean;
  disabled?: boolean;
};

export type StyledInputWrapperProps = {
  $width?: CSSProperties['width'];
  $active: boolean;
  $error: boolean;
};
