export type InfinityScrollbarProps = {
  children: React.ReactNode;
  /**
   * If `true`, the component will have scrollbars.
   * @default true
   */
  active?: boolean;
  /**
   * @default true
   */
  noScrollX?: boolean;
  /**
   * @default false
   */
  noScrollY?: boolean;
  /**
   * @default true
   */
  disableTracksWidthCompensation?: boolean;
  /**
   * @default false
   */
  canFetchNextPage?: boolean;
  fetchNextPage: () => void;
};
