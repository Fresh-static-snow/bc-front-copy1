import { useQuery } from '@tanstack/react-query';

import { REGIONS } from '@/shared/api';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as regionsService from './region.service';

export const useGetRegionOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [REGIONS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await regionsService.searchRegions({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );
