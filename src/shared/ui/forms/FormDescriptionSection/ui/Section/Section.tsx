import { useCallback } from 'react';

import { FormGuestsListSchema } from '@/entities/event-segment/ui/SegmentForm/SegmentForm.types';
import { IconPlusSvg, IconTrashSvg } from '@/shared/assets';
import { getRealFormFieldIndex, useControlFormSection } from '@/shared/lib';
import { FormField, FormListTitle } from '@/shared/ui/forms';
import { PrimaryButton, PrimaryInput, TiptapEditor } from '@/shared/ui/inputs';

import { sectionItem } from './Section.const';
import * as S from './Section.styles';
import { SectionProps, SectionSchema } from './Section.types';

export const Section: React.FC<SectionProps> = ({
  title,
  name,
  control,
  disabled,
  fieldsDirection = 'row',
}) => {
  const { onAppend, onRemove, fields, filteredFields } = useControlFormSection<SectionSchema>({
    control,
    name,
    appendingItem: sectionItem,
  });

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
              <TiptapEditor
                control={control}
                name={`${name}.${getRealFormFieldIndex(fields, field)}.description`}
                disabled={disabled}
                placeholder="Write something..."
              />
            </FormField>
          </S.Element>
        ))}
      </S.ElementList>

      <S.ButtonWrapper>
        <PrimaryButton
          data-testid="add-section-button"
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
