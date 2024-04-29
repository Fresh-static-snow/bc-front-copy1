import { useCallback } from 'react';
import { useFieldArray } from 'react-hook-form';

import { IconPlusSvg, IconTrashSvg } from '@/shared/assets';
import { getRealFormFieldIndex } from '@/shared/lib';
import { FormListTitle } from '@/shared/ui/forms';
import { PrimaryButton, PrimaryInput, PrimaryTextarea } from '@/shared/ui/inputs';
import { FormField } from '@/shared/ui/layouts';

import { descriptionItem } from '../../TournamentForm.const';
import { FormDescriptionListSchema } from '../../TournamentForm.types';
import * as S from './FormDescriptionList.styles';
import { FormDescriptionListProps } from './FormDescriptionList.types';

export const FormDescriptionList: React.FC<FormDescriptionListProps> = ({
  title,
  name,
  control,
  disabled,
  fieldsDirection = 'row',
}) => {
  const { fields, append, update } = useFieldArray({
    control,
    name,
  });

  const filteredFields = (fields as FormDescriptionListSchema[])?.filter((field) => !field.removed);

  const onAppend = useCallback(() => {
    append(descriptionItem);
  }, [append]);

  const onRemove = useCallback(
    (field: FormDescriptionListSchema) => () => {
      const realIndex = getRealFormFieldIndex(fields, field);
      // * If the field was removed, we add `removed` marker to it.
      update(realIndex, { ...field, removed: true });
    },
    [fields, update],
  );

  return (
    <S.Root>
      <FormListTitle title={title} />

      <S.ElementList>
        {filteredFields?.map((field) => (
          <S.Element key={field.id} $fieldsDirection={fieldsDirection}>
            <FormField direction={fieldsDirection} label="Title">
              <S.FieldWithButton>
                <PrimaryInput
                  control={control}
                  name={`${name}.${getRealFormFieldIndex(fields, field)}.title`}
                  disabled={disabled}
                  placeholder="Example: Organizer"
                />

                <PrimaryButton
                  onClick={onRemove(field)}
                  variant="outlined"
                  disabled={disabled}
                  IconComponent={IconTrashSvg}
                />
              </S.FieldWithButton>
            </FormField>

            <FormField direction={fieldsDirection} label="Description">
              <PrimaryTextarea
                control={control}
                name={`${name}.${getRealFormFieldIndex(fields, field)}.description`}
                disabled={disabled}
                placeholder="Example: ESL"
              />
            </FormField>
          </S.Element>
        ))}
      </S.ElementList>

      <S.ButtonWrapper>
        <PrimaryButton
          onClick={onAppend}
          variant="outlined"
          disabled={disabled}
          IconComponent={IconPlusSvg}
          label={`Add ${name}`}
        />
      </S.ButtonWrapper>
    </S.Root>
  );
};
