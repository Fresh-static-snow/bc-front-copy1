import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormField, PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import { PrimaryDropzone, PrimaryInput } from '@/shared/ui/inputs';

import { userCompanyDefaultValues } from './UserCompanyForm.const';
import { companySchema } from './UserCompanyForm.schema';
import * as S from './UserCompanyForm.styles';
import { UserCompanyFormProps, UserCompanyFormSchema } from './UserCompanyForm.types';

export const UserCompanyForm: React.FC<UserCompanyFormProps> = ({
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
  const {
    control,
    formState: { isDirty: isFormDirty },
    handleSubmit,
    reset,
    watch,
  } = useForm<UserCompanyFormSchema>({
    resolver: yupResolver(companySchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...userCompanyDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();

  const onSubmit: SubmitHandler<UserCompanyFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(userCompanyDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...userCompanyDefaultValues,
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
        {!hiddenFields.includes('companyName') && (
          <FormField direction={fieldsDirection} label="Name" required>
            <PrimaryInput
              name="companyName"
              control={control}
              disabled={disabledFields.includes('companyName')}
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
