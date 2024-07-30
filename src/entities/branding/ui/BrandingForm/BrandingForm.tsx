import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormField, PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import { PrimaryDropzone, PrimaryInput } from '@/shared/ui/inputs';

import { brandingDefaultValues } from './BrandingForm.const';
import { brandingFormSchema } from './BrandingForm.schema';
import * as S from './BrandingForm.styles';
import { BrandingFormProps, BrandingFormSchema } from './BrandingForm.types';

export const BrandingForm: React.FC<BrandingFormProps> = ({
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
  } = useForm<BrandingFormSchema>({
    resolver: yupResolver(brandingFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...brandingDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();

  const onSubmit: SubmitHandler<BrandingFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(brandingDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...brandingDefaultValues,
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
              name="name"
              control={control}
              disabled={disabledFields.includes('name')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('logo') && (
          <FormField direction={fieldsDirection} label="Logo" required>
            <PrimaryDropzone
              control={control}
              name="logo"
              types={['jpg', 'png', 'svg']}
              disabled={disabledFields.includes('logo')}
            />
          </FormField>
        )}

        {!hiddenFields.includes('favicon') && (
          <FormField direction={fieldsDirection} label="Favicon">
            <PrimaryDropzone
              control={control}
              name="favicon"
              types={['jpg', 'png', 'svg']}
              disabled={disabledFields.includes('favicon')}
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
