import { LoginForm, LoginFormSchema, useLogin } from '@/entities/auth';
import { appendFormData } from '@/shared/lib';

import * as S from './SignIn.styles';

export const SignIn: React.FC = () => {
  const { mutateAsync: onLogin, isLoading } = useLogin();

  const onSendData = async (data: LoginFormSchema) => {
    const formData = new FormData();

    appendFormData(formData, [
      { key: 'user[email]', value: data.email },
      { key: 'user[password]', value: data.password },
      { key: 'user[remember_me]', value: String(data.rememberMe) },
    ]);

    await onLogin({ formData });
  };

  return (
    <S.Root>
      <LoginForm
        additionalLinkText="Forgot your password?"
        additionalLinkPath="/password/email-checking"
        fieldsDirection="column"
        isLoading={isLoading}
        hiddenFields={['rememberMe']}
        onSendData={onSendData}
      />
    </S.Root>
  );
};
