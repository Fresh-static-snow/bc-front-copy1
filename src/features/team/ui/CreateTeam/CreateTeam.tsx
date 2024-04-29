import { useCallback } from 'react';

import { useGetGameDisciplineOptions } from '@/entities/game-discipline';
import { TeamForm, TeamFormSchema, useCreateTeam } from '@/entities/team';
import { appendFormData } from '@/shared/lib';

import { CreateTeamProps } from './CreateTeam.types';

export const CreateTeam: React.FC<CreateTeamProps> = ({ setEntityModal }) => {
  const { mutateAsync: onCreateTeam, isLoading: isCreateLoading } = useCreateTeam();

  const { data: disciplinesData } = useGetGameDisciplineOptions();

  const onSendData = useCallback(
    async (data: TeamFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'game_discipline_id', value: data.discipline?.value },
        { key: 'name', value: data.name },
      ]);

      await onCreateTeam({ formData });
    },
    [onCreateTeam],
  );

  return (
    <TeamForm
      disciplineOptions={disciplinesData}
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isCreateLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
