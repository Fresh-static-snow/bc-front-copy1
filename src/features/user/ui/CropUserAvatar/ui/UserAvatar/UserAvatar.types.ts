export type UserAvatarProps = {
  name?: string;
  image: string;
  onUpdateAvatar?: (file: File) => void;
};
