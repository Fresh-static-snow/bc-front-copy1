import { Control, FieldValues } from 'react-hook-form';

export type FieldWithMeta = {
  removed?: boolean;
  elemId?: string;
};

export type UseControlFormSectionProps = {
  control: Control<FieldValues>;
  name: string;
  appendingItem: unknown;
};
