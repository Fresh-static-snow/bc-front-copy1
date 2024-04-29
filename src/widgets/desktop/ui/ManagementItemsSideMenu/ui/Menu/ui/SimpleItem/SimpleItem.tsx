import { NavigationButton } from '@/shared/ui/navigation';

import * as S from './SimpleItem.styles';
import { SimpleItemProps } from './SimpleItem.types';

export const SimpleItem: React.FC<SimpleItemProps> = ({
  children,
  linkPath,
  activePathExact,
  variant = 'colored',
  padding = '15px 24px',
  fontSize,
  fontWeight,
  count,
}) => (
  <NavigationButton
    href={linkPath}
    activePathString={linkPath}
    activePathExact={activePathExact}
    variant={variant}
    padding={padding}
  >
    <S.Content $fontSize={fontSize} $fontWeight={fontWeight}>
      {children}

      <S.Count>{count ?? 0}</S.Count>
    </S.Content>
  </NavigationButton>
);
