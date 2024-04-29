import * as S from './BackgroundColor.styles';
import { BackgroundColorProps } from './BackgroundColor.types';

export const BackgroundColor: React.FC<BackgroundColorProps> = ({
  children,
  baseColor,
  colorIndicator = false,
  stripes = false,
  borderWrapper = false,
  borderRadius = true,
  customStyles,
}) => (
  <S.Root
    $baseColor={baseColor}
    $stripes={stripes}
    $colorIndicator={colorIndicator}
    $borderWrapper={borderWrapper}
    $borderRadius={borderRadius}
    style={customStyles}
  >
    {borderWrapper && <S.BorderWrapper />}
    {!borderWrapper && colorIndicator && <S.ColorIndicator $baseColor={baseColor} />}
    {children}
  </S.Root>
);
