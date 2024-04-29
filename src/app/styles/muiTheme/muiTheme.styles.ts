import { createTheme, Theme } from '@mui/material/styles';

import { AppTheme } from '@/shared/types/theme.types';

const muiTheme = (theme: AppTheme): Theme =>
  createTheme({
    typography: {
      allVariants: {
        fontFamily: theme.appFonts.primary,
      },
    },
  });

export default muiTheme;
