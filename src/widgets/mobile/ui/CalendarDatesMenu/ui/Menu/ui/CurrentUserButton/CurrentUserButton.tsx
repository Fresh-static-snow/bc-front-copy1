import { useTheme } from '@emotion/react';
import { useCallback } from 'react';

import { useGetAccountSettings, useUpdateAccountSettings } from '@/entities/account-setting';
import { IconUserCheckSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs';

export const CurrentUserButton: React.FC = () => {
  const theme = useTheme();

  const { data: accountSettings, isFetching: isFetchingGetAccountSettings } =
    useGetAccountSettings();
  const { mutate: onUpdateAccountSettings, isLoading: isLoadingUpdateAccountSettings } =
    useUpdateAccountSettings();

  const onClickCurrentUserButton = useCallback(() => {
    const formData = new FormData();

    formData.append(
      'current_user_filter_enabled',
      accountSettings?.current_user_filter_enabled ? 'false' : 'true',
    );

    onUpdateAccountSettings({ formData });
  }, [accountSettings?.current_user_filter_enabled, onUpdateAccountSettings]);

  return (
    <PrimaryButton
      padding="4px"
      variant="custom"
      IconComponent={IconUserCheckSvg}
      customStyles={{
        iconColor: theme.appColors.primary_05,
        borderRadius: '50%',
        backgroundColor: accountSettings?.current_user_filter_enabled
          ? theme.appColors.primary_01
          : null,
        backgroundColorDisabled: theme.appColors.secondary_02,
      }}
      onClick={onClickCurrentUserButton}
      isLoading={isFetchingGetAccountSettings || isLoadingUpdateAccountSettings}
      data-testid="CurrentUserButton"
    />
  );
};
