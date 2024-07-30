import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useGetCastAnalyticStudioOptions } from '@/entities/cast-analytic-studio';
import { useGetCastChannelOptions } from '@/entities/cast-channel';
import { useGetCastLanguageOptions } from '@/entities/cast-language';
import { useGetCastSetupOptions } from '@/entities/cast-setup';
import { useGetCastStreamOptions } from '@/entities/cast-stream';
import { useGetCastStudioOptions } from '@/entities/cast-studio';
import {
  SegmentForm,
  SegmentFormSchema,
  useGetSegmentForm,
  useGetSegmentTypeOptions,
  usePreDeleteSegment,
  useUpdateSegment,
} from '@/entities/event-segment';
import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import { useGetTournamentOptions } from '@/entities/tournament';
import {
  useGetAnalyticOptions,
  useGetCommentatorsOptions,
  useGetStaffMemberOptions,
} from '@/entities/user';
import { IconTriangleAlertSvg } from '@/shared/assets';
import { appendFormData, useCheckAccess, useToggle } from '@/shared/lib';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';

import { UpdateSegmentProps } from './UpdateSegment.types';

export const UpdateSegment: React.FC<UpdateSegmentProps> = ({
  isMobile,
  requestType,
  setEntityModal,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useToggle(false);
  const checkAccess = useCheckAccess();

  const [currentFormData, setCurrentFormData] = useState<SegmentFormSchema>();

  const startDate = useMemo(
    () =>
      currentFormData?.date && currentFormData?.time?.[0]
        ? `${dayjs(currentFormData?.date)?.format('YYYY-MM-DD')} ${currentFormData?.time?.[0]}`
        : undefined,
    [currentFormData],
  );
  const endDate = useMemo(
    () =>
      currentFormData?.date && currentFormData?.time?.[1]
        ? `${dayjs(currentFormData?.date)?.format('YYYY-MM-DD')} ${currentFormData?.time?.[1]}`
        : undefined,
    [currentFormData],
  );

  const commentatorsList = useMemo(
    () =>
      currentFormData?.languages?.flatMap((language) =>
        language?.commentators?.filter((user) => user?.status),
      ) ?? [],
    [currentFormData],
  );
  const staffList = useMemo(
    () =>
      currentFormData?.languages?.flatMap((language) =>
        language?.staff?.filter((user) => user?.status),
      ) ?? [],
    [currentFormData],
  );
  const analyticsList = useMemo(
    () =>
      currentFormData?.languages?.flatMap((language) =>
        language?.analytics?.filter((user) => user?.status),
      ) ?? [],
    [currentFormData],
  );

  const {
    data: segmentData,
    isFetching: isFetchingSegmentData,
    isSuccess: isSuccessSegmentData,
  } = useGetSegmentForm(requestType?.additional);

  const defaultFormData = useMemo<SegmentFormSchema>(() => {
    if (!segmentData) {
      return {};
    }

    return {
      visible: segmentData?.visible,
      discipline: {
        label: segmentData?.tournament?.discipline?.title,
        value: String(segmentData?.tournament?.discipline?.id),
      },
      tournament: {
        label: segmentData?.tournament?.title,
        value: String(segmentData?.tournament?.id),
        additional: String(segmentData?.tournament?.discipline?.id),
      },
      date: segmentData?.start_date ? dayjs(segmentData?.start_date).format() : undefined,
      time: [segmentData?.start_time ?? undefined, segmentData?.end_time ?? undefined],
      format: segmentData?.format?.name
        ? {
            label: segmentData?.format?.name,
            value: String(segmentData?.format?.value),
          }
        : undefined,
      title: segmentData?.title,
      cover: segmentData?.cover?.url,
      logo: segmentData?.logo?.url,
      guests: segmentData?.guests?.map((guest) => ({
        elemId: String(guest?.id),
        name: guest?.name ?? '',
        social: guest?.social ?? '',
        username: guest?.username ?? '',
      })),
      descriptions: segmentData?.descriptions?.map((description) => ({
        elemId: String(description?.id),
        title: description?.title,
        description: description?.description,
      })),
      medias: segmentData?.media?.map((media) => ({
        elemId: String(media?.id),
        title: media?.title,
        description: media?.description,
      })),
      languages: segmentData?.match_casts?.map((cast) => ({
        elemId: String(cast?.id),
        language: cast?.language
          ? {
              label: cast?.language?.name,
              value: String(cast?.language?.id),
              additional: cast?.language?.keyword,
            }
          : undefined,
        studio: cast?.studio
          ? { label: cast?.studio?.name, value: String(cast?.studio?.id) }
          : undefined,
        studio_analytics: cast?.analytic_studio
          ? {
              label: cast?.analytic_studio?.name,
              value: String(cast?.analytic_studio?.id),
            }
          : undefined,
        setup: cast?.setup
          ? { label: cast?.setup?.name, value: String(cast?.setup?.id) }
          : undefined,
        channels: cast?.channels?.map((channel) => ({
          label: channel?.name,
          value: String(channel?.id),
        })),
        stream: cast?.stream
          ? { label: cast?.stream?.name, value: String(cast?.stream?.id) }
          : undefined,
        commentators: cast?.commentators?.map((commentator) => ({
          label: commentator?.display_name,
          value: String(commentator?.id),
        })),
        backup_commentators: cast?.backup_commentators?.map((commentator) => ({
          label: commentator?.display_name,
          value: String(commentator?.id),
        })),
        analytics: cast?.analytics?.map((analytic) => ({
          label: analytic?.display_name,
          value: String(analytic?.id),
        })),
        host_analytic: cast?.host_analytic
          ? {
              label: cast?.host_analytic?.display_name,
              value: String(cast?.host_analytic?.id),
            }
          : undefined,
        staff: cast?.staff_members?.map((staff) => ({
          label: staff?.display_name,
          value: String(staff?.id),
        })),
      })),
    };
  }, [segmentData]);

  const { data: disciplineOptions } = useGetGameDisciplineOptions();
  const { data: tournamentOptions } = useGetTournamentOptions();
  const { data: formatsOptions } = useGetSegmentTypeOptions();
  const { data: analyticsOptions } = useGetAnalyticOptions(
    startDate,
    endDate,
    requestType?.additional,
  );
  const { data: channelsOptions } = useGetCastChannelOptions();
  const { data: commentatorsOptions } = useGetCommentatorsOptions(
    startDate,
    endDate,
    requestType?.additional,
  );
  const { data: languagesOptions } = useGetCastLanguageOptions();
  const { data: studiosOptions } = useGetCastStudioOptions();
  const { data: studiosAnalyticsOptions } = useGetCastAnalyticStudioOptions();
  const { data: setupsOptions } = useGetCastSetupOptions();
  const { data: streamsOptions } = useGetCastStreamOptions();
  const { data: staffOptions } = useGetStaffMemberOptions(
    startDate,
    endDate,
    requestType?.additional,
  );

  const { mutateAsync: onUpdateSegment, isLoading } = useUpdateSegment();
  const { mutateAsync: onDeleteSegment, isLoading: isDeleteLoading } = usePreDeleteSegment();

  const onSendData = useCallback(
    async (data: SegmentFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'tournament_id', value: data.tournament?.value },
        { key: 'best_of', value: data.format?.value, options: { canBeEmpty: true } },
        { key: 'title', value: data.title, options: { canBeEmpty: true } },
        {
          key: 'start_at',
          value: `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time[0]}`,
        },
        {
          key: 'end_at',
          value: data.time?.[1]
            ? `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time?.[1]}`
            : null,
          options: { canBeEmpty: true },
        },
        { key: 'cover', value: data.cover, options: { type: 'file' } },
        { key: 'logo', value: data.logo, options: { type: 'file', canBeEmpty: true } },

        ...(data.guests ?? []).flatMap((guest, index) => {
          if (guest?.elemId && guest?.removed) {
            return [
              { key: `guests_attributes[${index}][_destroy]`, value: guest.elemId },
              { key: `guests_attributes[${index}][id]`, value: guest.elemId },
            ];
          }
          return [
            { key: `guests_attributes[${index}][id]`, value: guest.elemId },
            { key: `guests_attributes[${index}][name]`, value: guest.name },
            { key: `guests_attributes[${index}][username]`, value: guest.username },
            { key: `guests_attributes[${index}][social]`, value: guest.social },
          ];
        }),

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

        ...(data.languages ?? []).flatMap((language, index) => {
          if (language?.elemId && language?.removed) {
            return [
              {
                key: `match_casts_attributes[${index}][_destroy]`,
                value: language.elemId,
              },
              {
                key: `match_casts_attributes[${index}][id]`,
                value: language.elemId,
              },
            ];
          }
          return [
            {
              key: `match_casts_attributes[${index}][id]`,
              value: language.elemId,
            },
            {
              key: `match_casts_attributes[${index}][cast_language_id]`,
              value: language.language?.value,
              options: { canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][cast_channel_ids][]`,
              value: language.channels?.map((channel) => channel.value),
              options: { type: 'list' as const, canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][cast_studio_id]`,
              value: language.studio?.value,
              options: { canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][cast_analytic_studio_id]`,
              value: language.studio_analytics?.value,
              options: { canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][cast_setup_id]`,
              value: language.setup?.value,
              options: { canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][cast_stream_id]`,
              value: language.stream?.value,
              options: { canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][commentator_ids][]`,
              value: language.commentators?.map((commentator) => commentator.value),
              options: { type: 'list' as const, canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][backup_commentator_ids][]`,
              value: language.backup_commentators?.map((commentator) => commentator.value),
              options: { type: 'list' as const, canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][analytic_ids][]`,
              value: language.analytics?.map((analytic) => analytic.value),
              options: { type: 'list' as const, canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][match_host_analytic_attributes][user_id]`,
              value: language.host_analytic?.value,
              options: { canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][staff_member_ids][]`,
              value: language.staff?.map((staff) => staff.value),
              options: { type: 'list' as const, canBeEmpty: true },
            },
          ];
        }),
      ]);

      await onUpdateSegment({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateSegment],
  );

  const onDelete = useCallback(async () => {
    await onDeleteSegment({ id: Number(requestType?.additional) });

    setEntityModal();
  }, [requestType?.additional, onDeleteSegment, setEntityModal]);

  useEffect(() => {
    if (commentatorsList?.length > 0) {
      enqueueSnackbar('One or more casters have an event scheduled for the specified time.', {
        variant: 'warning',
      });
    }
  }, [commentatorsList?.length]);

  useEffect(() => {
    if (staffList?.length > 0) {
      enqueueSnackbar('One or more staff members have an event scheduled for the specified time.', {
        variant: 'warning',
      });
    }
  }, [staffList?.length]);

  useEffect(() => {
    if (analyticsList?.length > 0) {
      enqueueSnackbar(
        'One or more analysts users have an event scheduled for the specified time.',
        {
          variant: 'warning',
        },
      );
    }
  }, [analyticsList?.length]);

  return (
    <>
      <ConfirmationModal
        isOpen={open}
        isLoading={isLoading || isDeleteLoading}
        onClose={setOpen}
        onConfirm={onDelete}
        icon={<IconTriangleAlertSvg />}
        title="Are you sure?"
        message="Would you like to remove this segment from the calendar?"
      />

      {!isFetchingSegmentData && isSuccessSegmentData ? (
        <SegmentForm
          formatsOptions={formatsOptions}
          disciplineOptions={disciplineOptions}
          analyticsOptions={analyticsOptions}
          channelsOptions={channelsOptions}
          commentatorsOptions={commentatorsOptions}
          languagesOptions={languagesOptions}
          studiosOptions={studiosOptions}
          studiosAnalyticsOptions={studiosAnalyticsOptions}
          setupsOptions={setupsOptions}
          tournamentOptions={tournamentOptions}
          staffOptions={staffOptions}
          streamsOptions={streamsOptions}
          contentPaddings={isMobile ? '20px' : '30px'}
          fieldsDirection={isMobile ? 'column' : 'row'}
          footerType="primary"
          formData={currentFormData}
          defaultFormData={defaultFormData}
          hiddenFields={['anotherOne', 'format']}
          withDelete={checkAccess(['delete::/api/v1/matches/:id'])}
          submitButtonLabel="Update"
          isLoading={isLoading || isDeleteLoading}
          onSendData={onSendData}
          setFormData={setCurrentFormData}
          onCloseModal={setEntityModal}
          onClickDelete={setOpen}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
