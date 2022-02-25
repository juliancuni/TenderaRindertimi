import Parse from 'parse/dist/parse.js';
// import Parse from 'parse';

const APP_ID = globalThis['PARSE_APPID'];
const JS_KEY = globalThis['PARSE_JSKEY'];
const SERVER_URL = globalThis['PARSE_ENDPOINT'];

Parse.initialize(APP_ID, JS_KEY);

Parse.serverURL = SERVER_URL;

export default Parse;
