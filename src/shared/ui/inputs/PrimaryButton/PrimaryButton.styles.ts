import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { StyledIconProps, StyledLabelProps, StyledRootProps } from './PrimaryButton.types';

export const Root = styled('button')<StyledRootProps>(
  ({ theme, $variant, $customStyles, $padding, $width, $contentPosition }) => {
    const getContentPosition = () => {
      switch ($contentPosition) {
        case 'left':
          return css`
            justify-content: flex-start;
          `;
        case 'center':
          return css`
            justify-content: center;
          `;
        case 'right':
          return css`
            justify-content: flex-end;
          `;
        case 'between':
          return css`
            justify-content: space-between;
          `;
        default:
          return css``;
      }
    };

    const baseStyles = css`
      position: relative;
      display: flex;
      align-items: center;
      ${getContentPosition()}
      gap: 0 4px;
      padding: ${$padding || '7px 10px'};
      width: ${$width || 'auto'};
      border-radius: 4px;
      cursor: pointer;
      transition: all ${theme.appTransitions.primary}ms;

      & g,
      & path {
        transition: all ${theme.appTransitions.primary}ms;
      }
    `;

    const getVariant = () => {
      switch ($variant) {
        case 'base':
          return css`
            border: 1px solid transparent;
            color: ${theme.appColors.primary_02};

            & g {
              fill: ${theme.appColors.primary_02};
            }
            & path {
              stroke: ${theme.appColors.primary_02};
            }

            &:hover {
              background: ${theme.appColors.primary_04};
            }

            &:active,
            &:focus {
              background: ${theme.appColors.secondary_03};
            }

            &:disabled {
              cursor: auto;
              background: transparent;
              opacity: 0.5;
            }
          `;

        case 'primary':
          return css`
            border: 1px solid transparent;
            background: ${theme.appColors.primary_01};
            color: ${theme.appColors.primary_05};
            font-weight: 500;

            & g {
              fill: ${theme.appColors.primary_05};
            }
            & path {
              stroke: ${theme.appColors.primary_05};
            }

            &:hover {
              background: ${theme.appColors.secondary_01};
            }

            &:active,
            &:focus {
              background: ${theme.appColors.secondary_02};
            }

            &:disabled {
              cursor: auto;
              background: ${theme.appColors.primary_02};
              opacity: 0.3;
            }
          `;

        case 'secondary':
          return css`
            border: 1px solid transparent;
            color: ${theme.appColors.primary_01};
            font-weight: 500;

            & g {
              fill: ${theme.appColors.primary_01};
            }
            & path {
              stroke: ${theme.appColors.primary_01};
            }

            &:hover {
              background: ${theme.appColors.primary_04};
            }

            &:active,
            &:focus {
              background: ${theme.appColors.secondary_03};
            }

            &:disabled {
              cursor: auto;
              background: transparent;
              opacity: 0.5;
            }
          `;

        case 'mixed':
          return css`
            border: 1px solid transparent;
            color: ${theme.appColors.primary_02};
            font-weight: 400;

            & g {
              fill: ${theme.appColors.primary_01};
            }
            & path {
              stroke: ${theme.appColors.primary_01};
            }

            &:hover {
              background: ${theme.appColors.primary_04};
            }

            &:active,
            &:focus {
              background: ${theme.appColors.secondary_03};
            }

            &:disabled {
              cursor: auto;
              background: transparent;
              opacity: 0.5;
            }
          `;

        case 'outlined':
          return css`
            border: 1px solid ${theme.appColors.secondary_04};
            font-weight: 500;

            & g {
              fill: ${theme.appColors.primary_02};
            }
            & path {
              stroke: ${theme.appColors.primary_02};
            }

            &:hover {
              background: ${theme.appColors.primary_04};
            }

            &:active,
            &:focus {
              background: ${theme.appColors.secondary_03};
            }

            &:disabled {
              cursor: auto;
              background: transparent;
              opacity: 0.5;
            }
          `;

        case `custom`:
          return css`
            border: 1px solid ${$customStyles?.borderColor || 'transparent'};
            background: ${$customStyles?.backgroundColor || 'transparent'};
            color: ${$customStyles?.color || theme.appColors.primary_02};
            font-weight: ${$customStyles?.fontWeight || '400'};
            ${$customStyles?.borderRadius ? `border-radius: ${$customStyles?.borderRadius};` : ''}

            & g {
              ${$customStyles?.iconColor ? `fill: ${$customStyles?.iconColor};` : ''}
            }
            & path {
              ${$customStyles?.iconColor ? `stroke: ${$customStyles?.iconColor};` : ''}
            }

            &:hover {
              ${$customStyles?.borderColorHovered
                ? `border: 1px solid ${$customStyles?.borderColorHovered};`
                : ''}
              ${$customStyles?.backgroundColorHovered
                ? `background: ${$customStyles?.backgroundColorHovered};`
                : ''}
              ${$customStyles?.colorHovered ? `color: ${$customStyles?.colorHovered};` : ''}
  
              & g {
                ${$customStyles?.iconColorHovered
                  ? `fill: ${$customStyles?.iconColorHovered};`
                  : ''}
              }
              & path {
                ${$customStyles?.iconColorHovered
                  ? `stroke: ${$customStyles?.iconColorHovered};`
                  : ''}
              }
            }

            &:active,
            &:focus {
              ${$customStyles?.borderColorActive
                ? `border: 1px solid ${$customStyles?.borderColorActive};`
                : ''}
              ${$customStyles?.backgroundColorActive
                ? `background: ${$customStyles?.backgroundColorActive};`
                : ''}
                 ${$customStyles?.colorActive ? `color: ${$customStyles?.colorActive};` : ''}
  
              & g {
                ${$customStyles?.iconColorActive ? `fill: ${$customStyles?.iconColorActive};` : ''}
              }
              & path {
                ${$customStyles?.iconColorActive
                  ? `stroke: ${$customStyles?.iconColorActive};`
                  : ''}
              }
            }

            &:disabled {
              cursor: auto;
              ${$customStyles?.borderColorDisabled
                ? `border: 1px solid ${$customStyles?.borderColorDisabled};`
                : ''}
              ${$customStyles?.backgroundColorDisabled
                ? `background: ${$customStyles?.backgroundColorDisabled};`
                : ''}
              ${$customStyles?.colorDisabled ? `color: ${$customStyles?.colorDisabled};` : ''}
              ${$customStyles?.disabledOpacity ? `opacity: ${$customStyles?.disabledOpacity};` : ''}

              & g {
                ${$customStyles?.iconColorDisabled
                  ? `fill: ${$customStyles?.iconColorDisabled};`
                  : ''}
              }
              & path {
                ${$customStyles?.iconColorDisabled
                  ? `stroke: ${$customStyles?.iconColorDisabled};`
                  : ''}
              }
            }
          `;

        default:
          return css``;
      }
    };

    return css`
      ${baseStyles}
      ${getVariant()}
    `;
  },
);

export const Icon = styled('div')<StyledIconProps>(
  ({ $width, $height }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    & svg {
      width: ${$width || '16px'};
      height: ${$height || '16px'};
    }
  `,
);

export const Label = styled('div')<StyledLabelProps>(
  ({ theme, $fontSize }) => css`
    font-family: ${theme.appFonts.primary};
    font-style: normal;
    font-size: ${$fontSize ?? '12px'};
  `,
);

export const Additional = styled('div')(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
);

export const Loading = styled('div')(
  () => css`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
  `,
);
