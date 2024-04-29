import * as S from './EmptyContent.styles';
import { EmptyContentProps } from './EmptyContent.types';

export const EmptyContent: React.FC<EmptyContentProps> = ({ children }) => (
  <S.Root>{children}</S.Root>
);
