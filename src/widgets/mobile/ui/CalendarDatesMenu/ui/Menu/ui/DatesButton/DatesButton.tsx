import { useTheme } from '@emotion/react';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useEffect, useMemo } from 'react';

import { useCustomSearchParams } from '@/shared/lib';
import { PrimaryButton } from '@/shared/ui/inputs';

import { dateControlTemplates } from '../../../../lib';
import { DateControlSignature } from '../../../../types';
import { Drawer } from '../Drawer/Drawer';
import { DatesButtonProps } from './DatesButton.types';

export const DatesButton: React.FC<DatesButtonProps> = ({
  calendarFormat,
  isOpen,
  setSideWindowsState,
}) => {
  const theme = useTheme();

  const { params, setParam } = useCustomSearchParams(['start_at']);

  const onClickDateButton = () => {
    setSideWindowsState((current) => ({
      dateDrawer: !current.dateDrawer,
      filterModal: false,
      formatDrawer: false,
    }));
  };
  const onCloseDateDrawer = () => {
    setSideWindowsState((current) => ({
      ...current,
      dateDrawer: false,
    }));
  };

  // * The onChangeDate function is responsible for the date control.
  const onChangeDate = useCallback(
    (date: Dayjs) => {
      setParam('start_at', dayjs(date).format('YYYY-MM-DD'));
    },
    [setParam],
  );

  // * The onChangeDateRange function is responsible for the date range control.
  const onChangeDateRange = useCallback(
    (date: [Dayjs, Dayjs]) => {
      setParam('start_at', dayjs(date[0]).format('YYYY-MM-DD'));
    },
    [setParam],
  );

  // * The activeDateSignature variable is responsible for the current date format and for the date control.
  const activeDateSignature = useMemo<DateControlSignature>((): DateControlSignature => {
    switch (calendarFormat) {
      case 'day':
        return dateControlTemplates.day(dayjs(params.start_at), onChangeDate);

      case 'week':
        return dateControlTemplates.week(
          [dayjs(params.start_at).startOf('week'), dayjs(params.start_at).endOf('week')],
          onChangeDateRange,
        );

      case 'month':
        return dateControlTemplates.month(dayjs(params.start_at).startOf('month'), onChangeDate);

      case 'quarter':
        return dateControlTemplates.quarter(
          [dayjs(params.start_at).startOf('quarter'), dayjs(params.start_at).endOf('quarter')],
          onChangeDateRange,
        );

      case 'year':
        return dateControlTemplates.year(dayjs(params.start_at).startOf('year'), onChangeDate);

      default:
        return dateControlTemplates.empty();
    }
  }, [calendarFormat, params.start_at, onChangeDate, onChangeDateRange]);

  useEffect(() => {
    // * If the start_at parameter is not specified, then set the current date.
    if (calendarFormat && (!params.start_at || !dayjs(params.start_at).isValid())) {
      setParam('start_at', dayjs().startOf(calendarFormat).format('YYYY-MM-DD'), true);
      return;
    }

    // * If the start_at parameter is specified, then set the start of the date type.
    if (
      calendarFormat &&
      dayjs(params.start_at).startOf(calendarFormat).format('YYYY-MM-DD') !== params.start_at
    ) {
      setParam(
        'start_at',
        dayjs(params.start_at).startOf(calendarFormat).format('YYYY-MM-DD'),
        true,
      );
    }
  }, [calendarFormat, params.start_at, setParam]);

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onCloseDateDrawer}>
        {activeDateSignature.DatePicker}
      </Drawer>

      <PrimaryButton
        label={activeDateSignature.dateLabel}
        fontSize="13px"
        padding="0"
        variant="custom"
        customStyles={{
          fontWeight: '600',
          color: isOpen ? theme.appColors.primary_01 : theme.appColors.primary_05,
        }}
        onClick={onClickDateButton}
        data-testid="DatesButton"
      />
    </>
  );
};
