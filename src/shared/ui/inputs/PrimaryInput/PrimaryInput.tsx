import { memo, useState } from 'react';
import { useController } from 'react-hook-form';

import { IconEyeOffSvg, IconEyeSvg } from '@/shared/assets';
import { FieldErrorMessage } from '@/shared/ui/feedback/FieldErrorMessage/FieldErrorMessage';

import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import * as S from './PrimaryInput.styles';
import { PrimaryInputProps } from './PrimaryInput.types';

export const PrimaryInput: React.FC<PrimaryInputProps> = memo(
  ({ type = 'text', IconComponent, control, name, placeholder, disabled = false }) => {
    const { field, fieldState } = useController({ name, control, defaultValue: '' });
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    return (
      <S.Root data-testid="PrimaryInput">
        <S.Input
          type={showPassword ? 'text' : type}
          value={field.value as string}
          onChange={field.onChange}
          onBlur={field.onBlur}
          placeholder={placeholder}
          disabled={disabled}
          $error={!!fieldState?.error?.message}
          $withIcon={type === 'password' || !!IconComponent}
          data-testid={`PrimaryInput-${name}`}
        />

        {type === 'password' && (
          <S.TogglePasswordButton onClick={togglePasswordVisibility}>
            <PrimaryButton
              IconComponent={showPassword ? IconEyeOffSvg : IconEyeSvg}
              variant="secondary"
              data-testid="PrimaryInput-toggle"
            />
          </S.TogglePasswordButton>
        )}

        {IconComponent && (
          <S.IconWrapper>
            <IconComponent />
          </S.IconWrapper>
        )}

        <FieldErrorMessage errorMessage={fieldState?.error?.message} />
      </S.Root>
    );
  },
);
