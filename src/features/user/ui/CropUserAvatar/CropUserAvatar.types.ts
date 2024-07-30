import { CSSProperties } from 'react';

import { User } from '@/shared/types/entities.types';

export type CropUserAvatarProps = {
  userData: User;
  size?: CSSProperties['width'] | CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  buttonGap?: CSSProperties['bottom'];
};
