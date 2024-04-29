import { Scrollbar as CustomScrollbar } from 'react-scrollbars-custom';

import * as S from './Scrollbar.styles';
import { ScrollbarProps } from './Scrollbar.types';

/**
 * The component that wraps the content and adds a scrollbar to it.
 * For correct work, it is necessary to set the height of the parent element.
 */
export const Scrollbar: React.FC<ScrollbarProps> = ({
  children,
  active = true,
  noScrollX = true,
  noScrollY,
  disableTracksWidthCompensation = true,
}) => {
  if (!active) {
    return <>{children}</>;
  }

  return (
    <S.Scrollbar data-testid="Scrollbar">
      <CustomScrollbar
        noScrollX={noScrollX}
        noScrollY={noScrollY}
        disableTracksWidthCompensation={disableTracksWidthCompensation}
      >
        {children}
      </CustomScrollbar>
    </S.Scrollbar>
  );
};
