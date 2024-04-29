export type SectionProps = {
  children?: React.ReactNode;
  width?: string;
  /**
   * The number of fragments that the element will occupy in the page layout.
   * @default 1
   */
  fragments?: number;
  /**
   * @default false
   */
  scrollActive?: boolean;
  disableTracksWidthCompensation?: boolean;
  /**
   * @default false
   */
  borderLeft?: boolean;
  borderLeftType?: 'solid' | 'dashed';
  /**
   * @default false
   */
  borderRight?: boolean;
  borderRightType?: 'solid' | 'dashed';
  /**
   * @default primary_05
   * @description `primary_05` is the color of the active theme.
   */
  backgroundColor?: string;
};

export type StyledRootProps = {
  $width: string;
  $fragments: number;
  $borderLeft?: boolean;
  $borderLeftType?: 'solid' | 'dashed';
  $borderRight?: boolean;
  $borderRightType?: 'solid' | 'dashed';
  $backgroundColor?: string;
};
