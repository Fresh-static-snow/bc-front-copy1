import { PopperProps } from '@mui/material';

import * as S from './CustomPopup.styles';

export const CustomPopup: React.FC<PopperProps> = ({ children, ...other }) => (
  <S.Root {...other}>{children}</S.Root>
);
