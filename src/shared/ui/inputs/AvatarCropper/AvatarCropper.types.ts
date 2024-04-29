export type AvatarCropperProps = {
  image: File;
  onCancel?: () => void;
  onUpdateAvatar?: (file: File) => void;
};
