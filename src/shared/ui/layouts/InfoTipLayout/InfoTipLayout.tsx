import * as S from './InfoTipLayout.styles';
import { InfoTipLayoutProps } from './InfoTipLayout.types';

export const InfoTipLayout: React.FC<InfoTipLayoutProps> = ({
  InfoTipContent,
  children,
  color,
  isVisible = true,
  disabled = false,
}) => (
  <S.Root
    title={
      <S.ContentContainer>
        <S.StatusIndicator $stripes={!isVisible} $baseColor={color} />
        <S.Content>{InfoTipContent}</S.Content>
      </S.ContentContainer>
    }
    disableFocusListener={disabled}
    disableHoverListener={disabled}
    disableTouchListener={disabled}
    followCursor
    placement="bottom-start"
  >
    {children}
  </S.Root>
);
