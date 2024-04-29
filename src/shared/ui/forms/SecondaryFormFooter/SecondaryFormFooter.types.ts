export type SecondaryFormFooterProps = {
  isDirty: boolean;
  CustomComponent?: React.ReactNode;
  withDelete?: boolean;
  submitButtonLabel?: string;
  isLoading?: boolean;
  onClickDelete?: () => void;
  onReset?: () => void;
};
