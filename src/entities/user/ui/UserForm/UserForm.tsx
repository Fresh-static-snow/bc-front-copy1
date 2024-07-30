import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useController, useForm } from 'react-hook-form';

import { FormField, PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import { Autocomplete, Checkbox, PrimaryButton, PrimaryInput } from '@/shared/ui/inputs';

import { userFormDefaultValues } from './UserForm.const';
import { userSchema } from './UserForm.schema';
import * as S from './UserForm.styles';
import { UserFormProps, UserFormSchema } from './UserForm.types';

export const UserForm: React.FC<UserFormProps> = ({
  userDisciplineOptions,
  companyOptions,
  roleOptions,
  withGoogleCalendarRefresh,

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
  onRefreshGoogleCalendar = () => {},
}) => {
  const {
    control,
    formState: { isDirty: isFormDirty },
    handleSubmit,
    reset,
    watch,
  } = useForm<UserFormSchema>({
    resolver: yupResolver(userSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...userFormDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();

  const { field: googleCheckboxField } = useController({
    name: 'googleCalendar',
    control,
    defaultValue: false,
  });

  const onSubmit: SubmitHandler<UserFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(userFormDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...userFormDefaultValues,
          company: data.company,
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
        {!hiddenFields.includes('username') && (
          <FormField direction={fieldsDirection} label="Username">
            <PrimaryInput
              name="username"
              control={control}
              disabled={disabledFields.includes('username')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('firstName') && (
          <FormField direction={fieldsDirection} label="Name">
            <PrimaryInput
              name="firstName"
              control={control}
              disabled={disabledFields.includes('firstName')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('lastName') && (
          <FormField direction={fieldsDirection} label="Surname">
            <PrimaryInput
              name="lastName"
              control={control}
              disabled={disabledFields.includes('lastName')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('disciplines') && (
          <FormField direction={fieldsDirection} label="Disciplines">
            <Autocomplete.Multiple
              name="disciplines"
              control={control}
              options={userDisciplineOptions}
              disabled={disabledFields.includes('disciplines')}
              optionCheckbox
            />
          </FormField>
        )}

        {!hiddenFields.includes('company') && (
          <FormField direction={fieldsDirection} label="Company">
            <Autocomplete.Single
              name="company"
              control={control}
              options={companyOptions}
              disabled={disabledFields.includes('company')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('email') && (
          <FormField direction={fieldsDirection} label="Email" required>
            <PrimaryInput
              name="email"
              control={control}
              disabled={disabledFields.includes('email')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('role') && (
          <FormField direction={fieldsDirection} label="Role" required>
            <Autocomplete.Single
              name="role"
              control={control}
              options={roleOptions}
              disabled={disabledFields.includes('role')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('googleCalendar') && (
          <FormField direction={fieldsDirection} label="">
            <S.GoogleCalendarCheckboxWrapper>
              <Checkbox
                checked={googleCheckboxField.value}
                onChange={googleCheckboxField.onChange}
                label="Attach Google Calendar"
                disabled={disabledFields.includes('googleCalendar') || withGoogleCalendarRefresh}
              />

              {withGoogleCalendarRefresh && (
                <PrimaryButton
                  label="Refresh"
                  variant="secondary"
                  onClick={onRefreshGoogleCalendar}
                />
              )}
            </S.GoogleCalendarCheckboxWrapper>
          </FormField>
        )}
      </S.Content>

      {footerType === 'primary' && (
        <PrimaryFormFooter
          disabledFields={disabledFields}
          hiddenFields={hiddenFields}
          withDelete={withDelete}
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
