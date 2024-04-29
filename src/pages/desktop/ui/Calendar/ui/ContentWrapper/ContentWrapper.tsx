import { Scrollbar } from '@/shared/ui/layouts';

import * as S from './ContentWrapper.styles';
import { ContentWrapperProps } from './ContentWrapper.types';

export const ContentWrapper: React.FC<ContentWrapperProps> = ({ children }) => (
  <S.Root>
    <Scrollbar>{children}</Scrollbar>
  </S.Root>
);
