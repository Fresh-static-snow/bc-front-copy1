import dayjs, { Dayjs } from 'dayjs';
import { memo } from 'react';
import { useController } from 'react-hook-form';

import { IconCalendarSvg } from '@/shared/assets';
import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';
import { DatePicker } from '@/shared/ui/inputs/DatePicker';
import { DropDownInput } from '@/shared/ui/layouts/DropDownInput/DropDownInput';

import * as S from './DatePickerInput.styles';
import { DatePickerInputProps } from './DatePickerInput.types';

/**
 * The component that is used for displaying the date picker input. By type prop you can choose between day and range.
 *
 * Component is intended to work only in conjunction with the React Hook Form.
 */
export const DatePickerInput: React.FC<DatePickerInputProps> = memo(
  ({ width, type, name, control, disabled }) => {
    const { field, fieldState } = useController({ name, control, defaultValue: null });

    const onChangeActiveDate = (newDay: Dayjs) => {
      const newValue = newDay?.format();
      field.onChange(newValue);
    };

    const onChangeActiveDateRange = ([start, end]: [Dayjs, Dayjs]) => {
      const newValues = [start?.format(), end?.format()];
      field.onChange(newValues);
    };

    return (
      <S.Root data-testid="DatePickerInput">
        {type === 'day' && (
          <DropDownInput
            width={width}
            InputIcon={<IconCalendarSvg />}
            InputComponent={
              <S.InputComponent $disabled={disabled} data-testid="DatePickerInput-input">
                {field.value && dayjs(field.value as string)?.format('DD.MM.YYYY')}
              </S.InputComponent>
            }
            ContentComponent={
              <DatePicker.Day
                activeDate={field.value ? dayjs(field.value as string) : dayjs()}
                onChangeActiveDate={onChangeActiveDate}
                data-testid={`DatePickerInput-picker-${name}`}
              />
            }
            error={!!fieldState?.error?.message}
            disabled={disabled}
          />
        )}

        {type === 'range' && (
          <DropDownInput
            width={width}
            InputIcon={<IconCalendarSvg />}
            InputComponent={
              <S.InputComponent $disabled={disabled} data-testid="DatePickerInput-input">
                {field.value?.[0] &&
                  dayjs((field.value as [string, string])[0]).format('DD.MM.YYYY')}
                {field.value?.[1] &&
                  ` — ${dayjs((field.value as [string, string])[1]).format('DD.MM.YYYY')}`}
              </S.InputComponent>
            }
            ContentComponent={
              <DatePicker.DayRange
                activeDate={
                  field.value?.[0]
                    ? [
                        dayjs(field.value[0] as string),
                        field.value?.[1] ? dayjs(field.value[1] as string) : undefined,
                      ]
                    : [dayjs(), undefined]
                }
                onChangeActiveDate={onChangeActiveDateRange}
                data-testid={`DatePickerInput-picker-${name}`}
              />
            }
            error={!!fieldState?.error?.message}
            disabled={disabled}
          />
        )}

        <FieldErrorMessage errorMessage={fieldState?.error?.message} />
      </S.Root>
    );
  },
);
