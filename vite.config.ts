/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';
import { configDefaults } from 'vitest/config';

// https://developer.mozilla.org/en-US/docs/Web/Manifest
const manifestForPlugIn: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
  manifest: {
    name: 'Broadcast Shift Calendar',
    short_name: 'Calendar',
    theme_color: '#1d1f2a',
    background_color: '#1d1f2a',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'apple touch icon',
      },
      {
        src: '/maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn), svgr()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
    extensions: ['.js', '.ts', '.tsx'],
  },
  server: {
    host: '0.0.0.0',
    port: 9000,
  },
  test: {
    css: true,
    globals: true,
    deps: {
      inline: ['vitest-canvas-mock'],
    },
    environment: 'jsdom',
    coverage: {
      ...configDefaults.coverage,
      provider: 'v8',
      exclude: ['**/*.stories.tsx', '**/*.types.ts'],
    },
    setupFiles: './src/app/__tests__/setup.ts',
  },
});
