import * as S from './ItemWrapper.styles';
import { ItemWrapperProps } from './ItemWrapper.types';

export const ItemWrapper: React.FC<ItemWrapperProps> = ({ children }) => (
  <S.Root>{children}</S.Root>
);
