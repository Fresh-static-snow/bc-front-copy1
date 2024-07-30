import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { FormField, PrimaryFormFooter, SecondaryFormFooter } from '@/shared/ui/forms';
import { PrimaryInput } from '@/shared/ui/inputs';

import { changePasswordSchema } from './ChangePasswordForm.schema';
import * as S from './ChangePasswordForm.styles';
import { ChangePasswordFormProps, ChangePasswordFormSchema } from './ChangePasswordForm.types';

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  FooterCustomComponent,
  contentPaddings,
  fieldsDirection = 'row',
  footerType,
  submitButtonLabel,
  isLoading,
  isDirty,
  onSendData,
  onCloseModal = () => {},
  onClickReset = () => {},
}) => {
  const {
    control,
    formState: { isDirty: isFormDirty },
    handleSubmit,
    reset,
  } = useForm<ChangePasswordFormSchema>({
    resolver: yupResolver(changePasswordSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<ChangePasswordFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);
      reset();
    },
    [onSendData, reset],
  );

  const onReset = useCallback(() => {
    reset();
    onClickReset();
  }, [onClickReset, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Content $padding={contentPaddings} $fieldsDirection={fieldsDirection}>
        <FormField direction={fieldsDirection} label="Old password">
          <PrimaryInput type="password" name="oldPassword" control={control} />
        </FormField>

        <FormField direction={fieldsDirection} label="New password">
          <PrimaryInput type="password" name="newPassword" control={control} />
        </FormField>

        <FormField direction={fieldsDirection} label="Repeat new password">
          <PrimaryInput type="password" name="newPasswordRepeated" control={control} />
        </FormField>
      </S.Content>

      {footerType === 'primary' && (
        <PrimaryFormFooter
          control={control}
          submitChecked
          submitButtonLabel={submitButtonLabel}
          isLoading={isLoading}
          onClose={onCloseModal}
        />
      )}

      {footerType === 'secondary' && (
        <SecondaryFormFooter
          isDirty={isDirty || isFormDirty}
          CustomComponent={FooterCustomComponent}
          submitButtonLabel={submitButtonLabel}
          isLoading={isLoading}
          onReset={onReset}
        />
      )}
    </form>
  );
};
