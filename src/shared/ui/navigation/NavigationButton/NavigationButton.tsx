import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './NavigationButton.styles';
import { NavigationButtonProps } from './NavigationButton.types';

export const NavigationButton: React.FC<NavigationButtonProps> = memo(
  ({
    tag = 'link',
    children,
    variant = 'base',
    href = '/',
    activePathString,
    activePathExact,
    padding,
    width,
    height,
    innerBorder,
    onClick = () => {},
  }) => {
    const { pathname } = useLocation();

    // * If `true`, the current path includes the part of the path contained in the button link.
    const isActivePath = useMemo(() => {
      if (activePathExact) {
        return pathname === activePathString;
      }
      return pathname.includes(activePathString);
    }, [activePathExact, activePathString, pathname]);

    return (
      <S.Root
        tag={tag}
        to={href}
        $active={isActivePath}
        $variant={variant}
        $padding={padding}
        $width={width}
        $height={height}
        $innerBorder={innerBorder}
        onClick={onClick}
      >
        {children}
      </S.Root>
    );
  },
);
