import { memo } from 'react';

import { CircularLoader } from '@/shared/ui/feedback/CircularLoader/CircularLoader';

import * as S from './PrimaryButton.styles';
import { PrimaryButtonProps } from './PrimaryButton.types';

/**
 * The primary application button. Has custom styles to match the main design.
 *
 * Optionally, it can take three values for content: `IconComponent`, `label` and `AdditionalComponent`.
 * Elements can be rendered independently of each other, which makes it possible to flexibly customize the button.
 */
export const PrimaryButton: React.FC<PrimaryButtonProps> = memo(
  ({
    variant = 'base',
    type = 'button',
    isLoading,
    label,
    fontSize,
    IconComponent,
    AdditionalComponent,
    iconWidth,
    iconHeight,
    $iconColor,
    padding,
    width,
    contentPosition = 'left',
    customStyles,
    disabled = false,
    onClick,
    ...rest
  }) => (
    <S.Root
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      $variant={variant}
      $customStyles={customStyles}
      $padding={padding}
      $width={width}
      $contentPosition={contentPosition}
      data-testid={rest['data-testid']}
    >
      {isLoading && (
        <S.Loading>
          <CircularLoader />
        </S.Loading>
      )}

      {IconComponent && (
        <S.Icon $width={iconWidth} $height={iconHeight} color={$iconColor}>
          <IconComponent />
        </S.Icon>
      )}

      {label && <S.Label $fontSize={fontSize}>{label}</S.Label>}

      {AdditionalComponent && <S.Additional>{AdditionalComponent}</S.Additional>}
    </S.Root>
  ),
);
