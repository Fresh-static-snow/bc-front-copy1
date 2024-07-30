import { useTheme } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { IconUsersSvg } from '@/shared/assets';
import { AvatarBadge, FormField, PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import {
  Autocomplete,
  DatePickerInput,
  PrimaryDropzone,
  PrimaryInput,
  PrimaryTextarea,
  TimePickerInput,
} from '@/shared/ui/inputs';

import { corporateFormDefaultValues } from './CorporateForm.const';
import { corporateSchema } from './CorporateForm.schema';
import * as S from './CorporateForm.styles';
import { CorporateFormProps, CorporateFormSchema } from './CorporateForm.types';

export const CorporateForm: React.FC<CorporateFormProps> = ({
  participantsOptions,
  mainParticipantsOptions,

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
  } = useForm<CorporateFormSchema>({
    resolver: yupResolver(corporateSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...corporateFormDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();

  const onSubmit: SubmitHandler<CorporateFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(corporateFormDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...corporateFormDefaultValues,
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
      <S.Content $padding={contentPaddings} $fieldsDirection={fieldsDirection}>
        {!hiddenFields.includes('name') && (
          <FormField direction={fieldsDirection} label="Name" required>
            <PrimaryInput
              control={control}
              name="name"
              placeholder="Example: Certification training"
              disabled={disabledFields.includes('name')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('location') && (
          <FormField direction={fieldsDirection} label="Location">
            <PrimaryInput
              control={control}
              name="location"
              placeholder="Example: 55 Velyka Vasylkivska, QU Tower"
              disabled={disabledFields.includes('location')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('cover') && (
          <FormField direction={fieldsDirection} label="Cover">
            <PrimaryDropzone
              control={control}
              name="cover"
              types={['jpg', 'png']}
              disabled={disabledFields.includes('cover')}
            />
          </FormField>
        )}

        {(!hiddenFields.includes('date') || !hiddenFields.includes('time')) && (
          <FormField direction={fieldsDirection} label="Date" required>
            <S.FlexWrapper>
              {!hiddenFields.includes('date') && (
                <DatePickerInput
                  type="day"
                  name="date"
                  control={control}
                  disabled={disabledFields.includes('date')}
                />
              )}
              {!hiddenFields.includes('time') && (
                <TimePickerInput
                  name="time"
                  control={control}
                  disabled={disabledFields.includes('time')}
                />
              )}
            </S.FlexWrapper>
          </FormField>
        )}

        {!hiddenFields.includes('description') && (
          <FormField direction={fieldsDirection} label="Description">
            <PrimaryTextarea
              control={control}
              name="description"
              disabled={disabledFields.includes('description')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('participants') && (
          <FormField direction={fieldsDirection} label="Participants">
            <Autocomplete.Cascader
              options={participantsOptions}
              control={control}
              name="participants"
              disabled={disabledFields.includes('participants')}
              AdditionalElement={AvatarBadge}
              CustomPopupIcon={IconUsersSvg}
              popupIconColor={theme.appColors.primary_01}
              disablePopupIconRotation
              optionCheckbox
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
