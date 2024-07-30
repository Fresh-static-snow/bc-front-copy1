import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetAuthenticatedUser, UserForm, UserFormSchema, useUpdateUser } from '@/entities/user';
import { appendFormData } from '@/shared/lib';
import { CircularLoader } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

export const UpdateAuthedUser: React.FC = () => {
  const navigate = useNavigate();

  const {
    data: userData,
    isFetching: isFetchingUserData,
    isSuccess: isSuccessUserData,
  } = useGetAuthenticatedUser();

  const defaultFormData = useMemo<UserFormSchema>(() => {
    if (!userData) {
      return {};
    }

    return {
      username: userData?.nick ?? '',
      firstName: userData?.first_name ?? '',
      lastName: userData?.last_name ?? '',
      email: userData?.email ?? '',
      company: userData?.company
        ? { value: String(userData?.company?.id), label: userData?.company?.title }
        : undefined,
      disciplines: userData?.user_disciplines?.map(({ id, title }) => ({
        value: String(id),
        label: title,
      })),
      googleCalendar: userData?.google_calendar?.status ?? false,
    };
  }, [userData]);

  const { mutateAsync: updateUser, isLoading } = useUpdateUser();

  const onClickChangePassword = useCallback(() => {
    navigate('password', { state: { prevPath: '/account' } });
  }, [navigate]);

  const onClickConnectTelegramBot = useCallback(() => {
    window.open(import.meta.env.VITE_TELEGRAM_BOT_URL, '_blank');
  }, []);

  const onClickRefreshGoogleCalendar = useCallback(() => {
    window.open(userData?.google_calendar?.link ?? '');
  }, [userData?.google_calendar?.link]);

  const onSendData = useCallback(
    async (data: UserFormSchema) => {
      const formData = new FormData();

      appendFormData(formData, [
        { key: 'nick', value: data.username, options: { canBeEmpty: true } },
        { key: 'first_name', value: data.firstName, options: { canBeEmpty: true } },
        { key: 'last_name', value: data.lastName, options: { canBeEmpty: true } },
        { key: 'google_calendar_status', value: String(data.googleCalendar) },
        { key: 'google_calendar_required', value: String(data.googleCalendar) },
      ]);

      await updateUser({ id: userData?.id, formData });
    },
    [updateUser, userData?.id],
  );

  return (
    <>
      {!isFetchingUserData && isSuccessUserData ? (
        <UserForm
          FooterCustomComponent={
            <div style={{ display: 'flex', gap: '8px' }}>
              <PrimaryButton
                label="Change password"
                variant="outlined"
                onClick={onClickChangePassword}
              />
              <PrimaryButton
                label="Connect Telegram Bot"
                variant="outlined"
                onClick={onClickConnectTelegramBot}
              />
            </div>
          }
          fieldsDirection="column"
          footerType="secondary"
          defaultFormData={defaultFormData}
          disabledFields={['disciplines', 'company', 'email']}
          hiddenFields={['role']}
          submitButtonLabel="Update"
          isLoading={isLoading}
          withGoogleCalendarRefresh={userData?.google_calendar?.status}
          onSendData={onSendData}
          onRefreshGoogleCalendar={onClickRefreshGoogleCalendar}
        />
      ) : (
        <CircularLoader size="24px" width="100%" padding="8px" />
      )}
    </>
  );
};
