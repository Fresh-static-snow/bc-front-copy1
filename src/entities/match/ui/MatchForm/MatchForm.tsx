import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IconUsersSvg } from '@/shared/assets';
import { mobileMedia } from '@/shared/const';
import { useMediaQuery } from '@/shared/lib';
import { PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import { Autocomplete, DatePickerInput, TimePickerInput } from '@/shared/ui/inputs';
import { FormField } from '@/shared/ui/layouts';

import { matchFormDefaultValues } from './MatchForm.const';
import { matchSchema } from './MatchForm.schema';
import * as S from './MatchForm.styles';
import { MatchFormProps, MatchFormSchema } from './MatchForm.types';
import { FormLanguageList } from './ui/FormLanguageList/FormLanguageList';

export const MatchForm: React.FC<MatchFormProps> = ({
  disciplineOptions,
  tournamentOptions,
  formatsOptions,
  teamsOptions,
  languagesOptions,
  studiosOptions,
  studiosAnalyticsOptions,
  channelsOptions,
  commentatorsOptions,
  analyticsOptions,
  staffOptions,

  FooterCustomComponent,
  contentPaddings,
  fieldsDirection = 'row',
  footerType,
  formData = {},
  defaultFormData = {},
  disabledFields = [],
  hiddenFields = [],
  withDelete,
  submitButtonLabel,
  isLoading,
  isDirty,
  onSendData,
  setFormData = () => {},
  onCloseModal = () => {},
  onClickDelete = () => {},
  onClickReset = () => {},
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(mobileMedia);

  const {
    control,
    formState: { isDirty: isFormDirty },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm<MatchFormSchema>({
    resolver: yupResolver(matchSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...matchFormDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();
  const selectedDiscipline = watch('discipline');
  const selectedTournament = watch('tournament');

  // * We filter the tournaments by the selected discipline.
  const filteredTournaments = tournamentOptions?.filter(
    (tournament) => tournament.additional === selectedDiscipline?.value,
  );

  const onSubmit: SubmitHandler<MatchFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(matchFormDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...matchFormDefaultValues,
          discipline: data.discipline,
          tournament: data.tournament,
          date: data.date,
          format: data.format,
          anotherOne: true,
        });
      }
    },
    [onSendData, reset, onCloseModal],
  );

  const onReset = useCallback(() => {
    reset();
    onClickReset();
  }, [onClickReset, reset]);

  useEffect(() => {
    const formDataString = JSON.stringify(formData);
    const formDataValuesString = JSON.stringify(formDataValues);
    const hasFormDataChanged = formDataString !== formDataValuesString;

    if (hasFormDataChanged) {
      const deepCopyFormDataValues = structuredClone(formDataValues);
      setFormData(deepCopyFormDataValues);
    }
  }, [formDataValues, setFormData]);

  useEffect(() => {
    // * If the discipline changes, we reset the tournament field. The tournament depends on the discipline.
    if (selectedDiscipline?.value !== selectedTournament?.additional) {
      setValue('tournament', null);
    }
  }, [selectedDiscipline, selectedTournament?.additional, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Content $padding={contentPaddings}>
        <S.StaticFields $fieldsDirection={fieldsDirection}>
          {!hiddenFields.includes('discipline') && (
            <FormField direction={fieldsDirection} label="Discipline" required>
              <Autocomplete.Single
                options={disciplineOptions}
                control={control}
                name="discipline"
                disabled={disabledFields.includes('discipline')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('tournament') && (
            <FormField direction={fieldsDirection} label="Tournament" required>
              <Autocomplete.Single
                options={filteredTournaments}
                control={control}
                name="tournament"
                disabled={
                  !filteredTournaments?.length ||
                  filteredTournaments?.length === 0 ||
                  disabledFields.includes('tournament')
                }
              />
            </FormField>
          )}

          {(!hiddenFields.includes('date') || !hiddenFields.includes('time')) && (
            <FormField direction={fieldsDirection} label="Date" required>
              <S.FlexWrapper>
                {!hiddenFields.includes('date') && (
                  <DatePickerInput
                    width={isMobile ? '100%' : null}
                    type="day"
                    name="date"
                    control={control}
                    disabled={disabledFields.includes('date')}
                  />
                )}
                {!hiddenFields.includes('time') && (
                  <TimePickerInput
                    width={isMobile ? '100%' : null}
                    name="time"
                    control={control}
                    disabled={disabledFields.includes('time')}
                  />
                )}
              </S.FlexWrapper>
            </FormField>
          )}

          {!hiddenFields.includes('format') && (
            <FormField direction={fieldsDirection} label="Format">
              <Autocomplete.Single
                options={formatsOptions}
                control={control}
                name="format"
                disabled={disabledFields.includes('format')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('teams') && (
            <FormField direction={fieldsDirection} label="Teams">
              <Autocomplete.Multiple
                optionCheckbox
                options={teamsOptions}
                control={control}
                name="teams"
                disabled={disabledFields.includes('teams')}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
                withOptionCreation
              />
            </FormField>
          )}
        </S.StaticFields>

        {!hiddenFields.includes('languages') && (
          <FormLanguageList
            control={control}
            watch={watch}
            setValue={setValue}
            disabled={disabledFields.includes('languages')}
            fieldsDirection={fieldsDirection}
            languageOptions={languagesOptions}
            studioOptions={studiosOptions}
            studioAnalyticsOptions={studiosAnalyticsOptions}
            channelsOptions={channelsOptions}
            commentatorsOptions={commentatorsOptions}
            analyticsOptions={analyticsOptions}
            staffOptions={staffOptions}
          />
        )}
      </S.Content>

      {footerType === 'primary' && (
        <PrimaryFormFooter
          disabledFields={disabledFields}
          hiddenFields={hiddenFields}
          withDelete={withDelete}
          switchName="visible"
          checkBoxName="anotherOne"
          control={control}
          submitChecked
          submitButtonLabel={submitButtonLabel}
          isLoading={isLoading}
          onClose={onCloseModal}
          onClickDelete={onClickDelete}
        />
      )}

      {footerType === 'secondary' && (
        <SecondaryFormFooter
          isDirty={isDirty || isFormDirty}
          CustomComponent={FooterCustomComponent}
          withDelete={withDelete}
          submitButtonLabel={submitButtonLabel}
          isLoading={isLoading}
          onClickDelete={onClickDelete}
          onReset={onReset}
        />
      )}
    </form>
  );
};
