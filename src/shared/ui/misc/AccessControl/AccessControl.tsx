import { useHasAccess } from '@/shared/lib';

import { AccessControlProps } from './AccessControl.types';

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
