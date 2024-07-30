import { useTheme } from '@emotion/react';
import { useCallback, useEffect } from 'react';

import { languageItem } from '@/entities/match/ui/MatchForm/MatchForm.const';
import { FormLanguageListSchema } from '@/entities/match/ui/MatchForm/MatchForm.types';
import { IconPlusSvg, IconTrashSvg, IconUsersSvg } from '@/shared/assets';
import { useControlFormSection, useSessionStorage } from '@/shared/lib';
import { getRealFormFieldIndex } from '@/shared/lib/utils/getRealFormFieldIndex/getRealFormFieldIndex.util';
import { PrimarySelectableValue } from '@/shared/types/values.types';
import { AvatarBadge, CopyBlock, FormField, LangBadge } from '@/shared/ui/forms';
import { Autocomplete, PrimaryButton } from '@/shared/ui/inputs';

import * as S from './FormLanguageList.styles';
import { CopiedStaff, CopiedTalents, FormLanguageListProps } from './FormLanguageList.types';

export const FormLanguageList: React.FC<FormLanguageListProps> = ({
  control,
  name,
  watch,
  setValue,
  disabled,
  fieldsDirection = 'row',
  languageOptions,
  studioOptions,
  studioAnalyticsOptions,
  setupOptions,
  channelsOptions,
  commentatorsOptions,
  analyticsOptions,
  staffOptions,
  streamsOptions,
}) => {
  const theme = useTheme();
  const [copiedTalents, setCopiedTalents] = useSessionStorage<CopiedTalents>(
    'copied-match-form-talents',
    null,
  );
  const [copiedStaff, setCopiedStaff] = useSessionStorage<CopiedStaff>(
    'copied-match-form-staff',
    null,
  );

  const { onAppend, onRemove, fields, filteredFields } =
    useControlFormSection<FormLanguageListSchema>({
      control,
      name,
      appendingItem: languageItem,
    });

  const languages = watch(name) as FormLanguageListSchema[];

  const selectedAnalytics: PrimarySelectableValue[][] = fields.map(
    (field) => languages?.[getRealFormFieldIndex(fields, field)]?.analytics ?? [],
  );
  const hostAnalytics: PrimarySelectableValue[] = fields.map(
    (field) => languages?.[getRealFormFieldIndex(fields, field)]?.host_analytic ?? null,
  );

  const onCopyTalents = (index: number) => () => {
    const selectedLanguage = languages?.[index];

    setCopiedTalents({
      commentators: selectedLanguage?.commentators,
      backup_commentators: selectedLanguage?.backup_commentators,
      analytics: selectedLanguage?.analytics,
      host_analytic: selectedLanguage?.host_analytic,
    });
  };

  const onPasteTalents = (index: number) => () => {
    setValue(`languages.${index}.commentators`, copiedTalents?.commentators ?? []);
    setValue(`languages.${index}.backup_commentators`, copiedTalents?.backup_commentators ?? []);
    setValue(`languages.${index}.analytics`, copiedTalents?.analytics ?? []);
    setValue(`languages.${index}.host_analytic`, copiedTalents?.host_analytic ?? null);
  };

  const onCopyStaff = (index: number) => () => {
    const selectedLanguage = languages?.[index];

    setCopiedStaff({
      studio: selectedLanguage?.studio,
      studio_analytics: selectedLanguage?.studio_analytics,
      setup: selectedLanguage?.setup,
      channels: selectedLanguage?.channels,
      stream: selectedLanguage?.stream,
      staff: selectedLanguage?.staff,
    });
  };

  const onPasteStaff = (index: number) => () => {
    setValue(`languages.${index}.studio`, copiedStaff?.studio ?? null);
    setValue(`languages.${index}.studio_analytics`, copiedStaff?.studio_analytics ?? null);
    setValue(`languages.${index}.setup`, copiedStaff?.setup ?? null);
    setValue(`languages.${index}.channels`, copiedStaff?.channels ?? []);
    setValue(`languages.${index}.stream`, copiedStaff?.stream ?? null);
    setValue(`languages.${index}.staff`, copiedStaff?.staff ?? []);
  };

  const onCheckCopyTalents = (index: number) =>
    languages?.[index]?.commentators?.length > 0 ||
    languages?.[index]?.backup_commentators?.length > 0 ||
    languages?.[index]?.analytics?.length > 0 ||
    languages?.[index]?.host_analytic;

  const onCheckCopyStaff = (index: number) =>
    languages?.[index]?.studio ||
    languages?.[index]?.studio_analytics ||
    languages?.[index]?.setup ||
    languages?.[index]?.channels?.length > 0 ||
    languages?.[index]?.stream ||
    languages?.[index]?.staff?.length > 0;

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

            <CopyBlock
              title={
                <S.CopyTitle>
                  Talents{' '}
                  {languages?.[getRealFormFieldIndex(fields, field)]?.language && (
                    <LangBadge
                      option={languages?.[getRealFormFieldIndex(fields, field)]?.language}
                    />
                  )}
                </S.CopyTitle>
              }
              onCopy={onCopyTalents(getRealFormFieldIndex(fields, field))}
              onPaste={onPasteTalents(getRealFormFieldIndex(fields, field))}
              copyButtonDisabled={!onCheckCopyTalents(getRealFormFieldIndex(fields, field))}
              pasteButtonDisabled={!copiedTalents}
            >
              <FormField direction="column" label="Casters">
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

              <FormField direction="column" label="Backup casters">
                <Autocomplete.Multiple
                  optionCheckbox
                  options={commentatorsOptions}
                  control={control}
                  disabled={disabled}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.backup_commentators`}
                  AdditionalElement={AvatarBadge}
                  CustomPopupIcon={IconUsersSvg}
                  popupIconColor={theme.appColors.primary_01}
                  disablePopupIconRotation
                />
              </FormField>

              <FormField direction="column" label="Analysts">
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

              <FormField direction="column" label="Host analyst">
                <Autocomplete.Single
                  options={selectedAnalytics[getRealFormFieldIndex(fields, field)]}
                  control={control}
                  disabled={
                    disabled ||
                    selectedAnalytics[getRealFormFieldIndex(fields, field)]?.length === 0
                  }
                  name={`languages.${getRealFormFieldIndex(fields, field)}.host_analytic`}
                  AdditionalElement={AvatarBadge}
                />
              </FormField>
            </CopyBlock>

            <CopyBlock
              title={
                <S.CopyTitle>
                  Staff{' '}
                  {languages?.[getRealFormFieldIndex(fields, field)]?.language && (
                    <LangBadge
                      option={languages?.[getRealFormFieldIndex(fields, field)]?.language}
                    />
                  )}
                </S.CopyTitle>
              }
              onCopy={onCopyStaff(getRealFormFieldIndex(fields, field))}
              onPaste={onPasteStaff(getRealFormFieldIndex(fields, field))}
              copyButtonDisabled={!onCheckCopyStaff(getRealFormFieldIndex(fields, field))}
              pasteButtonDisabled={!copiedStaff}
            >
              <FormField direction="column" label="Studio">
                <Autocomplete.Single
                  options={studioOptions}
                  control={control}
                  disabled={disabled}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.studio`}
                />
              </FormField>

              <FormField direction="column" label="Analyst studio">
                <Autocomplete.Single
                  options={studioAnalyticsOptions}
                  control={control}
                  disabled={disabled}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.studio_analytics`}
                />
              </FormField>

              <FormField direction="column" label="Setup">
                <Autocomplete.Single
                  options={setupOptions}
                  control={control}
                  disabled={disabled}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.setup`}
                />
              </FormField>

              <FormField direction="column" label="Channels">
                <Autocomplete.Multiple
                  optionCheckbox
                  options={channelsOptions}
                  control={control}
                  disabled={disabled}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.channels`}
                />
              </FormField>

              <FormField direction="column" label="Stream">
                <Autocomplete.Single
                  options={streamsOptions}
                  control={control}
                  disabled={disabled}
                  name={`languages.${getRealFormFieldIndex(fields, field)}.stream`}
                />
              </FormField>

              <FormField direction="column" label="Staff">
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
            </CopyBlock>
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
