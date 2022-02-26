/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_PARSE_APPID: string;
	VITE_PARSE_JSKEY: string;
    VITE_PARSE_ENDPOINT: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
