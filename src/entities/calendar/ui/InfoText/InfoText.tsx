import { Fragment } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { MarkedText, TextColor } from '@/shared/ui/typography';

import * as S from './InfoText.styles';
import { InfoTextProps } from './InfoText.types';

export const InfoText: React.FC<InfoTextProps> = ({ itemList, color, isVisible = true }) => (
  <BackgroundColor
    baseColor={color}
    stripes={!isVisible}
    borderWrapper={!!itemList.find((item) => item.marked)}
  >
    <S.Root>
      {itemList.map((item, index) => (
        <Fragment key={item.name ?? index}>
          {item.marked ? (
            <MarkedText>{item.name}</MarkedText>
          ) : (
            <TextColor text={item.name} secondaryColor={color} />
          )}
        </Fragment>
      ))}
    </S.Root>
  </BackgroundColor>
);
