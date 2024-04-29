import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useMemo } from 'react';

import { IconArrowLeftSvg } from '@/shared/assets';
import { useCustomSearchParams } from '@/shared/lib';
import { PrimaryButton } from '@/shared/ui/inputs';
import { Rotate } from '@/shared/ui/layouts';

import { dateControlTemplates } from '../../../../lib';
import { DateControlSignature } from '../../../../types';
import { DatesDropDown } from '../DatesDropDown/DatesDropDown';
import * as S from './DatesNav.styles';
import { DatesNavProps } from './DatesNav.types';

export const DatesNav: React.FC<DatesNavProps> = ({ calendarFormat }) => {
  const { params, setParam } = useCustomSearchParams(['start_at']);

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

  return (
    <S.Root>
      <PrimaryButton label="Today" variant="outlined" onClick={activeDateSignature.onClickToday} />

      <S.ArrowsWrapper>
        <PrimaryButton
          variant="secondary"
          padding="4px"
          iconHeight="24px"
          iconWidth="24px"
          IconComponent={IconArrowLeftSvg}
          onClick={activeDateSignature.onClickBack}
        />

        <Rotate rotateDeg={180}>
          <PrimaryButton
            variant="secondary"
            padding="4px"
            iconHeight="24px"
            iconWidth="24px"
            IconComponent={IconArrowLeftSvg}
            onClick={activeDateSignature.onClickForward}
          />
        </Rotate>
      </S.ArrowsWrapper>

      <DatesDropDown
        label={activeDateSignature.dateLabel}
        ContentComponent={activeDateSignature.DatePicker}
      />
    </S.Root>
  );
};
