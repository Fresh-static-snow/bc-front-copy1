import { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';

import { Switch } from '@/shared/ui/inputs';

import { FormPermissionListSchema } from '../../RoleForm.types';
import * as S from './FormPermissionList.styles';
import { FormPermissionListProps } from './FormPermissionList.types';

export const FormPermissionList: React.FC<FormPermissionListProps> = ({
  name,
  control,
  disabled,
}) => {
  const { fields, update } = useFieldArray({
    control,
    name,
  });

  const onChangeElementStatus = useCallback(
    (field: FormPermissionListSchema, index: number) => () => {
      update(index, {
        ...field,
        checked: !(fields as FormPermissionListSchema[])[index].checked,
      });
    },
    [fields, update],
  );

  return (
    <S.Root>
      {fields?.map((field: FormPermissionListSchema, index) => (
        <S.Element key={field.elemId}>
          <S.Header>
            <S.Title>{field.title}</S.Title>
            <Switch
              checked={field.checked ?? false}
              onChange={onChangeElementStatus(field, index)}
              disabled={disabled}
            />
          </S.Header>

          <S.Description>{field.description}</S.Description>
        </S.Element>
      ))}
    </S.Root>
  );
};
