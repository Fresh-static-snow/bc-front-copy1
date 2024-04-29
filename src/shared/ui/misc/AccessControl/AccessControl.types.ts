export type AccessControlProps = {
  /**
   * The permissions that the user must have to render the children.
   */
  necessaryPermissions?: string[];
  /**
   * The method to check the permissions.
   * @default 'every'
   */
  method?: 'some' | 'every';
  /**
   * The component to render if the user have access.
   */
  children: React.ReactNode;
  /**
   * The component to render if the user does not have access.
   * @default null
   */
  NoAccessComponent?: React.ReactNode;
};
