import '../config/axiosInterceptors';
import '../config/dayJsPlugins';

import { Global, ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SnackbarProvider } from '../providers';
import { global, muiTheme, primaryTheme } from '../styles';

const queryClient = new QueryClient();

const TestProvider: FC<
  PropsWithChildren<{
    path?: string;
    customRoute?: boolean;
    customRouter?: boolean;
  }>
> = ({ path, children, customRoute, customRouter }) => (
  <QueryClientProvider client={queryClient}>
    <MuiThemeProvider theme={muiTheme(primaryTheme)}>
      <ThemeProvider theme={primaryTheme}>
        <SnackbarProvider>
          <Global styles={global} />
          {customRouter ? (
            children
          ) : (
            <BrowserRouter>
              <Routes>
                {customRoute ? (
                  children
                ) : (
                  <Route key={path ?? '/'} path={path ?? '/'} element={children} />
                )}
              </Routes>
            </BrowserRouter>
          )}{' '}
        </SnackbarProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  </QueryClientProvider>
);

export default TestProvider;
