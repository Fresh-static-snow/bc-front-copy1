import { useCallback } from 'react';

import {
  GameDisciplineForm,
  GameDisciplineFormSchema,
  useCreateGameDiscipline,
} from '@/entities/game-discipline';
import { appendFormData } from '@/shared/lib';

import { CreateGameDisciplineProps } from './CreateGameDiscipline.types';

export const CreateGameDiscipline: React.FC<CreateGameDisciplineProps> = ({ setEntityModal }) => {
  const { mutateAsync: onCreateGameDiscipline, isLoading } = useCreateGameDiscipline();

  const onSendData = useCallback(
    async (data: GameDisciplineFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'title', value: data.name },
        { key: 'cover', value: data.logo, options: { type: 'file' } },
      ]);

      await onCreateGameDiscipline({ formData });
    },
    [onCreateGameDiscipline],
  );

  return (
    <GameDisciplineForm
      contentPaddings="30px"
      footerType="primary"
      submitButtonLabel="Create"
      isLoading={isLoading}
      onSendData={onSendData}
      onCloseModal={setEntityModal}
    />
  );
};
