import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormGuestsList } from '@/entities/event-segment/ui/SegmentForm/ui/FormGuestsList/FormGuestsList';
import { mobileMedia } from '@/shared/const';
import { useMediaQuery } from '@/shared/lib';
import {
  FormDescriptionSection,
  FormField,
  PrimaryFormFooter,
  SecondaryFormFooter,
} from '@/shared/ui/forms';
import {
  Autocomplete,
  DatePickerInput,
  PrimaryDropzone,
  PrimaryInput,
  TimePickerInput,
} from '@/shared/ui/inputs';

import { segmentFormDefaultValues } from './SegmentForm.const';
import { segmentSchema } from './SegmentForm.schema';
import * as S from './SegmentForm.styles';
import { SegmentFormProps, SegmentFormSchema } from './SegmentForm.types';
import { FormLanguageList } from './ui/FormLanguageList/FormLanguageList';

export const SegmentForm: React.FC<SegmentFormProps> = ({
  disciplineOptions,
  tournamentOptions,
  formatsOptions,
  languagesOptions,
  studiosOptions,
  studiosAnalyticsOptions,
  setupsOptions,
  channelsOptions,
  commentatorsOptions,
  analyticsOptions,
  staffOptions,
  streamsOptions,

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
  const isMobile = useMediaQuery(mobileMedia);

  const {
    control,
    formState: { isDirty: isFormDirty },
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm<SegmentFormSchema>({
    resolver: yupResolver(segmentSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...segmentFormDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();
  const selectedDiscipline = watch('discipline');
  const selectedTournament = watch('tournament');

  // * We filter the tournaments by the selected discipline.
  const filteredTournaments = tournamentOptions?.filter(
    (tournament) => tournament.additional === selectedDiscipline?.value,
  );

  const onSubmit: SubmitHandler<SegmentFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(segmentFormDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...segmentFormDefaultValues,
          discipline: data.discipline,
          tournament: data.tournament,
          date: data.date,
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
            <FormField direction={fieldsDirection} label="Event" required>
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

          {!hiddenFields.includes('title') && (
            <FormField direction={fieldsDirection} label="Title">
              <PrimaryInput
                name="title"
                control={control}
                disabled={disabledFields.includes('title')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('cover') && (
            <FormField direction={fieldsDirection} label="Cover" required>
              <PrimaryDropzone
                control={control}
                name="cover"
                types={['jpg', 'png', 'svg']}
                disabled={disabledFields.includes('cover')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('logo') && (
            <FormField direction={fieldsDirection} label="Logo">
              <PrimaryDropzone
                control={control}
                name="logo"
                types={['jpg', 'png', 'svg']}
                disabled={disabledFields.includes('logo')}
              />
            </FormField>
          )}
        </S.StaticFields>

        {!hiddenFields.includes('guests') && (
          <FormGuestsList
            title="Guests"
            name="guests"
            control={control}
            disabled={disabledFields.includes('guests')}
            fieldsDirection={fieldsDirection}
          />
        )}

        {!hiddenFields.includes('descriptions') && (
          <FormDescriptionSection.Section
            title="Description"
            name="descriptions"
            control={control}
            disabled={disabledFields.includes('descriptions')}
            fieldsDirection={fieldsDirection}
          />
        )}

        {!hiddenFields.includes('medias') && (
          <FormDescriptionSection.Section
            title="Media"
            name="medias"
            control={control}
            disabled={disabledFields.includes('medias')}
            fieldsDirection={fieldsDirection}
          />
        )}

        {!hiddenFields.includes('languages') && (
          <FormLanguageList
            control={control}
            name="languages"
            watch={watch}
            setValue={setValue}
            disabled={disabledFields.includes('languages')}
            fieldsDirection={fieldsDirection}
            languageOptions={languagesOptions}
            studioOptions={studiosOptions}
            studioAnalyticsOptions={studiosAnalyticsOptions}
            setupOptions={setupsOptions}
            channelsOptions={channelsOptions}
            commentatorsOptions={commentatorsOptions}
            analyticsOptions={analyticsOptions}
            staffOptions={staffOptions}
            streamsOptions={streamsOptions}
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
