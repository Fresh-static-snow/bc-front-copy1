import { memo } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import * as S from './CorporateInfo.styles';
import { CorporateInfoProps } from './CorporateInfo.types';

export const CorporateInfo: React.FC<CorporateInfoProps> = memo(
  ({ location, color, isVisible = true }) => (
    <BackgroundColor baseColor={color} stripes={!isVisible}>
      <S.ContentWrapper>
        <S.LocationTitle>
          <TextColor text="Location" secondaryColor={color} />
        </S.LocationTitle>

        <TextColor text={location} secondaryColor={color} />
      </S.ContentWrapper>
    </BackgroundColor>
  ),
);
