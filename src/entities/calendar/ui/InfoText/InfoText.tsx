import { Fragment } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { MarkedText, TextColor } from '@/shared/ui/typography';

import * as S from './InfoText.styles';
import { InfoTextProps } from './InfoText.types';

export const InfoText: React.FC<InfoTextProps> = ({
  text,
  textList,
  color,
  isVisible = true,
  marked = false,
  markedItems = [],
}) => {
  if (textList?.length > 0) {
    return (
      <BackgroundColor baseColor={color} stripes={!isVisible} borderWrapper={marked}>
        <S.Root>
          {textList.map((item) => (
            <Fragment key={item}>
              {markedItems.includes(item) ? (
                <MarkedText>{item}</MarkedText>
              ) : (
                <TextColor text={item} secondaryColor={color} />
              )}
            </Fragment>
          ))}
        </S.Root>
      </BackgroundColor>
    );
  }

  return (
    <BackgroundColor baseColor={color} stripes={!isVisible} borderWrapper={marked}>
      <S.Root>
        {marked ? (
          <MarkedText>{text}</MarkedText>
        ) : (
          <TextColor text={text} secondaryColor={color} />
        )}
      </S.Root>
    </BackgroundColor>
  );
};
