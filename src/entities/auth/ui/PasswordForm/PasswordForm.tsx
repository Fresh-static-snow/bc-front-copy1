import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { PrimaryButton, PrimaryInput } from '@/shared/ui/inputs';
import { FormField } from '@/shared/ui/layouts';

import { invitationSchema } from './PasswordForm.schema';
import * as S from './PasswordForm.styles';
import { PasswordFormProps, PasswordFormSchema } from './PasswordForm.types';

export const PasswordForm: React.FC<PasswordFormProps> = ({
  contentPaddings,
  fieldsDirection = 'row',
  isLoading,
  onSendData,
}) => {
  const { handleSubmit, reset, control } = useForm<PasswordFormSchema>({
    resolver: yupResolver(invitationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<PasswordFormSchema> = useCallback(
    async (data) => {
      await onSendData(data);
      reset();
    },
    [onSendData, reset],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.Content $padding={contentPaddings} $fieldsDirection={fieldsDirection}>
        <FormField direction={fieldsDirection} label="Password">
          <PrimaryInput name="password" control={control} type="password" />
        </FormField>

        <FormField direction={fieldsDirection} label="Password Confirmation">
          <PrimaryInput name="passwordConfirm" control={control} type="password" />
        </FormField>
      </S.Content>

      <S.Footer>
        <PrimaryButton
          type="submit"
          label="Send"
          variant="primary"
          padding="10px 20%"
          isLoading={isLoading}
        />
      </S.Footer>
    </form>
  );
};
