import { Drawer as MuiDrawer } from '@mui/material';

import * as S from './Drawer.styles';
import { DrawerProps } from './Drawer.types';

export const Drawer: React.FC<DrawerProps> = ({ children, isOpen, onClose }) => (
  <MuiDrawer
    open={isOpen}
    anchor="top"
    onClose={onClose}
    PaperProps={{
      elevation: 0,
    }}
  >
    <S.Indent />

    {children}
  </MuiDrawer>
);
