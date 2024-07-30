import { CSSProperties } from 'react';

export type ConfirmationModalProps = {
  icon?: React.ReactNode;
  title?: string;
  message?: string;
  additionalContent?: React.ReactNode;
  isOpen: boolean;
  isLoading?: boolean;
  confirmButtonLabel?: string;
  additionalButtonLabel?: string;
  closeButtonLabel?: string;
  withAdditionalButton?: boolean;
  maxWidth?: CSSProperties['maxWidth'];
  onConfirm: () => void;
  onClickAdditionalButton?: () => void;
  onClose: () => void;
};
