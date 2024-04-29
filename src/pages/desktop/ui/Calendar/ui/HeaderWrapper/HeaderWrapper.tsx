import * as S from './HeaderWrapper.styles';
import { HeaderWrapperProps } from './HeaderWrapper.types';

export const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ children }) => (
  <S.Root>{children}</S.Root>
);
