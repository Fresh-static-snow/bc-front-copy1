import { Scrollbar } from '@/shared/ui/layouts';

import * as S from './Body.styles';
import { BodyProps } from './Body.types';

export const Body: React.FC<BodyProps> = ({ children, scrollActive = false, padding }) => (
  <Scrollbar active={scrollActive} noScrollX>
    <S.Root $padding={padding}>{children}</S.Root>
  </Scrollbar>
);
