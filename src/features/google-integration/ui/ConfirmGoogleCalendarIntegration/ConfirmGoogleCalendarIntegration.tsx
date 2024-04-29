import { useCallback, useMemo } from 'react';

import { useUpdateUser } from '@/entities/user';
import { useAuthStore } from '@/shared/model/auth/auth.store';
import { ConfirmationModal } from '@/shared/ui/feedback';

export const ConfirmGoogleCalendarIntegration: React.FC = () => {
  const authedUser = useAuthStore((state) => state.authedUser);

  const isGoogleCalendarRequired = useMemo(
    () => authedUser?.google_calendar?.required,
    [authedUser],
  );

  const { mutateAsync: updateUser, isLoading: isLoadingUpdateUser } = useUpdateUser(true);

  const onCloseGoogleCalendarModal = useCallback(() => {
    const formData = new FormData();

    formData.append('google_calendar_required', String(false));

    updateUser({ id: authedUser?.id, formData });
  }, [authedUser?.id, updateUser]);

  const onConfirmGoogleCalendarModal = useCallback(() => {
    const formData = new FormData();

    formData.append('google_calendar_required', String(false));

    updateUser({ id: authedUser?.id, formData });

    window.open(authedUser?.google_calendar?.link ?? '');
  }, [authedUser?.google_calendar?.link, authedUser?.id, updateUser]);

  return (
    <ConfirmationModal
      isOpen={isGoogleCalendarRequired}
      isLoading={isLoadingUpdateUser}
      message="Syncing your account with google calendar requires additional steps. Want to do it now?"
      onClose={onCloseGoogleCalendarModal}
      onConfirm={onConfirmGoogleCalendarModal}
    />
  );
};
