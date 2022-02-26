import Parse from 'parse';

const APP_ID = import.meta.env.VITE_PARSE_APPID;
const JS_KEY = import.meta.env.VITE_PARSE_JSKEY;
const SRV_URL = import.meta.env.VITE_PARSE_ENDPOINT;

Parse.initialize(APP_ID, JS_KEY);
Parse.serverURL = SRV_URL;
