import { useTheme } from '@emotion/react';
import { useCallback, useEffect } from 'react';

import { IconUserCheckSvg } from '@/shared/assets';
import { useCustomSearchParams } from '@/shared/lib';
import { PrimaryButton } from '@/shared/ui/inputs';

import { filterParamsWithUser } from '../../../../const';

export const CurrentUserButton: React.FC = () => {
  const theme = useTheme();

  const { arrayParams, setArrayParams } = useCustomSearchParams(filterParamsWithUser);

  // * Callback that set current user filter option or remove it.
  const onClickCurrentUserButton = useCallback(() => {
    if (arrayParams?.current_user?.[0] === 'true') {
      setArrayParams('current_user', ['false']);
    } else {
      setArrayParams('current_user', ['true']);
    }
  }, [arrayParams?.current_user, setArrayParams]);

  useEffect(() => {
    if (arrayParams?.current_user) {
      return;
    }

    setArrayParams('current_user', ['true'], true);
  }, [arrayParams?.current_user, setArrayParams]);

  return (
    <PrimaryButton
      padding="4px"
      variant="custom"
      IconComponent={IconUserCheckSvg}
      customStyles={{
        iconColor: theme.appColors.primary_05,
        borderRadius: '50%',
        backgroundColor:
          arrayParams?.current_user?.[0] === 'true' ? theme.appColors.primary_01 : null,
      }}
      onClick={onClickCurrentUserButton}
      data-testid="CurrentUserButton"
    />
  );
};
