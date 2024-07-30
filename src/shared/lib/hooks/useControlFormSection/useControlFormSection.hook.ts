import { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';

import { getRealFormFieldIndex } from '@/shared/lib';

import { FieldWithMeta, UseControlFormSectionProps } from './useControlFormSection.types';

export const useControlFormSection = <T extends FieldWithMeta>({
  control,
  name,
  appendingItem,
}: UseControlFormSectionProps) => {
  const { fields, append, update, remove } = useFieldArray({
    control,
    name,
  });

  const filteredFields = (fields as unknown as T[])?.filter((field) => !field.removed);

  const onAppend = useCallback(() => {
    append(appendingItem);
  }, [append]);

  const onRemove = useCallback(
    (field: T) => () => {
      const realIndex = getRealFormFieldIndex(fields, field);

      if (field.elemId) {
        update(realIndex, { ...field, removed: true });
      } else {
        remove(realIndex);
      }
    },
    [fields, update],
  );

  return { onAppend, onRemove, fields, filteredFields };
};
