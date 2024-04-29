import { SnackbarProvider as Provider } from 'notistack';

import { SnackbarProviderProps } from './SnackbarProvider.types';
import { SnackbarContent } from './ui/SnackbarContent/SnackbarContent';

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({ children }) => (
  <Provider
    maxSnack={3}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    hideIconVariant
    Components={{
      default: SnackbarContent,
      success: SnackbarContent,
      warning: SnackbarContent,
      info: SnackbarContent,
      error: SnackbarContent,
    }}
  >
    {children}
  </Provider>
);
