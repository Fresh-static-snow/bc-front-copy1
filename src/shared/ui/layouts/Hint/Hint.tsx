import { HintProps } from '@/shared/ui/layouts/Hint/Hint.types';

import * as S from './Hint.styles';

export const Hint: React.FC<HintProps> = ({
  HintContent,
  children,
  disabled = false,
  placement = 'top',
  enterDelay = 0,
  leaveDelay = 0,
}) => (
  <S.Root
    title={<S.Content>{HintContent}</S.Content>}
    disableFocusListener={disabled}
    disableHoverListener={disabled}
    disableTouchListener={disabled}
    placement={placement}
    enterDelay={enterDelay}
    leaveDelay={leaveDelay}
  >
    {children}
  </S.Root>
);
