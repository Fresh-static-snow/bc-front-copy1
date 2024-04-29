export type CollapsibleFormHeaderProps = {
  avatarName: string;
  avatarImage: string;
  title: string;
  subtitle: React.ReactNode;
  extendedStatus: boolean;
  onChangeExtendedStatus: () => void;
  onOpenConfirmationModal: () => void;
};
