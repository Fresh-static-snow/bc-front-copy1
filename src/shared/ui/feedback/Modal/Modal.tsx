import * as S from './Modal.styles';
import { ModalProps } from './Modal.types';

export const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  isMobile,
  width,
  maxWidth,
  maxHeight,
  verticalAlign,
  borderRadius,
  onClose,
}) => (
  <S.Dialog
    open={isOpen}
    onClose={onClose}
    scroll="body"
    disableAutoFocus
    $isMobile={isMobile}
    $width={width}
    $maxWidth={maxWidth}
    $maxHeight={maxHeight}
    $verticalAlign={verticalAlign}
    $borderRadius={borderRadius}
    PaperProps={{
      elevation: 0,
    }}
    data-testid="Dialog"
  >
    {children}
  </S.Dialog>
);
