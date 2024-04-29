import { useCallback, useEffect, useMemo } from 'react';

import { Modal } from '@/shared/ui/feedback';

import { EditEntityModalProps } from './EditEntityModal.types';
import { EditEntityModalHeader } from './ui/EditEntityModalHeader/EditEntityModalHeader';

export const EditEntityModal: React.FC<EditEntityModalProps> = ({
  isMobile,
  formTemplates,
  requestType,
  setRequestType,
}) => {
  const ActiveForm = useMemo(
    () => formTemplates?.[requestType?.value],
    [formTemplates, requestType],
  );

  const onCloseModal = useCallback(() => {
    setRequestType();
  }, [setRequestType]);

  useEffect(() => onCloseModal(), [onCloseModal]);

  return (
    <>
      {ActiveForm && (
        <Modal isOpen onClose={onCloseModal} width="610px" isMobile={isMobile}>
          <EditEntityModalHeader requestType={requestType?.label} />

          <ActiveForm requestType={requestType} setEntityModal={onCloseModal} isMobile={isMobile} />
        </Modal>
      )}
    </>
  );
};
