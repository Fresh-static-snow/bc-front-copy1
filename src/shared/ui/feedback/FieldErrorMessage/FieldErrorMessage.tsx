import { memo } from 'react';

import * as S from './FieldErrorMessage.styles';
import { FieldErrorMessageProps } from './FieldErrorMessage.types';

/**
 * The message that will be displayed to the user, if passed.
 * The component has `position: absolute` and is rendered under the parent component.
 */
export const FieldErrorMessage: React.FC<FieldErrorMessageProps> = memo(
  ({ errorMessage, position = 'absolute' }) => (
    <>{errorMessage && <S.Root $position={position}>{errorMessage}</S.Root>}</>
  ),
);
