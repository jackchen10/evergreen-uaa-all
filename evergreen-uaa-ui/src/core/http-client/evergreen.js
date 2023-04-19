import axios from "axios";

export const EVERGREEN_AXIOS = axios.create({
  baseURL: `https://apis.evergreen.org`,
  timeout: 10000,
});
