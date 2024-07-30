import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IconUsersSvg } from '@/shared/assets';
import {
  AvatarBadge,
  FormDescriptionSection,
  FormField,
  PrimaryFormFooter,
  SecondaryFormFooter,
} from '@/shared/ui/forms';
import { Autocomplete, DatePickerInput, PrimaryDropzone, PrimaryInput } from '@/shared/ui/inputs';

import { tournamentFormDefaultValues, tournamentTierList } from './TournamentForm.const';
import { tournamentSchema } from './TournamentForm.schema';
import * as S from './TournamentForm.styles';
import { TournamentFormProps, TournamentFormSchema } from './TournamentForm.types';

export const TournamentForm: React.FC<TournamentFormProps> = ({
  disciplineOptions,
  mainParticipantsOptions,
  mediaRepresentativeOptions,
  regionsOptions,
  typesOptions,
  sponsorsOptions,
  ownersOptions,

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

  const {
    control,
    formState: { isDirty: isFormDirty },
    handleSubmit,
    reset,
    watch,
  } = useForm<TournamentFormSchema>({
    resolver: yupResolver(tournamentSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...tournamentFormDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();

  const onSubmit: SubmitHandler<TournamentFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(tournamentFormDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...tournamentFormDefaultValues,
          discipline: data.discipline,
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

          {!hiddenFields.includes('name') && (
            <FormField direction={fieldsDirection} label="Name" required>
              <PrimaryInput
                control={control}
                name="name"
                placeholder="Example: ESL Challenger at DreamHack Valencia 2022"
                disabled={disabledFields.includes('name')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('main_participant') && (
            <FormField direction={fieldsDirection} label="Main Participant">
              <Autocomplete.Single
                options={mainParticipantsOptions}
                control={control}
                name="main_participant"
                disabled={disabledFields.includes('main_participant')}
                AdditionalElement={AvatarBadge}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
              />
            </FormField>
          )}

          {!hiddenFields.includes('media_representative') && (
            <FormField direction={fieldsDirection} label="Media Representative">
              <Autocomplete.Single
                options={mediaRepresentativeOptions}
                control={control}
                name="media_representative"
                disabled={disabledFields.includes('media_representative')}
                AdditionalElement={AvatarBadge}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
              />
            </FormField>
          )}

          {!hiddenFields.includes('date') && (
            <FormField direction={fieldsDirection} label="Date" required>
              <DatePickerInput
                type="range"
                name="date"
                control={control}
                disabled={disabledFields.includes('date')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('region') && (
            <FormField direction={fieldsDirection} label="Region">
              <Autocomplete.Single
                options={regionsOptions}
                control={control}
                name="region"
                disabled={disabledFields.includes('region')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('type') && (
            <FormField direction={fieldsDirection} label="Type">
              <Autocomplete.Single
                options={typesOptions}
                control={control}
                name="type"
                disabled={disabledFields.includes('type')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('tier') && (
            <FormField direction={fieldsDirection} label="Tier">
              <Autocomplete.Single
                options={tournamentTierList}
                control={control}
                name="tier"
                disabled={disabledFields.includes('tier')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('sponsors') && (
            <FormField direction={fieldsDirection} label="Sponsors">
              <Autocomplete.Multiple
                optionCheckbox
                options={sponsorsOptions}
                control={control}
                name="sponsors"
                disabled={disabledFields.includes('sponsors')}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
                withOptionCreation
              />
            </FormField>
          )}

          {!hiddenFields.includes('owner') && (
            <FormField direction={fieldsDirection} label="Owner">
              <Autocomplete.Single
                options={ownersOptions}
                control={control}
                name="owner"
                disabled={disabledFields.includes('owner')}
                AdditionalElement={AvatarBadge}
                CustomPopupIcon={IconUsersSvg}
                popupIconColor={theme.appColors.primary_01}
                disablePopupIconRotation
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
        </S.StaticFields>

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
