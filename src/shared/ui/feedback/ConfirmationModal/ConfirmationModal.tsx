import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';

import { Modal } from '../Modal/Modal';
import * as S from './ConfirmationModal.styles';
import { ConfirmationModalProps } from './ConfirmationModal.types';

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  icon,
  title,
  message,
  additionalContent,
  isOpen,
  isLoading,
  confirmButtonLabel = 'OK',
  additionalButtonLabel,
  closeButtonLabel = 'Cancel',
  withAdditionalButton,
  maxWidth = '320px',
  onConfirm,
  onClickAdditionalButton,
  onClose,
}) => (
  <Modal
    onClose={onClose}
    isOpen={isOpen}
    verticalAlign="center"
    maxWidth={maxWidth}
    borderRadius="0px"
  >
    <S.Content>
      <S.InfoWrapper>
        {icon && <S.Icon>{icon}</S.Icon>}

        <S.TextInfo>
          {title && <S.Title>{title}</S.Title>}

          {message && <S.Message>{message}</S.Message>}
        </S.TextInfo>
      </S.InfoWrapper>

      {additionalContent}

      <S.ButtonsWrapper>
        <PrimaryButton
          onClick={onClose}
          variant="secondary"
          label={closeButtonLabel}
          isLoading={isLoading}
        />
        {withAdditionalButton && (
          <PrimaryButton
            onClick={onClickAdditionalButton}
            variant="secondary"
            label={additionalButtonLabel}
            isLoading={isLoading}
          />
        )}
        <PrimaryButton
          onClick={onConfirm}
          variant="primary"
          label={confirmButtonLabel}
          isLoading={isLoading}
        />
      </S.ButtonsWrapper>
    </S.Content>
  </Modal>
);
