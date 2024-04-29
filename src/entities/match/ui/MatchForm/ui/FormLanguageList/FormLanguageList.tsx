import { useTheme } from '@emotion/react';
import { useCallback, useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';

import { languageItem } from '@/entities/match/ui/MatchForm/MatchForm.const';
import { FormLanguageListSchema } from '@/entities/match/ui/MatchForm/MatchForm.types';
import { IconPlusSvg, IconTrashSvg, IconUsersSvg } from '@/shared/assets';
import { getRealFormFieldIndex } from '@/shared/lib/utils/getRealFormFieldIndex/getRealFormFieldIndex.util';
import { PrimarySelectableValue } from '@/shared/types/values.types';
import { AvatarBadge, LangBadge } from '@/shared/ui/forms';
import { Autocomplete, PrimaryButton } from '@/shared/ui/inputs';
import { FormField } from '@/shared/ui/layouts';

import * as S from './FormLanguageList.styles';
import { FormLanguageListProps } from './FormLanguageList.types';

export const FormLanguageList: React.FC<FormLanguageListProps> = ({
  control,
  watch,
  setValue,
  disabled,
  fieldsDirection = 'row',
  languageOptions,
  studioOptions,
  studioAnalyticsOptions,
  channelsOptions,
  commentatorsOptions,
  analyticsOptions,
  staffOptions,
}) => {
  const theme = useTheme();

  const { fields, append, update } = useFieldArray({
    control,
    name: 'languages',
  });

  const filteredFields = (fields as FormLanguageListSchema[])?.filter((field) => !field.removed);

  const selectedAnalytics: PrimarySelectableValue[][] = fields.map((field) =>
    watch(`languages.${getRealFormFieldIndex(fields, field)}.analytics`),
  );
  const hostAnalytics: PrimarySelectableValue[] = fields.map((field) =>
    watch(`languages.${getRealFormFieldIndex(fields, field)}.host_analytic`),
  );

  const onAppend = useCallback(() => {
    append(languageItem);
  }, [append]);

  const onRemove = useCallback(
    (field: FormLanguageListSchema) => () => {
      const realIndex = getRealFormFieldIndex(fields, field);
      // * If the field was removed, we add `removed` marker to it.
      update(realIndex, { ...field, removed: true });
    },
    [fields, update],
  );

  useEffect(() => {
    fields.forEach((field, index) => {
      if (
        selectedAnalytics[index] &&
        hostAnalytics[index] &&
        !selectedAnalytics[index].find((item) => item.value === hostAnalytics[index]?.value)
      ) {
        setValue(`languages.${getRealFormFieldIndex(fields, field)}.host_analytic`, null);
      }
    });
  }, [fields, hostAnalytics, selectedAnalytics, setValue]);

  return (
    <S.Root>
      <S.ElementList>
        {filteredFields?.map((field, index) => (
          <S.Element key={field.id} $fieldsDirection={fieldsDirection}>
            <FormField direction={fieldsDirection} label={`Language ${index + 1}`}>
              <S.FieldWithButton>
                <Autocomplete.Single
                  options={languageOptions}
                  control={control}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.language`}
                  disabled={disabled}
                  AdditionalElement={LangBadge}
                />

                <PrimaryButton
                  onClick={onRemove(field)}
                  variant="outlined"
                  disabled={disabled}
                  IconComponent={IconTrashSvg}
                />
              </S.FieldWithButton>
            </FormField>

            <FormField direction={fieldsDirection} label="Studio">
              <Autocomplete.Single
                options={studioOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.studio`}
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Studio analytics">
              <Autocomplete.Single
                options={studioAnalyticsOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.studio_analytics`}
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Channels">
              <Autocomplete.Multiple
                optionCheckbox
                options={channelsOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.channels`}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Commentators">
              <Autocomplete.Multiple
                optionCheckbox
                options={commentatorsOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.commentators`}
                AdditionalElement={AvatarBadge}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Backup commentator">
              <Autocomplete.Single
                options={commentatorsOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.backup_commentator`}
                AdditionalElement={AvatarBadge}
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Analytics">
              <Autocomplete.Multiple
                optionCheckbox
                options={analyticsOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.analytics`}
                AdditionalElement={AvatarBadge}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Host analytic">
              <Autocomplete.Single
                options={selectedAnalytics[getRealFormFieldIndex(fields, field)]}
                control={control}
                disabled={
                  disabled || selectedAnalytics[getRealFormFieldIndex(fields, field)]?.length === 0
                }
                name={`languages.${getRealFormFieldIndex(fields, field)}.host_analytic`}
                AdditionalElement={AvatarBadge}
              />
            </FormField>

            <FormField direction={fieldsDirection} label="Staff">
              <Autocomplete.Multiple
                optionCheckbox
                options={staffOptions}
                control={control}
                disabled={disabled}
                name={`languages.${getRealFormFieldIndex(fields, field)}.staff`}
                AdditionalElement={AvatarBadge}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
              />
            </FormField>
          </S.Element>
        ))}
      </S.ElementList>

      <S.ButtonWrapper>
        <PrimaryButton
          onClick={onAppend}
          variant="outlined"
          IconComponent={IconPlusSvg}
          label="Add language"
          disabled={disabled}
        />
      </S.ButtonWrapper>
    </S.Root>
  );
};
