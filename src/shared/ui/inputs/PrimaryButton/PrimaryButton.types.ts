import { CSSProperties } from 'react';

import { CSSColor, CSSIndents, CSSSize, CSSWeight } from '@/shared/types/styles.types';
import { ButtonType } from '@/shared/types/values.types';

type ButtonBaseProps = {
  label?: string;
  /**
   * @default '13px'
   */
  fontSize?: CSSSize;
  /**
   * SVG element placed before the children.
   */
  IconComponent?: React.FC<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  >;
  /**
   * React node placed after the children.
   */
  AdditionalComponent?: React.ReactNode;
  /**
   * @default 'auto'
   */
  width?: CSSProperties['width'];
  /**
   * The position of the content inside the button.
   * @default 'left'
   */
  contentPosition?: 'left' | 'center' | 'right' | 'between';
  /**
   * @default '16px'
   */
  iconWidth?: CSSSize;
  /**
   * @default '16px'
   */
  iconHeight?: CSSSize;
  /**
   * @default '7px 10px'
   */
  padding?: CSSIndents;
  disabled?: boolean;
  /**
   * @default 'button'
   */
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  'data-testid'?: string;
  $iconColor?: CSSColor;
};

export type ButtonTemplates = ButtonBaseProps & {
  /**
   * @default 'base'
   */
  variant?: 'base' | 'primary' | 'secondary' | 'mixed' | 'outlined';
  /**
   * Not used with `variant` other than `custom`.
   */
  customStyles?: never;
};

export type ButtonCustom = ButtonBaseProps & {
  /**
   * @default 'base'
   */
  variant?: 'custom';
  /**
   * Styles that can be changed in `custom` button.
   */
  customStyles: {
    /**
     * @default '400'
     */
    fontWeight?: CSSWeight;
    /**
     * @default primary_02
     * @description `primary_02` is the color of the active theme.
     */
    color?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from `color`.
     */
    colorHovered?: CSSColor;
    /**
     * Active or focused button font color property.
     * @description The default value is not set and will be inherited from `color`.
     */
    colorActive?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from `color`.
     */
    colorDisabled?: CSSColor;
    /**
     * @default 'transparent'
     */
    backgroundColor?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from `backgroundColor`.
     */
    backgroundColorHovered?: CSSColor;
    /**
     * Active or focused button background color property.
     * @description The default value is not set and will be inherited from `backgroundColor`.
     */
    backgroundColorActive?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from `backgroundColor`.
     */
    backgroundColorDisabled?: CSSColor;
    /**
     * @default '4px'
     */
    borderRadius?: CSSSize;
    /**
     * @default 'transparent'
     */
    borderColor?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from `borderColor`.
     */
    borderColorHovered?: CSSColor;
    /**
     * Active or focused button border color property.
     * @description The default value is not set and will be inherited from `borderColor`.
     */
    borderColorActive?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from `borderColor`.
     */
    borderColorDisabled?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColor?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColorHovered?: CSSColor;
    /**
     * Active or focused button SVG icons color property.
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColorActive?: CSSColor;
    /**
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColorDisabled?: CSSColor;
    disabledOpacity?: string;
  };
};

export type PrimaryButtonProps = ButtonTemplates | ButtonCustom;

export type Variant = 'base' | 'primary' | 'secondary' | 'mixed' | 'outlined' | 'custom';

export type CustomVariant = {
  fontWeight?: CSSWeight;
  color?: CSSColor;
  colorHovered?: CSSColor;
  colorActive?: CSSColor;
  colorDisabled?: CSSColor;
  backgroundColor?: CSSColor;
  backgroundColorHovered?: CSSColor;
  backgroundColorActive?: CSSColor;
  backgroundColorDisabled?: CSSColor;
  borderRadius?: CSSSize;
  borderColor?: CSSColor;
  borderColorHovered?: CSSColor;
  borderColorActive?: CSSColor;
  borderColorDisabled?: CSSColor;
  iconColor?: CSSColor;
  iconColorHovered?: CSSColor;
  iconColorActive?: CSSColor;
  iconColorDisabled?: CSSColor;
  disabledOpacity?: string;
};

export type StyledRootProps = {
  $variant: Variant;
  $customStyles: CustomVariant;
  $padding: CSSIndents;
  $width?: CSSProperties['width'];
  $contentPosition: 'left' | 'center' | 'right' | 'between';
};

export type StyledIconProps = {
  $width: string;
  $height: string;
};

export type StyledLabelProps = {
  $fontSize: CSSSize;
};
