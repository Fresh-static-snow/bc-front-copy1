import { useCallback, useEffect, useMemo } from 'react';

import { Modal } from '@/shared/ui/feedback';

import { CreateEntityModalProps } from './CreateEntityModal.types';
import { CreateEntityModalHeader } from './ui/CreateEntityModalHeader/CreateEntityModalHeader';

export const CreateEntityModal: React.FC<CreateEntityModalProps> = ({
  isMobile,
  formTemplates,
  requestButtons,
  requestType,
  setRequestType,
}) => {
  const ActiveForm = useMemo(
    () => formTemplates?.[requestType?.value],
    [formTemplates, requestType?.value],
  );

  const onCloseModal = useCallback(() => {
    setRequestType();
  }, [setRequestType]);

  useEffect(() => onCloseModal(), [onCloseModal]);

  return (
    <>
      {ActiveForm && (
        <Modal isOpen onClose={onCloseModal} width="610px" isMobile={isMobile}>
          <CreateEntityModalHeader
            requestButtons={requestButtons}
            requestType={requestType}
            setRequestType={setRequestType}
          />

          <ActiveForm requestType={requestType} setEntityModal={onCloseModal} isMobile={isMobile} />
        </Modal>
      )}
    </>
  );
};
