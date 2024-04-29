import { CSSSize } from '@/shared/types/styles.types';

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
  maxWidth?: CSSSize;
  onConfirm: () => void;
  onClickAdditionalButton?: () => void;
  onClose: () => void;
};
