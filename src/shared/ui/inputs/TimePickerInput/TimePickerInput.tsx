import { memo } from 'react';
import { useController } from 'react-hook-form';

import { IconClockSvg } from '@/shared/assets';
import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';
import { DropDownInput } from '@/shared/ui/layouts/DropDownInput/DropDownInput';

import { DatePicker } from '../DatePicker';
import * as S from './TimePickerInput.styles';
import { TimePickerInputProps } from './TimePickerInput.types';

/**
 * The component is a time picker input.
 *
 * Component is intended to work only in conjunction with the React Hook Form.
 */
export const TimePickerInput: React.FC<TimePickerInputProps> = memo(
  ({ width, name, control, disabled }) => {
    const { field, fieldState } = useController({ name, control, defaultValue: null });

    const onChangeActiveTime = (newTime: [string, string]) => {
      field.onChange(newTime);
    };

    return (
      <S.Root data-testid="TimePickerInput">
        <DropDownInput
          width={width}
          InputIcon={<IconClockSvg />}
          InputComponent={
            <S.InputComponent $disabled={disabled} data-testid="TimePickerInput-input">
              {(field.value as [string, string])?.[0]}
              {(field.value as [string, string])?.[1] &&
                ` — ${(field.value as [string, string])?.[1]}`}
            </S.InputComponent>
          }
          ContentComponent={
            <DatePicker.Time
              activeRange={field.value as [string, string]}
              onChangeActiveTime={onChangeActiveTime}
              data-testid="TimePickerInput-picker"
            />
          }
          error={!!fieldState?.error?.message}
          disabled={disabled}
        />

        <FieldErrorMessage errorMessage={fieldState?.error?.message} />
      </S.Root>
    );
  },
);
