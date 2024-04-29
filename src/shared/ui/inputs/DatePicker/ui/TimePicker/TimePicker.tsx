import { memo, useCallback, useMemo, useState } from 'react';

import { IconCheckSvg } from '@/shared/assets';
import { createTimeRanges } from '@/shared/ui/inputs/DatePicker/lib';
import { Scrollbar } from '@/shared/ui/layouts/Scrollbar/Scrollbar';

import * as S from './TimePicker.styles';
import { TimePickerProps } from './TimePicker.types';

export const TimePicker: React.FC<TimePickerProps> = memo(({ activeRange, onChangeActiveTime }) => {
  const [isRangeType, setRangeType] = useState(!!activeRange?.[1] || false);

  // * Generate time ranges.
  const timeRange = useMemo(() => createTimeRanges('00:00', '23:45'), []);

  const onChangeRangeType = useCallback(() => {
    // * If the range is not selected, then we need to select the first time.
    if (isRangeType) {
      onChangeActiveTime([activeRange[0], undefined]);
    }

    setRangeType((currentValue) => !currentValue);
  }, [activeRange, isRangeType, onChangeActiveTime]);

  const onChangeActiveRange = useCallback(
    (timePoint: string, columnIndex: number) => () => {
      const currentValue: [string, string] = activeRange
        ? [...activeRange]
        : [undefined, undefined];

      currentValue[columnIndex] = timePoint;

      onChangeActiveTime(currentValue);
    },
    [activeRange, onChangeActiveTime],
  );

  return (
    <S.Root>
      <S.Header>
        <S.TimePickerButton type="button" onClick={onChangeRangeType}>
          <S.Icon>{isRangeType && <IconCheckSvg />}</S.Icon>
          Set range —
        </S.TimePickerButton>
      </S.Header>

      <S.TimeListWrapper>
        <Scrollbar>
          <S.TimeList>
            <S.TimeListLeft>
              {timeRange?.map((timePoint) => (
                <S.TimePickerButton
                  key={timePoint}
                  type="button"
                  onClick={onChangeActiveRange(timePoint, 0)}
                >
                  <S.Icon>{activeRange?.[0] === timePoint && <IconCheckSvg />}</S.Icon>
                  {timePoint}
                </S.TimePickerButton>
              ))}
            </S.TimeListLeft>

            <S.TimeListRight>
              {timeRange?.map((timePoint) => (
                <S.TimePickerButton
                  key={timePoint}
                  type="button"
                  onClick={onChangeActiveRange(timePoint, 1)}
                  disabled={!isRangeType}
                >
                  <S.Icon>{activeRange?.[1] === timePoint && <IconCheckSvg />}</S.Icon>
                  {timePoint}
                </S.TimePickerButton>
              ))}
            </S.TimeListRight>
          </S.TimeList>
        </Scrollbar>
      </S.TimeListWrapper>
    </S.Root>
  );
});
