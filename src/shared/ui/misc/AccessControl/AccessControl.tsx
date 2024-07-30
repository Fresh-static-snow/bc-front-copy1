import { useHasAccess } from '@/shared/lib';

import { AccessControlProps } from './AccessControl.types';

/**
 * This component checks the ability to access the components that are wrapped in it.
 * Permissions are taken from the permissions store.
 */
export const AccessControl: React.FC<AccessControlProps> = ({
  necessaryPermissions = [],
  method = 'every',
  children,
  NoAccessComponent = null,
}) => {
  const hasAccess = useHasAccess(necessaryPermissions, method);

  if (hasAccess) {
    return <>{children}</>;
  }

  return <>{NoAccessComponent}</>;
};
