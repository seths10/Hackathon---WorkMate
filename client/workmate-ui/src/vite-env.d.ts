/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: "https://workmate-u6j3.onrender.com";
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
