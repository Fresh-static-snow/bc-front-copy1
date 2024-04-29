import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { AuthPermissions, User } from '@/shared/types/entities.types';

import { AuthStore } from './auth.types';

export const useAuthStore = create<
  AuthStore,
  [['zustand/persist', AuthStore], ['zustand/immer', never]]
>(
  persist(
    immer((set) => ({
      authedUser: undefined,
      authPermissions: undefined,

      setAuthedUser: (newUser: User) => {
        set((state) => {
          state.authedUser = newUser;
        });
      },
      setAuthPermissions: (newPermissions: AuthPermissions) => {
        set((state) => {
          state.authPermissions = newPermissions;
        });
      },
    })),

    { name: 'authStore' },
  ),
);
