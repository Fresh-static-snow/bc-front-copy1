import './config/axiosInterceptors';
import './config/dayJsPlugins';
import './config/sentry';

import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ReloadPrompt } from '@/features/misc';

import { SnackbarProvider } from './providers';
import { MainRouter } from './router';
import { global, muiTheme, primaryTheme } from './styles';

const queryClient = new QueryClient();

export const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <MuiThemeProvider theme={muiTheme(primaryTheme)}>
      <ThemeProvider theme={primaryTheme}>
        <SnackbarProvider>
          <ReloadPrompt />
          <Global styles={global} />
          <MainRouter />
        </SnackbarProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </QueryClientProvider>
);
