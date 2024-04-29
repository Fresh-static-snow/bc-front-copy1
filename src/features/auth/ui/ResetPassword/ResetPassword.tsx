import { PasswordForm, PasswordFormSchema, useChangePassword } from '@/entities/auth';
import { appendFormData, useCustomSearchParams } from '@/shared/lib';

import * as S from './ResetPassword.styles';

export const ResetPassword: React.FC = () => {
  const { params } = useCustomSearchParams(['reset_password_token']);
  const { mutateAsync: onChangePassword, isLoading } = useChangePassword();

  const onSendData = async (data: PasswordFormSchema) => {
    const formData = new FormData();

    appendFormData(formData, [
      { key: 'user[reset_password_token]', value: params.reset_password_token },
      { key: 'user[password]', value: data.password },
      { key: 'user[password_confirmation]', value: data.passwordConfirm },
      { key: 'user[remember_me]', value: 'true' },
    ]);

    await onChangePassword({ formData });
  };

  return (
    <S.Root>
      <PasswordForm fieldsDirection="column" isLoading={isLoading} onSendData={onSendData} />
    </S.Root>
  );
};
