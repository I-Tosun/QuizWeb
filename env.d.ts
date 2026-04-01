interface ImportMetaEnv {
    readonly VITE_PROJECT_ID: string;
    readonly VITE_API_KEY: string;
    readonly VITE_TRIVIA_TOKEN: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}