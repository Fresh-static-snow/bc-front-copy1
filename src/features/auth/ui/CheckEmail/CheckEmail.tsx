import { EmailCheckingForm, EmailCheckingFormSchema, useEmailChecking } from '@/entities/auth';
import { appendFormData } from '@/shared/lib';

import * as S from './CheckEmail.styles';

export const CheckEmail: React.FC = () => {
  const { mutateAsync: onEmailChecking, isLoading, isSuccess } = useEmailChecking();

  const onSendData = async (data: EmailCheckingFormSchema) => {
    const formData = new FormData();

    appendFormData(formData, [{ key: 'user[email]', value: data.email }]);

    await onEmailChecking({ formData });
  };

  if (isSuccess) {
    return (
      <S.Root>
        <S.SuccessText>Check your email for further instructions.</S.SuccessText>
      </S.Root>
    );
  }

  return (
    <S.Root>
      <EmailCheckingForm
        additionalLinkText="Go back to login"
        additionalLinkPath="/login"
        fieldsDirection="column"
        isLoading={isLoading}
        onSendData={onSendData}
      />
    </S.Root>
  );
};
