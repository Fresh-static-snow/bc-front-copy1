import { CSSProperties } from 'react';

import { ButtonType } from '@/shared/types/values.types';

type ButtonBaseProps = {
  label?: string;
  /**
   * @default '13px'
   */
  fontSize?: CSSProperties['fontSize'];
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
  iconWidth?: CSSProperties['width'];
  /**
   * @default '16px'
   */
  iconHeight?: CSSProperties['height'];
  /**
   * @default '7px 10px'
   */
  padding?: CSSProperties['padding'];
  disabled?: boolean;
  /**
   * @default 'button'
   */
  type?: ButtonType;
  isLoading?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  'data-testid'?: string;
  $iconColor?: CSSProperties['color'];
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
    fontWeight?: CSSProperties['fontWeight'];
    /**
     * @default primary_02
     * @description `primary_02` is the color of the active theme.
     */
    color?: CSSProperties['color'];
    /**
     * @description The default value is not set and will be inherited from `color`.
     */
    colorHovered?: CSSProperties['color'];
    /**
     * Active or focused button font color property.
     * @description The default value is not set and will be inherited from `color`.
     */
    colorActive?: CSSProperties['color'];
    /**
     * @description The default value is not set and will be inherited from `color`.
     */
    colorDisabled?: CSSProperties['color'];
    /**
     * @default 'transparent'
     */
    backgroundColor?: CSSProperties['backgroundColor'];
    /**
     * @description The default value is not set and will be inherited from `backgroundColor`.
     */
    backgroundColorHovered?: CSSProperties['backgroundColor'];
    /**
     * Active or focused button background color property.
     * @description The default value is not set and will be inherited from `backgroundColor`.
     */
    backgroundColorActive?: CSSProperties['backgroundColor'];
    /**
     * @description The default value is not set and will be inherited from `backgroundColor`.
     */
    backgroundColorDisabled?: CSSProperties['backgroundColor'];
    /**
     * @default '4px'
     */
    borderRadius?: CSSProperties['borderRadius'];
    /**
     * @default 'transparent'
     */
    borderColor?: CSSProperties['borderColor'];
    /**
     * @description The default value is not set and will be inherited from `borderColor`.
     */
    borderColorHovered?: CSSProperties['borderColor'];
    /**
     * Active or focused button border color property.
     * @description The default value is not set and will be inherited from `borderColor`.
     */
    borderColorActive?: CSSProperties['borderColor'];
    /**
     * @description The default value is not set and will be inherited from `borderColor`.
     */
    borderColorDisabled?: CSSProperties['borderColor'];
    /**
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColor?: CSSProperties['color'];
    /**
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColorHovered?: CSSProperties['color'];
    /**
     * Active or focused button SVG icons color property.
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColorActive?: CSSProperties['color'];
    /**
     * @description The default value is not set and will be inherited from SVG.
     */
    iconColorDisabled?: CSSProperties['color'];
    disabledOpacity?: CSSProperties['opacity'];
  };
};

export type PrimaryButtonProps = ButtonTemplates | ButtonCustom;

export type Variant = 'base' | 'primary' | 'secondary' | 'mixed' | 'outlined' | 'custom';

export type CustomVariant = {
  fontWeight?: CSSProperties['fontWeight'];
  color?: CSSProperties['color'];
  colorHovered?: CSSProperties['color'];
  colorActive?: CSSProperties['color'];
  colorDisabled?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  backgroundColorHovered?: CSSProperties['backgroundColor'];
  backgroundColorActive?: CSSProperties['backgroundColor'];
  backgroundColorDisabled?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  borderColor?: CSSProperties['borderColor'];
  borderColorHovered?: CSSProperties['borderColor'];
  borderColorActive?: CSSProperties['borderColor'];
  borderColorDisabled?: CSSProperties['borderColor'];
  iconColor?: CSSProperties['color'];
  iconColorHovered?: CSSProperties['color'];
  iconColorActive?: CSSProperties['color'];
  iconColorDisabled?: CSSProperties['color'];
  disabledOpacity?: CSSProperties['opacity'];
};

export type StyledRootProps = {
  $variant: Variant;
  $customStyles: CustomVariant;
  $padding: CSSProperties['padding'];
  $width?: CSSProperties['width'];
  $contentPosition: 'left' | 'center' | 'right' | 'between';
};

export type StyledIconProps = {
  $width: CSSProperties['width'];
  $height: CSSProperties['height'];
};

export type StyledLabelProps = {
  $fontSize: CSSProperties['fontSize'];
};
