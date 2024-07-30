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
  useCreateSegment,
  useGetSegmentTypeOptions,
} from '@/entities/event-segment';
import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import { useGetTournamentOptions } from '@/entities/tournament';
import {
  useGetAnalyticOptions,
  useGetCommentatorsOptions,
  useGetStaffMemberOptions,
} from '@/entities/user';
import { appendFormData } from '@/shared/lib';

import { CreateSegmentProps } from './CreateSegment.types';

export const CreateSegment: React.FC<CreateSegmentProps> = ({ setEntityModal }) => {
  const { enqueueSnackbar } = useSnackbar();
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

  const { data: disciplineOptions } = useGetGameDisciplineOptions();
  const { data: tournamentOptions } = useGetTournamentOptions();
  const { data: formatsOptions } = useGetSegmentTypeOptions();
  const { data: analyticsOptions } = useGetAnalyticOptions(startDate, endDate);
  const { data: channelsOptions } = useGetCastChannelOptions();
  const { data: commentatorsOptions } = useGetCommentatorsOptions(startDate, endDate);
  const { data: languagesOptions } = useGetCastLanguageOptions();
  const { data: studiosOptions } = useGetCastStudioOptions();
  const { data: studiosAnalyticsOptions } = useGetCastAnalyticStudioOptions();
  const { data: setupsOptions } = useGetCastSetupOptions();
  const { data: streamsOptions } = useGetCastStreamOptions();
  const { data: staffOptions } = useGetStaffMemberOptions(startDate, endDate);

  const { mutateAsync: onCreateSegment, isLoading } = useCreateSegment();

  const onSendData = useCallback(
    async (data: SegmentFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'tournament_id', value: data.tournament?.value },
        { key: 'best_of', value: data.format?.value },
        { key: 'title', value: data.title },
        { key: 'start_at', value: `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time[0]}` },
        {
          key: 'end_at',
          value: data.time?.[1]
            ? `${dayjs(data.date).format('YYYY-MM-DD')} ${data.time?.[1]}`
            : null,
        },
        { key: 'cover', value: data.cover, options: { type: 'file' } },
        { key: 'logo', value: data.logo, options: { type: 'file' } },

        ...(data.guests ?? []).flatMap((guest, index) => [
          {
            key: `guests_attributes[${index}][name]`,
            value: guest.name,
          },
          {
            key: `guests_attributes[${index}][username]`,
            value: guest.username,
          },
          {
            key: `guests_attributes[${index}][social]`,
            value: guest.social,
          },
        ]),

        ...(data.descriptions ?? []).flatMap((description, index) => [
          {
            key: `descriptions_attributes[${index}][title]`,
            value: description?.title,
          },
          {
            key: `descriptions_attributes[${index}][description]`,
            value: description?.description,
          },
        ]),

        ...(data.medias ?? []).flatMap((media, index) => [
          {
            key: `media_attributes[${index}][title]`,
            value: media?.title,
          },
          {
            key: `media_attributes[${index}][description]`,
            value: media?.description,
          },
        ]),

        ...(data.languages ?? []).flatMap((language, index) => [
          {
            key: `match_casts_attributes[${index}][cast_language_id]`,
            value: language.language?.value,
          },
          {
            key: `match_casts_attributes[${index}][cast_channel_ids][]`,
            value: language.channels?.map((channel) => channel.value),
            options: { type: 'list' as const },
          },
          {
            key: `match_casts_attributes[${index}][cast_studio_id]`,
            value: language.studio?.value,
          },
          {
            key: `match_casts_attributes[${index}][cast_analytic_studio_id]`,
            value: language.studio_analytics?.value,
          },
          {
            key: `match_casts_attributes[${index}][cast_setup_id]`,
            value: language.setup?.value,
          },
          {
            key: `match_casts_attributes[${index}][cast_stream_id]`,
            value: language.stream?.value,
          },
          {
            key: `match_casts_attributes[${index}][commentator_ids][]`,
            value: language.commentators?.map((commentator) => commentator.value),
            options: { type: 'list' as const },
          },
          {
            key: `match_casts_attributes[${index}][backup_commentator_ids][]`,
            value: language.backup_commentators?.map((commentator) => commentator.value),
            options: { type: 'list' as const },
          },
          {
            key: `match_casts_attributes[${index}][analytic_ids][]`,
            value: language.analytics?.map((analytic) => analytic.value),
            options: { type: 'list' as const },
          },
          {
            key: `match_casts_attributes[${index}][match_host_analytic_attributes][user_id]`,
            value: language.host_analytic?.value,
          },
          {
            key: `match_casts_attributes[${index}][staff_member_ids][]`,
            value: language.staff?.map((staff) => staff.value),
            options: { type: 'list' as const },
          },
        ]),
      ]);

      await onCreateSegment({ formData });
    },
    [onCreateSegment],
  );

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
      contentPaddings="30px"
      footerType="primary"
      formData={currentFormData}
      submitButtonLabel="Create"
      isLoading={isLoading}
      onSendData={onSendData}
      setFormData={setCurrentFormData}
      onCloseModal={setEntityModal}
      hiddenFields={['format']}
    />
  );
};
