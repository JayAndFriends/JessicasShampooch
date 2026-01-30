/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEBHOOK_URL: string;
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_PHONE_NUMBER: string;
  readonly VITE_ADDRESS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
