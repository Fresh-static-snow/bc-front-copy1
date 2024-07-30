import { useTheme } from '@emotion/react';
import { useMemo } from 'react';

import { IconEyeSvg } from '@/shared/assets';
import { useCheckAccess, useNavigateWithParams } from '@/shared/lib';
import { SelectableValue } from '@/shared/types/values.types';
import { ButtonList, PrimaryButton } from '@/shared/ui/inputs';

import { filterParams, formatButtons } from '../../../../const';
import { Drawer } from '../Drawer/Drawer';
import { FormatButtonProps } from './FormatButton.types';

export const FormatButton: React.FC<FormatButtonProps> = ({
  calendarFormatValue,
  isOpen,
  setSideWindowsState,
}) => {
  const theme = useTheme();
  const navigate = useNavigateWithParams(filterParams);
  const checkAccess = useCheckAccess();

  const filteredFormatButtons = useMemo(() => {
    const scopesToCheck = formatButtons.map((item) => item.value);

    return scopesToCheck
      .filter((scope) => checkAccess([`get::/api/v1/calendar?scope=${scope}`]))
      .map((scope) => formatButtons.find((item) => item.value === scope));
  }, [checkAccess]);

  const onChangeCalendarFormat = (newFormat: SelectableValue) => {
    navigate(`/calendar/${newFormat.value}`);
    setSideWindowsState((current) => ({
      ...current,
      formatDrawer: false,
    }));
  };

  const onClickFormatButton = () => {
    setSideWindowsState((current) => ({
      dateDrawer: false,
      filterModal: false,
      formatDrawer: !current.formatDrawer,
    }));
  };
  const onCloseFormatDrawer = () => {
    setSideWindowsState((current) => ({
      ...current,
      formatDrawer: false,
    }));
  };

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onCloseFormatDrawer}>
        <ButtonList
          buttonList={filteredFormatButtons}
          activeButton={calendarFormatValue}
          onChangeActiveButton={onChangeCalendarFormat}
        />
      </Drawer>

      <PrimaryButton
        padding="2px"
        variant="custom"
        IconComponent={IconEyeSvg}
        customStyles={{
          iconColor: isOpen ? theme.appColors.primary_01 : theme.appColors.primary_05,
        }}
        onClick={onClickFormatButton}
        data-testid="FormatButton"
      />
    </>
  );
};
