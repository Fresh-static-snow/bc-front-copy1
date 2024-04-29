import { useTheme } from '@emotion/react';
import { closeSnackbar, CustomContentProps, SnackbarContent as Content } from 'notistack';
import { forwardRef, useCallback, useMemo } from 'react';

import { HEX } from '@/shared/types/styles.types';
import { BackgroundColor } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import { variantColors } from './SnackbarContent.const';
import * as S from './SnackbarContent.styles';

export const SnackbarContent = forwardRef<HTMLDivElement, CustomContentProps>(
  ({ id, message, style, variant }, ref) => {
    const theme = useTheme();

    const color = useMemo(() => theme.appColors[variantColors[variant]] as HEX, [theme, variant]);

    const onClose = useCallback(() => {
      closeSnackbar(id);
    }, [id]);

    return (
      <Content ref={ref} style={style} onClick={onClose}>
        <S.ContentWrapper>
          <BackgroundColor colorIndicator baseColor={color}>
            <S.TextWrapper>
              <TextColor
                text={message as string}
                secondaryColor={color}
                fontSize="14px"
                lineHeight="20px"
              />
            </S.TextWrapper>
          </BackgroundColor>
        </S.ContentWrapper>
      </Content>
    );
  },
);
