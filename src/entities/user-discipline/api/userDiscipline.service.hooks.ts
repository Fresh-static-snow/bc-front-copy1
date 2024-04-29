import { useQuery } from '@tanstack/react-query';

import { USER_DISCIPLINES } from '@/shared/api';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as userDisciplinesService from './userDiscipline.service';

export const useGetUserDisciplineOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [USER_DISCIPLINES.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await userDisciplinesService.searchUserDisciplines({});
      return result?.map(({ id, title }) => ({ label: title, value: String(id) }));
    },
    { refetchOnWindowFocus: false },
  );
