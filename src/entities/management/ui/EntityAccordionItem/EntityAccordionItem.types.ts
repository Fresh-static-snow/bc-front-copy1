export type EntityAccordionItemProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  elementsList?: {
    key: string | number;
    content: React.ReactNode;
  }[];
  dashedBorder?: boolean;
  withoutBorder?: boolean;
  disabled?: boolean;
  startRotationPositionDeg?: number;
  endRotationPositionDeg?: number;
};

export type StyledRootProps = {
  $withBorder: boolean;
  $dashedBorder: boolean;
};

export type StyledDisabledWrapperProps = {
  $dashedBorder: boolean;
};
