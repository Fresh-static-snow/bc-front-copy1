import { CSSProperties } from 'react';

export type UserAvatarProps = {
  name?: string;
  image: string;
  size?: CSSProperties['width'] | CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  buttonGap?: CSSProperties['bottom'];
  onUpdateAvatar?: (file: File) => void;
};

export type StyledEditButtonWrapperProps = {
  $bottom: CSSProperties['bottom'];
};
