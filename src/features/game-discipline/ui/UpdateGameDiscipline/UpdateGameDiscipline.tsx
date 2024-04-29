import { useCallback, useMemo } from 'react';

import {
  GameDisciplineForm,
  GameDisciplineFormSchema,
  useGetGameDisciplineForm,
  usePreDeleteDiscipline,
  useUpdateGameDiscipline,
} from '@/entities/game-discipline';
import { IconTriangleAlertSvg } from '@/shared/assets';
import { appendFormData, useCheckAccess, useToggle } from '@/shared/lib';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';

import { UpdateGameDisciplineProps } from './UpdateGameDiscipline.types';

export const UpdateGameDiscipline: React.FC<UpdateGameDisciplineProps> = ({
  requestType,
  setEntityModal,
}) => {
  const [open, setOpen] = useToggle(false);
  const checkAccess = useCheckAccess();

  const {
    data: gameDisciplineData,
    isFetching: isFetchingGameDisciplineData,
    isSuccess: isSuccessGameDisciplineData,
  } = useGetGameDisciplineForm(requestType?.additional);

  const defaultFormData = useMemo<GameDisciplineFormSchema>(() => {
    if (!gameDisciplineData) {
      return {};
    }

    return {
      name: gameDisciplineData?.title,
      logo: gameDisciplineData?.cover?.url,
    };
  }, [gameDisciplineData]);

  const { mutateAsync: onUpdateGameDiscipline, isLoading } = useUpdateGameDiscipline();
  const { mutateAsync: onDeleteGameDiscipline, isLoading: isDeleteLoading } =
    usePreDeleteDiscipline();

  const onSendData = useCallback(
    async (data: GameDisciplineFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'title', value: data.name },
        { key: 'cover', value: data.logo, options: { type: 'file' } },
      ]);

      await onUpdateGameDiscipline({ id: Number(requestType?.additional), formData });
    },
    [requestType?.additional, onUpdateGameDiscipline],
  );

  const onDelete = useCallback(async () => {
    await onDeleteGameDiscipline({ id: Number(requestType?.additional) });

    setEntityModal();
  }, [requestType?.additional, onDeleteGameDiscipline, setEntityModal]);

  return (
    <>
      <ConfirmationModal
        isOpen={open}
        isLoading={isLoading || isDeleteLoading}
        onClose={setOpen}
        onConfirm={onDelete}
        icon={<IconTriangleAlertSvg />}
        title="Are you sure?"
        message="Would you like to remove this discipline? If you delete this discipline, all tournaments and matches associated with it will be deleted."
      />

      {!isFetchingGameDisciplineData && isSuccessGameDisciplineData ? (
        <GameDisciplineForm
          hiddenFields={['anotherOne']}
          defaultFormData={defaultFormData}
          contentPaddings="30px"
          footerType="primary"
          submitButtonLabel="Update"
          withDelete={checkAccess(['delete::/api/v1/gamedisciplines/:id'])}
          isLoading={isLoading || isDeleteLoading}
          onSendData={onSendData}
          onCloseModal={setEntityModal}
          onClickDelete={setOpen}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
