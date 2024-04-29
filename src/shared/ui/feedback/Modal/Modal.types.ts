import { CSSSize } from '@/shared/types/styles.types';

export type ModalProps = {
  children: React.ReactNode;
  isMobile?: boolean;
  width?: CSSSize;
  maxWidth?: CSSSize;
  maxHeight?: CSSSize;
  verticalAlign?: 'top' | 'center' | 'bottom';
  borderRadius?: CSSSize;
  isOpen: boolean;
  onClose: () => void;
};

export type StyledDialogProps = {
  $isMobile: boolean;
  $width: CSSSize;
  $maxWidth: CSSSize;
  $maxHeight: CSSSize;
  $verticalAlign: 'top' | 'center' | 'bottom';
  $borderRadius: CSSSize;
};
