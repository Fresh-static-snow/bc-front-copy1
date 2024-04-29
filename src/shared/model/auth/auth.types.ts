import { AuthPermissions, User } from '@/shared/types/entities.types';

export type AuthStore = {
  authedUser: User;
  authPermissions: AuthPermissions;

  setAuthedUser: (newUser: User) => void;
  setAuthPermissions: (newPermissions: AuthPermissions) => void;
};
