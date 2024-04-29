import { NavigationButton } from '../NavigationButton/NavigationButton';
import * as S from './NavigationMenuSimpleButton.styles';
import { NavigationMenuSimpleButtonProps } from './NavigationMenuSimpleButton.types';

export const NavigationMenuSimpleButton: React.FC<NavigationMenuSimpleButtonProps> = ({
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
