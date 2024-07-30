import { CSSProperties } from 'react';

export type ModalProps = {
  children: React.ReactNode;
  isMobile?: boolean;
  width?: CSSProperties['width'];
  maxWidth?: CSSProperties['maxWidth'];
  maxHeight?: CSSProperties['maxHeight'];
  verticalAlign?: 'top' | 'center' | 'bottom';
  borderRadius?: CSSProperties['borderRadius'];
  isOpen: boolean;
  onClose: () => void;
};

export type StyledDialogProps = {
  $isMobile: boolean;
  $width: CSSProperties['width'];
  $maxWidth: CSSProperties['maxWidth'];
  $maxHeight: CSSProperties['maxHeight'];
  $verticalAlign: 'top' | 'center' | 'bottom';
  $borderRadius: CSSProperties['borderRadius'];
};
