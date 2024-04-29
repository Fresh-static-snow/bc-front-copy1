import { AppTheme } from '../theme.types';

declare module '@mui/material/styles' {
  interface Theme extends AppTheme {}
  interface ThemeOptions extends AppTheme {}
}
