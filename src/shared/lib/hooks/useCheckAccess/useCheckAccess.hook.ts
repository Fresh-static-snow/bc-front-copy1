import { useCallback, useMemo } from 'react';

import { useAuthStore } from '@/shared/model/auth/auth.store';

export const useCheckAccess = (
  method: 'some' | 'every' = 'every',
): ((permissions: string[]) => boolean) => {
  const authPermissions = useAuthStore((state) => state.authPermissions);

  const checkAccess = useCallback(
    (permissions: string[]) => {
      if (!authPermissions) {
        return false;
      }

      if (permissions.length === 0) {
        return true;
      }

      if (method === 'every') {
        return permissions.every(
          (permission) => authPermissions?.routes?.indexOf(permission) !== -1,
        );
      }
      if (method === 'some') {
        return permissions.some(
          (permission) => authPermissions?.routes?.indexOf(permission) !== -1,
        );
      }

      return false;
    },
    [authPermissions, method],
  );

  return checkAccess;
};

export const useHasAccess = (
  necessaryPermissions: string[] = [],
  method: 'some' | 'every' = 'every',
): boolean => {
  const checkAccess = useCheckAccess(method);

  const hasAccess = useMemo(
    () => checkAccess(necessaryPermissions),
    [checkAccess, necessaryPermissions],
  );

  return hasAccess;
};
