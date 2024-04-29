export type AvatarEditModalProps = {
  avatarFile: File;
  onClose: () => void;
  onUpdateAvatar?: (file: File) => void;
};
