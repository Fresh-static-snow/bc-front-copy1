import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useGetCastAnalyticStudioOptions } from '@/entities/cast-analytic-studio';
import { useGetCastChannelOptions } from '@/entities/cast-channel';
import { useGetCastLanguageOptions } from '@/entities/cast-language';
import { useGetCastStudioOptions } from '@/entities/cast-studio';
import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import {
  MatchForm,
  MatchFormSchema,
  useGetMatchForm,
  useGetMatchTypeOptions,
  usePreDeleteMatch,
  useUpdateMatch,
} from '@/entities/match';
import { useGetTeamOptions } from '@/entities/team';
import { useGetTournamentOptions } from '@/entities/tournament';
import {
  useGetAnalyticOptions,
  useGetCommentatorsOptions,
  useGetStaffMemberOptions,
} from '@/entities/user';
import { IconTriangleAlertSvg } from '@/shared/assets';
import { appendFormData, useCheckAccess, useToggle } from '@/shared/lib';
import { CircularLoader, ConfirmationModal } from '@/shared/ui/feedback';

import { UpdateMatchProps } from './UpdateMatch.types';

export const UpdateMatch: React.FC<UpdateMatchProps> = ({
  isMobile,
  requestType,
  setEntityModal,
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useToggle(false);
  const checkAccess = useCheckAccess();

  const [currentFormData, setCurrentFormData] = useState<MatchFormSchema>();

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
    data: matchData,
    isFetching: isFetchingMatchData,
    isSuccess: isSuccessMatchData,
  } = useGetMatchForm(requestType?.additional);

  const defaultFormData = useMemo<MatchFormSchema>(() => {
    if (!matchData) {
      return {};
    }

    return {
      visible: matchData?.visible,
      discipline: {
        label: matchData?.tournament?.discipline?.title,
        value: String(matchData?.tournament?.discipline?.id),
      },
      tournament: {
        label: matchData?.tournament?.title,
        value: String(matchData?.tournament?.id),
        additional: String(matchData?.tournament?.discipline?.id),
      },
      date: matchData?.start_date ? dayjs(matchData?.start_date).format() : undefined,
      time: [matchData?.start_time ?? undefined, matchData?.end_time ?? undefined],
      format: matchData?.format
        ? {
            label: matchData?.format?.name,
            value: String(matchData?.format?.value),
          }
        : undefined,
      teams: [
        matchData?.team_one?.name
          ? { label: matchData.team_one.name, value: String(matchData.team_one.id) }
          : null,
        matchData?.team_two?.name
          ? { label: matchData.team_two.name, value: String(matchData.team_two.id) }
          : null,
      ].filter(Boolean),
      languages: matchData?.match_casts?.map((cast) => ({
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
        channels: cast?.channels?.map((channel) => ({
          label: channel?.name,
          value: String(channel?.id),
        })),
        commentators: cast?.commentators?.map((commentator) => ({
          label: commentator?.display_name,
          value: String(commentator?.id),
        })),
        backup_commentator: cast?.backup_commentator
          ? {
              label: cast?.backup_commentator?.display_name,
              value: String(cast?.backup_commentator?.id),
            }
          : undefined,
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
  }, [matchData]);

  const { data: disciplineOptions } = useGetGameDisciplineOptions();
  const { data: tournamentOptions } = useGetTournamentOptions();
  const { data: formatsOptions } = useGetMatchTypeOptions();
  const { data: teamsOptions } = useGetTeamOptions();
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
  const { data: studiosAnalyticsOptions } = useGetCastAnalyticStudioOptions();
  const { data: studiosOptions } = useGetCastStudioOptions();
  const { data: staffOptions } = useGetStaffMemberOptions(
    startDate,
    endDate,
    requestType?.additional,
  );

  const { mutateAsync: onUpdateMatch, isLoading } = useUpdateMatch();
  const { mutateAsync: onDeleteMatch, isLoading: isDeleteLoading } = usePreDeleteMatch();

  const onSendData = useCallback(
    async (data: MatchFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'visible', value: String(data.visible) },
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'tournament_id', value: data.tournament?.value },
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
        { key: 'best_of', value: data.format?.value, options: { canBeEmpty: true } },

        ...(data.teams?.[0]?.value.includes('new_created_option')
          ? [{ key: 'team_one_attributes[name]', value: data.teams?.[0]?.label }]
          : [
              {
                key: 'team_one_id',
                value: data.teams?.[0]?.value,
                options: { canBeEmpty: true },
              },
            ]),

        ...(data.teams?.[1]?.value.includes('new_created_option')
          ? [{ key: 'team_two_attributes[name]', value: data.teams?.[1]?.label }]
          : [
              {
                key: 'team_two_id',
                value: data.teams?.[1]?.value,
                options: { canBeEmpty: true },
              },
            ]),

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
              key: `match_casts_attributes[${index}][commentator_ids][]`,
              value: language.commentators?.map((commentator) => commentator.value),
              options: { type: 'list' as const, canBeEmpty: true },
            },
            {
              key: `match_casts_attributes[${index}][match_backup_commentator_attributes][user_id]`,
              value: language.backup_commentator?.value,
              options: { canBeEmpty: true },
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

      await onUpdateMatch({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateMatch],
  );

  const onDelete = useCallback(async () => {
    await onDeleteMatch({ id: Number(requestType?.additional) });

    setEntityModal();
  }, [requestType?.additional, onDeleteMatch, setEntityModal]);

  useEffect(() => {
    if (commentatorsList?.length > 0) {
      enqueueSnackbar('One or more commentators have an event scheduled for the specified time.', {
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
        'One or more analytics users have an event scheduled for the specified time.',
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
        message="Would you like to remove this match from the calendar?"
      />

      {!isFetchingMatchData && isSuccessMatchData ? (
        <MatchForm
          disciplineOptions={disciplineOptions}
          analyticsOptions={analyticsOptions}
          channelsOptions={channelsOptions}
          commentatorsOptions={commentatorsOptions}
          formatsOptions={formatsOptions}
          languagesOptions={languagesOptions}
          studiosAnalyticsOptions={studiosAnalyticsOptions}
          studiosOptions={studiosOptions}
          teamsOptions={teamsOptions}
          tournamentOptions={tournamentOptions}
          staffOptions={staffOptions}
          contentPaddings={isMobile ? '20px' : '30px'}
          fieldsDirection={isMobile ? 'column' : 'row'}
          footerType="primary"
          formData={currentFormData}
          defaultFormData={defaultFormData}
          hiddenFields={['anotherOne']}
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
