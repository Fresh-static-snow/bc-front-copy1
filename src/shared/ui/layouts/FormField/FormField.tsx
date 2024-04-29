import * as S from './FormField.styles';
import { FormFieldProps } from './FormField.types';

export const FormField: React.FC<FormFieldProps> = ({ children, label, direction, required }) => (
  <S.Root $direction={direction}>
    {direction === 'column' && !label ? null : (
      <S.Label $direction={direction}>
        {label}
        {required && <S.Required>*</S.Required>}
      </S.Label>
    )}

    <S.Field $direction={direction}>{children}</S.Field>
  </S.Root>
);
