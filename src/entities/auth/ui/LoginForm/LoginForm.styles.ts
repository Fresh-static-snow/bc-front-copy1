import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { StyledContentProps, StyledStaticFieldsProps } from './LoginForm.types';

export const Content = styled('div')<StyledContentProps>(
  ({ $padding }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    padding: ${$padding ?? '0'};
  `,
);

export const StaticFields = styled('div')<StyledStaticFieldsProps>(
  ({ $fieldsDirection }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${$fieldsDirection === 'row' ? '15px' : '30px'};
    width: 100%;
  `,
);

export const AdditionalLink = styled(NavLink)(
  ({ theme }) => css`
    font-family: ${theme.appFonts.primary};
    color: ${theme.appColors.secondary_04};
    font-size: 14px;
    cursor: pointer;
    transition: all ${theme.appTransitions.primary}ms;
    text-decoration: underline;

    &:hover,
    &:active,
    &:focus {
      color: ${theme.appColors.primary_02};
    }
  `,
);

export const Footer = styled('div')(
  () => css`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 30px 0 0;
  `,
);
