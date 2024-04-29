import { PopoverOrigin } from '@mui/material';

import * as S from './DropDownButton.styles';
import { DropDownButtonProps } from './DropDownButton.types';

/**
 * The component is a layout component that is used to display a dropdown button.
 * Button can be added by `ButtonComponent` prop and popover content by `ContentComponent` prop.
 */
export const DropDownButton: React.FC<DropDownButtonProps> = ({
  ButtonComponent,
  ContentComponent,
  isOpen,
  anchorEl,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' } as PopoverOrigin,
  transformOrigin = { vertical: 'top', horizontal: 'left' } as PopoverOrigin,
  orientation = 'top',
  onClose,
}) => (
  <>
    <S.Root $active={isOpen} $orientation={orientation}>
      {ButtonComponent}
    </S.Root>

    <S.Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      {ContentComponent}
    </S.Popover>
  </>
);
