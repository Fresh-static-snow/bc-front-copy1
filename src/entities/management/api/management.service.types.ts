import {
  ManagementItems,
  ManagementUsersGroup,
  UserCompanyWithUsersCount,
  UserNotificationPage,
} from '@/shared/types/entities.types';

// * Params.
export type GetManagementUsersParams = {
  term?: string;
};

export type GetManagementCompaniesParams = {
  term?: string;
};

export type GetManagementNotificationsParams = {
  page: number;
  start_id: number;
};

// * Responses.
export type GetManagementUsersResponse = ManagementUsersGroup[];

export type GetManagementCompaniesResponse = UserCompanyWithUsersCount[];

export type GetManagementNotificationsResponse = UserNotificationPage;

export type GetManagementCountsResponse = {
  roles_count: number;
  users_count: number;
  companies_count: number;
};

export type GetManagementItemsResponse = ManagementItems;
