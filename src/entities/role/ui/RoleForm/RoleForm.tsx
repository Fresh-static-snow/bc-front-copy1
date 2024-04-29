import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import { PrimaryInput, PrimaryTextarea } from '@/shared/ui/inputs';
import { FormField } from '@/shared/ui/layouts';

import { roleDefaultValues } from './RoleForm.const';
import { roleSchema } from './RoleForm.schema';
import * as S from './RoleForm.styles';
import { RoleFormProps, RoleFormSchema } from './RoleForm.types';
import { FormPermissionList } from './ui/FormPermissionList/FormPermissionList';

export const RoleForm: React.FC<RoleFormProps> = ({
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
  } = useForm<RoleFormSchema>({
    resolver: yupResolver(roleSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: { ...roleDefaultValues, ...defaultFormData },
  });
  const formDataValues = watch();

  const onSubmit: SubmitHandler<RoleFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);

      // * If the user wants to add another entity, we don't close the form and reset it.
      if (!data.anotherOne) {
        reset(roleDefaultValues);
        onCloseModal();
      } else {
        reset({
          ...roleDefaultValues,
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
          {!hiddenFields.includes('name') && (
            <FormField direction={fieldsDirection} label="Name" required>
              <PrimaryInput
                name="name"
                control={control}
                disabled={disabledFields.includes('name')}
              />
            </FormField>
          )}

          {!hiddenFields.includes('description') && (
            <FormField direction={fieldsDirection} label="Description">
              <PrimaryTextarea
                name="description"
                control={control}
                disabled={disabledFields.includes('description')}
              />
            </FormField>
          )}
        </S.StaticFields>

        {!hiddenFields.includes('permissions') && (
          <FormPermissionList
            name="permissions"
            control={control}
            disabled={disabledFields.includes('permissions')}
          />
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
