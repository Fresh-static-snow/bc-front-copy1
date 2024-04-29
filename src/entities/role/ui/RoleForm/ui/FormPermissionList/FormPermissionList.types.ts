import { Control, FieldValues } from 'react-hook-form';

export type FormPermissionListProps = {
  name: string;
  control: Control<FieldValues>;
  disabled?: boolean;
};
