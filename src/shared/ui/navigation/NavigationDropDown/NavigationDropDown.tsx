import { useCallback, useState } from 'react';

import { DropDownButton } from '@/shared/ui/layouts/DropDownButton/DropDownButton';

import { NavigationButton } from '../NavigationButton/NavigationButton';
import { NavigationDropDownProps } from './NavigationDropDown.types';

export const NavigationDropDown: React.FC<NavigationDropDownProps> = ({
  ButtonContentComponent,
  ContentComponent,
  activePathString,
  buttonVariant = 'primary',
  buttonInnerBorder,
  buttonPadding,
  anchorOrigin,
  transformOrigin,
}) => {
  // Anchor for popovers.
  const [anchor, setAnchor] = useState<HTMLElement>(null);

  // Changing and clearing popover anchor.
  const onChangeAnchor = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  }, []);

  const onClearAnchor = useCallback(() => {
    setAnchor(null);
  }, []);

  return (
    <DropDownButton
      ButtonComponent={
        <NavigationButton
          tag="button"
          activePathString={activePathString}
          padding={buttonPadding}
          variant={buttonVariant}
          innerBorder={buttonInnerBorder}
          onClick={onChangeAnchor}
        >
          {ButtonContentComponent}
        </NavigationButton>
      }
      ContentComponent={ContentComponent}
      isOpen={!!anchor}
      anchorEl={anchor}
      onClose={onClearAnchor}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    />
  );
};
