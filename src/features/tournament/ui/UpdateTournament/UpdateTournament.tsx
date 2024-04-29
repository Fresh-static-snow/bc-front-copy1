import dayjs from 'dayjs';
import { useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import { useGetRegionOptions } from '@/entities/region';
import { useGetSponsorOptions } from '@/entities/sponsor';
import {
  TournamentForm,
  TournamentFormSchema,
  useGetTournamentForm,
  useGetTournamentTypeOptions,
  usePreDeleteTournament,
  useUpdateTournament,
} from '@/entities/tournament';
import {
  useGetMainParticipantOptions,
  useGetManagerOptions,
  useGetMediaRepresentativeOptions,
} from '@/entities/user';
import { IconTriangleAlertSvg } from '@/shared/assets';
import { appendFormData, useCheckAccess, useToggle } from '@/shared/lib';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';

import { LocationState, UpdateTournamentProps } from './UpdateTournament.types';

export const UpdateTournament: React.FC<UpdateTournamentProps> = ({
  requestType,
  setEntityModal,
}) => {
  const [open, setOpen] = useToggle(false);
  const location = useLocation();
  const navigate = useNavigate();
  const checkAccess = useCheckAccess();

  const {
    data: tournamentData,
    isFetching: isFetchingTournamentData,
    isSuccess: isSuccessTournamentData,
  } = useGetTournamentForm(requestType?.additional);

  const defaultFormData = useMemo<TournamentFormSchema>(() => {
    if (!tournamentData) {
      return {};
    }

    return {
      visible: tournamentData?.visible,
      discipline: {
        label: tournamentData?.discipline?.title,
        value: String(tournamentData?.discipline?.id),
      },
      name: tournamentData?.title,
      main_participant: tournamentData?.main_participants?.[0]
        ? {
            label: tournamentData?.main_participants?.[0]?.display_name,
            value: String(tournamentData?.main_participants?.[0]?.id),
          }
        : undefined,
      media_representative: tournamentData?.media_representatives?.[0]
        ? {
            label: tournamentData?.media_representatives?.[0]?.display_name,
            value: String(tournamentData?.media_representatives?.[0]?.id),
          }
        : undefined,
      date: [
        dayjs(tournamentData?.start_date).format(),
        tournamentData?.end_date && tournamentData?.end_date !== tournamentData?.start_date
          ? dayjs(tournamentData?.end_date).format()
          : undefined,
      ],
      region: tournamentData?.region
        ? { label: tournamentData?.region?.name, value: String(tournamentData?.region?.id) }
        : undefined,
      type: tournamentData?.type
        ? { label: tournamentData?.type?.name, value: String(tournamentData?.type?.id) }
        : undefined,
      tier: tournamentData?.tier
        ? { label: String(tournamentData?.tier), value: String(tournamentData?.tier) }
        : undefined,
      sponsors: tournamentData?.sponsors?.map((sponsor) => ({
        label: sponsor?.name,
        value: String(sponsor?.id),
      })),
      owner: tournamentData?.owner
        ? { label: tournamentData?.owner?.display_name, value: String(tournamentData?.owner?.id) }
        : undefined,
      cover: tournamentData?.cover?.url,
      descriptions: tournamentData?.descriptions?.map((description) => ({
        elemId: String(description?.id),
        title: description?.title,
        description: description?.description,
      })),
      medias: tournamentData?.media?.map((media) => ({
        elemId: String(media?.id),
        title: media?.title,
        description: media?.description,
      })),
    };
  }, [tournamentData]);

  const { data: disciplineOptions } = useGetGameDisciplineOptions();
  const { data: mainParticipantsOptions } = useGetMainParticipantOptions();
  const { data: mediaRepresentativeOptions } = useGetMediaRepresentativeOptions();
  const { data: regionsOptions } = useGetRegionOptions();
  const { data: typesOptions } = useGetTournamentTypeOptions();
  const { data: sponsorsOptions } = useGetSponsorOptions();
  const { data: ownersOptions } = useGetManagerOptions();

  const { mutateAsync: onUpdateTournament, isLoading } = useUpdateTournament();
  const { mutateAsync: onDeleteTournament, isLoading: isDeleteLoading } = usePreDeleteTournament();

  const onSendData = useCallback(
    async (data: TournamentFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'title', value: data.name },
        {
          key: 'main_participant_ids[]',
          value: data.main_participant?.value,
          options: { canBeEmpty: true },
        },
        {
          key: 'media_representative_ids[]',
          value: data.media_representative?.value,
          options: { canBeEmpty: true },
        },
        { key: 'start_at', value: dayjs(data.date[0]).format('YYYY-MM-DD') },
        {
          key: 'end_at',
          value: dayjs(data.date[1]).format('YYYY-MM-DD'),
          options: { canBeEmpty: true },
        },
        { key: 'region_id', value: data.region?.value, options: { canBeEmpty: true } },
        { key: 'type_id', value: data.type?.value, options: { canBeEmpty: true } },
        { key: 'top', value: data.tier?.value, options: { canBeEmpty: true } },
        { key: 'owner_id', value: data.owner?.value, options: { canBeEmpty: true } },
        { key: 'cover', value: data.cover, options: { type: 'file' } },

        ...(data.sponsors?.length > 0
          ? data.sponsors.map((sponsor, index) =>
              sponsor?.value?.includes('new_created_option')
                ? { key: `sponsors_attributes[${index}][name]`, value: sponsor?.label }
                : { key: `sponsor_ids[]`, value: sponsor?.value },
            )
          : [{ key: 'sponsor_ids[]', value: '' }]),

        ...(data.descriptions ?? []).flatMap((description, index) => {
          if (description?.elemId && description?.removed) {
            return [
              { key: `descriptions_attributes[${index}][_destroy]`, value: description.elemId },
              { key: `descriptions_attributes[${index}][id]`, value: description.elemId },
            ];
          }
          return [
            { key: `descriptions_attributes[${index}][id]`, value: description?.elemId },
            { key: `descriptions_attributes[${index}][title]`, value: description?.title },
            {
              key: `descriptions_attributes[${index}][description]`,
              value: description?.description,
            },
          ];
        }),

        ...(data.medias ?? []).flatMap((media, index) => {
          if (media?.elemId && media?.removed) {
            return [
              {
                key: `media_attributes[${index}][_destroy]`,
                value: media.elemId,
              },
              {
                key: `media_attributes[${index}][id]`,
                value: media.elemId,
              },
            ];
          }
          return [
            {
              key: `media_attributes[${index}][id]`,
              value: media?.elemId,
            },
            {
              key: `media_attributes[${index}][title]`,
              value: media?.title,
            },
            {
              key: `media_attributes[${index}][description]`,
              value: media?.description,
            },
          ];
        }),
      ]);

      await onUpdateTournament({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateTournament],
  );

  const onDelete = useCallback(async () => {
    await onDeleteTournament({ id: Number(requestType?.additional) });
    setEntityModal();

    const state = location.state as LocationState;
    if (state) {
      navigate(state?.prevPath, { replace: true });
    } else {
      navigate('/calendar', { replace: true });
    }
  }, [requestType?.additional, location.state, navigate, onDeleteTournament, setEntityModal]);

  return (
    <>
      <ConfirmationModal
        isOpen={open}
        isLoading={isLoading || isDeleteLoading}
        onClose={setOpen}
        onConfirm={onDelete}
        icon={<IconTriangleAlertSvg />}
        title="Are you sure?"
        message="Would you like to remove this event from the calendar? If you delete this tournament, matches associated with it will be deleted."
      />

      {!isFetchingTournamentData && isSuccessTournamentData ? (
        <TournamentForm
          disciplineOptions={disciplineOptions}
          mainParticipantsOptions={mainParticipantsOptions}
          mediaRepresentativeOptions={mediaRepresentativeOptions}
          regionsOptions={regionsOptions}
          typesOptions={typesOptions}
          sponsorsOptions={sponsorsOptions}
          ownersOptions={ownersOptions}
          defaultFormData={defaultFormData}
          hiddenFields={['type', 'anotherOne']}
          contentPaddings="30px"
          footerType="primary"
          submitButtonLabel="Update"
          withDelete={checkAccess(['delete::/api/v1/tournaments/:id'])}
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
