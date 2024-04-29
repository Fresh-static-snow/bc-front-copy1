import {
  ChangePasswordForm,
  ChangePasswordFormSchema,
  useUpdateUserPassword,
} from '@/entities/user';
import { appendFormData } from '@/shared/lib';

export const UpdateAuthedUserPassword: React.FC = () => {
  const { mutateAsync: onChangeUserPassword, isLoading } = useUpdateUserPassword();

  const onSendData = async (data: ChangePasswordFormSchema) => {
    const formData = new FormData();

    appendFormData(formData, [
      { key: 'user[current_password]', value: data.oldPassword },
      { key: 'user[password]', value: data.newPassword },
      { key: 'user[password_confirmation]', value: data.newPasswordRepeated },
    ]);

    await onChangeUserPassword({ formData });
  };

  return (
    <ChangePasswordForm
      fieldsDirection="column"
      footerType="secondary"
      isLoading={isLoading}
      onSendData={onSendData}
    />
  );
};
