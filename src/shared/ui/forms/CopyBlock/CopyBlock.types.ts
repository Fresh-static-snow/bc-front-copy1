export type CopyBlockProps = {
  children?: React.ReactNode;
  title?: React.ReactNode;
  copyButtonDisabled?: boolean;
  pasteButtonDisabled?: boolean;
  onCopy?: () => void;
  onPaste?: () => void;
};
