import React from 'react';
import type { Preview } from '@storybook/react';

import { ThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

import { global, muiTheme, themes } from '../src/app/styles';
import { Global } from '@emotion/react';

const queryClient = new QueryClient();

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MuiThemeProvider theme={muiTheme(themes.primaryTheme)}>
          <ThemeProvider theme={themes.primaryTheme}>
            <Global styles={global} />
            <Story />
          </ThemeProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  ),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
