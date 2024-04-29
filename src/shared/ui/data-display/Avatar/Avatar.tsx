import { memo, useEffect, useMemo, useState } from 'react';

import { IconCrownSvg } from '@/shared/assets';

import * as S from './Avatar.styles';
import { AvatarProps } from './Avatar.types';

export const Avatar: React.FC<AvatarProps> = memo(
  ({
    name,
    image,
    size,
    borderColor,
    additionalBorder,
    crownIcon,
    crownInnerStrokeColor = '#FFFFFF',
    crownOuterStrokeColor,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    withShadow = false,
    shadowColor,
  }) => {
    const [isSuccess, setSuccess] = useState(false);

    // * The initial letters of the first and last name or one of the values.
    const initials = useMemo(() => {
      const name_checked = typeof name === 'string' ? name : '';
      const firstName = name_checked?.split(' ')?.[0]; // * First letter of the first name.
      const lastName = name_checked?.split(' ')?.[1]; // * First letter of the last name.

      return `${firstName?.[0] ?? ''}${lastName?.[0] ?? ''}`.toUpperCase();
    }, [name]);

    useEffect(() => {
      const avatarImage = new Image();
      avatarImage.src = image;
      avatarImage.onload = () => {
        setSuccess(true);
      };
    }, [image]);

    return (
      <S.Root $size={size}>
        <S.Avatar
          src={image}
          $size={size}
          $borderColor={borderColor}
          $backgroundColor={isSuccess ? null : backgroundColor}
          $textColor={textColor}
          $fontSize={fontSize}
          $fontWeight={fontWeight}
          $withShadow={withShadow}
          $shadowColor={shadowColor}
          data-testid="Avatar"
        >
          {initials}
        </S.Avatar>

        {crownIcon && (
          <S.AdditionalIconWrapper
            $innerStroke={crownInnerStrokeColor}
            $outerStroke={crownOuterStrokeColor}
          >
            <IconCrownSvg />
          </S.AdditionalIconWrapper>
        )}
        {additionalBorder && <S.AdditionalBorder $border={additionalBorder} />}
      </S.Root>
    );
  },
);
