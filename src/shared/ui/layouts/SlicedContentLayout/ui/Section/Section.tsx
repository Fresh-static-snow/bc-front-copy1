import { Scrollbar } from '@/shared/ui/layouts';

import * as S from './Section.styles';
import { SectionProps } from './Section.types';

/**
 * The component that is used for constructing pages with a fixed sections. It is used in the `PageLayout`.
 */
export const Section: React.FC<SectionProps> = ({
  children,
  width,
  fragments = 1,
  scrollActive = true,
  borderLeft,
  borderLeftType,
  borderRight,
  borderRightType,
  backgroundColor,
  disableTracksWidthCompensation,
}) => (
  <S.Root
    $width={width}
    $fragments={fragments}
    $borderLeft={borderLeft}
    $borderLeftType={borderLeftType}
    $borderRight={borderRight}
    $borderRightType={borderRightType}
    $backgroundColor={backgroundColor}
  >
    <Scrollbar
      active={scrollActive}
      noScrollX
      disableTracksWidthCompensation={disableTracksWidthCompensation}
    >
      {children}
    </Scrollbar>
  </S.Root>
);
