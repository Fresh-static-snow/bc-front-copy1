import { PasswordForm, PasswordFormSchema, useInvitation } from '@/entities/auth';
import { appendFormData, useCustomSearchParams } from '@/shared/lib';

import * as S from './AcceptInvitation.styles';

export const AcceptInvitation: React.FC = () => {
  const { params } = useCustomSearchParams(['invitation_token']);
  const { mutateAsync: onInvitation, isLoading } = useInvitation();

  const onSendData = async (data: PasswordFormSchema) => {
    const formData = new FormData();

    appendFormData(formData, [
      { key: 'user[invitation_token]', value: params.invitation_token },
      { key: 'user[password]', value: data.password },
      { key: 'user[password_confirmation]', value: data.passwordConfirm },
      { key: 'user[remember_me]', value: 'true' },
    ]);

    await onInvitation({ formData });
  };

  return (
    <S.Root>
      <PasswordForm fieldsDirection="column" isLoading={isLoading} onSendData={onSendData} />
    </S.Root>
  );
};
