import { useCallback, useMemo } from 'react';

import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import { TeamForm, TeamFormSchema, useGetTeamForm, useUpdateTeam } from '@/entities/team';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';

import { UpdateTeamProps } from './UpdateTeam.types';

export const UpdateTeam: React.FC<UpdateTeamProps> = ({ requestType, setEntityModal }) => {
  const {
    data: teamData,
    isFetching: isFetchingTeamData,
    isSuccess: isSuccessTeamData,
  } = useGetTeamForm(requestType?.additional);

  const defaultFormData = useMemo<TeamFormSchema>(() => {
    if (!teamData) {
      return {};
    }

    return {
      discipline: { label: teamData?.discipline?.title, value: String(teamData?.discipline?.id) },
      name: teamData?.name,
    };
  }, [teamData]);

  const { data: disciplinesData } = useGetGameDisciplineOptions();

  const { mutateAsync: onUpdateTeam, isLoading: isUpdateLoading } = useUpdateTeam();

  const onSendData = useCallback(
    async (data: TeamFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'name', value: data.name },
      ]);

      await onUpdateTeam({ id: requestType?.additional, formData });
    },
    [requestType?.additional, onUpdateTeam],
  );

  return (
    <>
      {!isFetchingTeamData && isSuccessTeamData ? (
        <TeamForm
          disciplineOptions={disciplinesData}
          hiddenFields={['anotherOne']}
          defaultFormData={defaultFormData}
          contentPaddings="30px"
          footerType="primary"
          submitButtonLabel="Update"
          isLoading={isUpdateLoading}
          onSendData={onSendData}
          onCloseModal={setEntityModal}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
