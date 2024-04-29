import * as S from './Rotate.styles';
import { RotateProps } from './Rotate.types';

export const Rotate: React.FC<RotateProps> = ({ children, rotateDeg }) => (
  <S.Root $rotateDeg={rotateDeg} data-testid="Rotate">
    {children}
  </S.Root>
);
