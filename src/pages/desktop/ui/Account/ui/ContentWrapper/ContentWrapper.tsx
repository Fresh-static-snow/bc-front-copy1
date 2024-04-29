import * as S from './ContentWrapper.styles';
import { ContentWrapperProps } from './ContentWrapper.types';

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <S.Root>{children}</S.Root>
);
