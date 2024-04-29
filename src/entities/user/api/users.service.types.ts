import {
  AuthPermissions,
  User,
  UserNotificationPage,
  UserOption,
  UserOptionWithAvailability,
  UserOptionWithDisciplines,
  UserWithEvents,
} from '@/shared/types/entities.types';

// * Params.
export type Scope =
  | 'staff_members'
  | 'participants'
  | 'main_participants'
  | 'media_representatives'
  | 'commentators'
  | 'analytics'
  | 'managers'
  | 'only_deleted';

export type GetUsersParams<T extends Scope> = {
  scope?: T;
  start_at?: string;
  end_at?: string;
  match_id?: number | string;
};

export type GetUserParams = {
  id: number | string;
};

export type CreateUserParams = {
  formData: FormData;
};

export type UpdateUserParams = {
  id: number | string;
  formData: FormData;
};

export type RestorePreDeletedUserParams = {
  id: number | string;
};

export type PreDeleteUserParams = {
  id: number | string;
  hide_history: boolean;
};

export type DeleteUserParams = {
  id: number | string;
};

export type UpdateUserPasswordParams = {
  formData: FormData;
};

export type GetAuthenticatedUserNotificationsParams = {
  page: number;
  start_id: number;
};

// * Responses.
export type UserGroup = {
  discipline: string;
  users: UserOptionWithDisciplines[];
};

export type GetUsersResponse<T extends Scope> = T extends 'participants'
  ? UserGroup[]
  : T extends 'only_deleted'
  ? UserWithEvents[]
  : T extends 'staff_members' | 'commentators' | 'analytics'
  ? UserOptionWithAvailability[]
  : UserOption[];

export type GetUserResponse = UserWithEvents;

export type PutUserResponse = User;

export type GetAuthenticatedUserResponse = User;

export type GetUserPermissionsResponse = AuthPermissions;

export type GetAuthenticatedUserNotificationsResponse = UserNotificationPage;

export type GetAuthenticatedUserNotificationsCountResponse = {
  count: number;
};
