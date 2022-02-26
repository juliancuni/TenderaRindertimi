/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_PARSE_APPID: string;
	VITE_PARSE_JSKEY: string;
	VITE_PARSE_ENDPOINT: string;
	VITE_USERNAME: string;
	VITE_PASSWORD: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
