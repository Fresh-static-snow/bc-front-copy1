import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  CorporateForm,
  CorporateFormSchema,
  useDeleteCorporate,
  useGetCorporateForm,
  useUpdateCorporate,
} from '@/entities/corporate';
import { useGetMainParticipantOptions, useGetParticipantCascadingOptions } from '@/entities/user';
import { IconTriangleAlertSvg } from '@/shared/assets';
import { appendFormData, getCascadingActiveOptions, useCheckAccess, useToggle } from '@/shared/lib';
import { CascaderMixedValue } from '@/shared/types/values.types';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';

import { LocationState, UpdateCorporateProps } from './UpdateCorporate.types';

export const UpdateCorporate: React.FC<UpdateCorporateProps> = ({
  requestType,
  setEntityModal,
}) => {
  const [open, setOpen] = useToggle(false);
  const location = useLocation();
  const navigate = useNavigate();
  const checkAccess = useCheckAccess();

  const {
    data: corporateData,
    isFetching: isFetchingCorporateData,
    isSuccess: isSuccessCorporateData,
  } = useGetCorporateForm(requestType?.additional);

  const {
    data: participantsOptions,
    isFetching: isFetchingParticipantsOptions,
    isSuccess: isSuccessParticipantsOptions,
  } = useGetParticipantCascadingOptions();

  const participants = useMemo(() => {
    if (!corporateData || !participantsOptions) {
      return undefined;
    }

    return getCascadingActiveOptions(
      participantsOptions,
      corporateData?.participants
        ? (corporateData?.participants?.map(
            ({ id: userId, avatar, display_name, user_disciplines }) => ({
              label: display_name,
              value: String(userId),
              additional: avatar?.url,
              parents: user_disciplines?.map(({ title }) => title),
            }),
          ) as CascaderMixedValue[])
        : undefined,
    );
  }, [corporateData, participantsOptions]);

  const defaultFormData = useMemo<CorporateFormSchema>(() => {
    if (!corporateData || !participantsOptions || !participants) {
      return {};
    }

    return {
      name: corporateData?.name,
      location: corporateData?.location ?? undefined,
      cover: corporateData?.cover?.url,
      date: corporateData?.start_date ? dayjs(corporateData?.start_date).format() : undefined,
      time: [corporateData?.start_time ?? undefined, corporateData?.end_time ?? undefined],
      description: corporateData?.description ?? undefined,
      participants,
      main_participant: corporateData?.main_participants?.[0]
        ? {
            label: corporateData?.main_participants?.[0]?.display_name,
            value: String(corporateData?.main_participants?.[0]?.id),
            additional: corporateData?.main_participants?.[0]?.avatar?.url,
          }
        : undefined,
      visible: corporateData?.visible,
    };
  }, [corporateData, participants, participantsOptions]);

  const { data: mainParticipantsOptions } = useGetMainParticipantOptions();

  const { mutateAsync: onUpdateCorporate, isLoading } = useUpdateCorporate();
  const { mutateAsync: onDeleteCorporate, isLoading: isDeleteLoading } = useDeleteCorporate();

  const onSendData = useCallback(
    async (data: CorporateFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'company_id', value: '1' },
        { key: 'name', value: data.name },
        { key: 'location', value: data.location, options: { canBeEmpty: true } },
        { key: 'cover', value: data.cover, options: { type: 'file', canBeEmpty: true } },
        { key: 'start_at', value: `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time[0]}` },
        {
          key: 'end_at',
          value: data.time?.[1]
            ? `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time?.[1]}`
            : null,
          options: { canBeEmpty: true },
        },
        { key: 'description', value: data.description, options: { canBeEmpty: true } },
        {
          key: 'main_participant_ids[]',
          value: data.main_participant?.value,
          options: { canBeEmpty: true },
        },
        {
          key: 'participant_ids[]',
          value: data.participants
            ?.filter((participant) => !!participant.parents?.length)
            .map((participant) => participant.value),
          options: { type: 'list', canBeEmpty: true },
        },
      ]);

      await onUpdateCorporate({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateCorporate],
  );

  const onDelete = useCallback(async () => {
    await onDeleteCorporate({ id: Number(requestType?.additional) });
    setEntityModal();

    const state = location.state as LocationState;
    if (state) {
      navigate(state?.prevPath, { replace: true });
    } else {
      navigate('/calendar', { replace: true });
    }
  }, [requestType?.additional, location.state, navigate, onDeleteCorporate, setEntityModal]);

  return (
    <>
      <ConfirmationModal
        isOpen={open}
        isLoading={isLoading || isDeleteLoading}
        onClose={setOpen}
        onConfirm={onDelete}
        icon={<IconTriangleAlertSvg />}
        title="Are you sure?"
        message="Would you like to remove this event from the calendar?"
      />

      {!isFetchingCorporateData &&
      !isFetchingParticipantsOptions &&
      isSuccessCorporateData &&
      isSuccessParticipantsOptions &&
      participants ? (
        <CorporateForm
          participantsOptions={participantsOptions}
          mainParticipantsOptions={mainParticipantsOptions}
          contentPaddings="30px"
          footerType="primary"
          defaultFormData={defaultFormData}
          hiddenFields={['anotherOne']}
          submitButtonLabel="Update"
          withDelete={checkAccess(['delete::/api/v1/corporates/:id'])}
          isLoading={isLoading || isDeleteLoading}
          onCloseModal={setEntityModal}
          onSendData={onSendData}
          onClickDelete={setOpen}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
