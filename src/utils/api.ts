import axios from "axios";
import Config from "react-native-config";

const BASE_URL = Config.API_URL;
const API_KEY = Config.API_KEY;
const API_PARAM_KEY = "api_key";

// allow debugging of network requests in develop
declare const GLOBAL: any;
if (process.env.NODE_ENV === "development") {
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
}

export const api = axios.create({
  baseURL: BASE_URL
});

// attach api key automatically on every request
api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params[API_PARAM_KEY] = API_KEY;
  return config;
});
