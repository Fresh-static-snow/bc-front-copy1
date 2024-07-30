/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/react" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_WEBSOCKET_BASE_URL: string;
  readonly VITE_TELEGRAM_BOT_URL: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SENTRY_PROPAGATION_TARGETS: string;
  readonly VITE_ENVIRONMENT: 'development' | 'production' | 'staging';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module 'virtual:pwa-register/react' {
  import type { Dispatch, SetStateAction } from 'react';
  import type { RegisterSWOptions } from 'vite-plugin-pwa/types';

  export type { RegisterSWOptions };

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: [boolean, Dispatch<SetStateAction<boolean>>];
    offlineReady: [boolean, Dispatch<SetStateAction<boolean>>];
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
