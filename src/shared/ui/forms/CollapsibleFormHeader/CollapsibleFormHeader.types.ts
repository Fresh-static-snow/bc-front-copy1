export type CollapsibleFormHeaderProps = {
  AvatarComponent?: React.ReactNode;
  title: string;
  subtitle: React.ReactNode;
  extendedStatus: boolean;
  onChangeExtendedStatus: () => void;
  onOpenConfirmationModal: () => void;
};
