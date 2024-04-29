import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { StyledRootProps } from './NavigationButton.types';

export const Root = styled(
  (props: StyledRootProps | (StyledRootProps & NavLinkProps)) => {
    switch (props.tag) {
      case 'button':
        return <button {...(props as StyledRootProps)} type="button" />;

      default:
        return <NavLink {...(props as StyledRootProps & NavLinkProps)} />;
    }
  },
  {
    shouldForwardProp: (prop) =>
      prop !== '$variant' &&
      prop !== '$padding' &&
      prop !== '$width' &&
      prop !== '$height' &&
      prop !== '$active' &&
      prop !== '$innerBorder',
  },
)(({ theme, $variant, $padding, $width, $height, $active, $innerBorder }) => {
  const baseStyles = css`
    display: block;
    padding: ${$padding || '16px'};
    width: ${$width || 'auto'};
    height: ${$height || 'auto'};
    font-family: ${theme.appFonts.primary};
    cursor: pointer;
    transition: all ${theme.appTransitions.primary}ms !important;

    & g,
    & path {
      transition: all ${theme.appTransitions.primary}ms;
    }
  `;

  const getVariant = () => {
    switch ($variant) {
      case 'base':
        return css`
          &:hover,
          &:focus,
          &:active {
            opacity: 0.6;
          }
        `;

      case 'primary':
        return css`
          background: ${$active ? theme.appColors.primary_05 : theme.appColors.primary_02};
          color: ${$active ? theme.appColors.primary_02 : theme.appColors.primary_05};
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;

          & g {
            fill: ${theme.appColors.primary_01};
          }
          & path {
            stroke: ${theme.appColors.primary_01};
          }

          &:hover,
          &:focus {
            background: ${$active ? theme.appColors.secondary_03 : theme.appColors.primary_01};

            & g {
              fill: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
            & path {
              stroke: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
          }

          &:active {
            background: ${$active ? theme.appColors.secondary_01 : theme.appColors.primary_01};

            & g {
              fill: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
            & path {
              stroke: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
          }
        `;

      case 'secondary':
        return css`
          background: ${$active ? theme.appColors.primary_03 : 'transparent'};
          color: ${theme.appColors.primary_02};
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;

          & g {
            fill: ${theme.appColors.primary_01};
          }
          & path {
            stroke: ${theme.appColors.primary_01};
          }

          &:hover,
          &:focus {
            background: ${theme.appColors.primary_03};
          }

          &:active {
            background: ${theme.appColors.primary_03};
          }
        `;

      case 'colored':
        return css`
          background: ${$active ? theme.appColors.secondary_06 : 'transparent'};
          color: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_02};
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;

          & g {
            fill: ${theme.appColors.primary_01};
          }
          & path {
            stroke: ${theme.appColors.primary_01};
          }

          & span {
            ${$active ? `color: ${theme.appColors.primary_01}` : ''};
          }

          &:hover,
          &:focus {
            background: ${$active ? theme.appColors.secondary_06 : theme.appColors.primary_03};
          }

          &:active {
            background: ${$active ? theme.appColors.secondary_06 : theme.appColors.primary_03};
          }
        `;

      case 'avatar':
        return css`
          background: ${$active ? theme.appColors.primary_05 : theme.appColors.primary_02};
          color: ${$active ? theme.appColors.primary_02 : theme.appColors.primary_05};
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 16px;

          & g {
            fill: ${theme.appColors.primary_01};
          }
          & path {
            stroke: ${theme.appColors.primary_01};
          }

          &:hover,
          &:focus {
            background: ${$active ? theme.appColors.secondary_03 : theme.appColors.primary_01};

            & .MuiAvatar-root {
              ${$innerBorder
                ? css`
                    border: 1px solid
                      ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
                  `
                : ''}

              color: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }

            & g {
              fill: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
            & path {
              stroke: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
          }

          &:active {
            background: ${$active ? theme.appColors.secondary_01 : theme.appColors.primary_01};

            & .MuiAvatar-root {
              ${$innerBorder
                ? css`
                    border: 1px solid
                      ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
                  `
                : ''}
              color: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }

            & g {
              fill: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
            }
            & path {
              stroke: ${$active ? theme.appColors.primary_01 : theme.appColors.primary_05};
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
});
