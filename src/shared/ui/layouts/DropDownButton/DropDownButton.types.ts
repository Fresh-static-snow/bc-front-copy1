import { PopoverOrigin } from '@mui/material';

export type DropDownButtonProps = {
  /**
   * The component that will be rendered as a button.
   */
  ButtonComponent: React.ReactNode;
  /**
   * The component that will be rendered as a content inside the popover.
   */
  ContentComponent: React.ReactNode;
  isOpen: boolean;
  /**
   * This is the element that will be used to set the position of the content.
   * @default null
   */
  anchorEl: HTMLElement;
  /**
   * This is the point on the anchor where the popover's `anchorEl` will attach to.
   * @default { vertical: 'bottom', horizontal: 'left' }
   */
  anchorOrigin?: PopoverOrigin;
  /**
   * This is the point on the content which will attach to the anchor's origin.
   * @default { vertical: 'top', horizontal: 'left' }
   */
  transformOrigin?: PopoverOrigin;
  /**
   * @default 'top'
   */
  orientation?: 'left' | 'right' | 'top' | 'bottom';
  onClose: () => void;
};

export type StyledRootProps = {
  $active: boolean;
  $orientation: 'left' | 'right' | 'top' | 'bottom';
};
