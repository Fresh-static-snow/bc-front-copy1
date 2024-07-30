import { useCallback } from 'react';

import { guestsItem } from '@/entities/event-segment/ui/SegmentForm/SegmentForm.const';
import { FormGuestsListSchema } from '@/entities/event-segment/ui/SegmentForm/SegmentForm.types';
import { IconPlusSvg, IconTrashSvg } from '@/shared/assets';
import { getRealFormFieldIndex, useControlFormSection } from '@/shared/lib';
import { FormField, FormListTitle } from '@/shared/ui/forms';
import { PrimaryButton, PrimaryInput, TiptapEditor } from '@/shared/ui/inputs';

import * as S from './FormGuestsList.styles';
import { FormGuestsListProps } from './FormGuestsList.types';

export const FormGuestsList: React.FC<FormGuestsListProps> = ({
  title,
  name,
  control,
  disabled,
  fieldsDirection = 'row',
}) => {
  const { onAppend, onRemove, fields, filteredFields } =
    useControlFormSection<FormGuestsListSchema>({
      control,
      name,
      appendingItem: guestsItem,
    });

  return (
    <S.Root>
      <FormListTitle title={title} />

      <S.ElementList>
        {filteredFields?.map((field) => (
          <S.Element key={field.id} $fieldsDirection={fieldsDirection}>
            <FormField direction={fieldsDirection} label="Name">
              <S.FieldWithButton>
                <PrimaryInput
                  control={control}
                  name={`${name}.${getRealFormFieldIndex(fields, field)}.name`}
                  disabled={disabled}
                  placeholder="Example: Graham Connelly"
                />

                <PrimaryButton
                  onClick={onRemove(field)}
                  variant="outlined"
                  disabled={disabled}
                  IconComponent={IconTrashSvg}
                />
              </S.FieldWithButton>
            </FormField>

            <FormField direction={fieldsDirection} label="Username">
              <PrimaryInput
                control={control}
                name={`${name}.${getRealFormFieldIndex(fields, field)}.username`}
                disabled={disabled}
                placeholder="Example: NightWing"
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Social">
              <PrimaryInput
                control={control}
                name={`${name}.${getRealFormFieldIndex(fields, field)}.social`}
                disabled={disabled}
                placeholder="Example: @NightWing"
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
