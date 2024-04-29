import { InfiniteData, useInfiniteQuery, useQuery, useQueryClient } from '@tanstack/react-query';

import { MANAGEMENT } from '@/shared/api';
import { UserNotificationPage } from '@/shared/types/entities.types';

import * as managementService from './management.service';

export const useGetDashboardUsers = (term: string) =>
  useQuery(
    [MANAGEMENT.USERS, term],
    async () => {
      const result = await managementService.getDashboardUsers({ term });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetDashboardCompanies = (term?: string) =>
  useQuery(
    [MANAGEMENT.COMPANIES, term],
    async () => {
      const result = await managementService.getDashboardCompanies({ term });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetDashboardNotifications = (enabled = true) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<InfiniteData<UserNotificationPage>>([
    MANAGEMENT.NOTIFICATIONS,
  ]);

  return useInfiniteQuery(
    [MANAGEMENT.NOTIFICATIONS],
    async ({ pageParam = 1 }) => {
      const result = await managementService.getDashboardNotifications({
        page: pageParam as number,
        start_id: data?.pages?.[0]?.start_id ?? null,
      });
      return result;
    },
    {
      enabled,
      staleTime: Infinity,
      cacheTime: Infinity,
      getNextPageParam: (lastPage, pageParams) => {
        const nextPage =
          lastPage?.total_pages !== pageParams.length ? pageParams.length + 1 : undefined;
        return nextPage;
      },
    },
  );
};

export const useGetDashboardCounts = () =>
  useQuery(
    [MANAGEMENT.COUNTS],
    async () => {
      const result = await managementService.getDashboardCounts();
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetManagementItems = () =>
  useQuery(
    [MANAGEMENT.ITEMS_COUNTS],
    async () => {
      const result = await managementService.getManagementItems();
      return result;
    },
    { refetchOnWindowFocus: false },
  );
