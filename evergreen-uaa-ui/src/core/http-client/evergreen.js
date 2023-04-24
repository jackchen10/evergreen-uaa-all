import axios from "axios";

export const EVERGREEN_AXIOS = axios.create({
  //baseURL: `https://apis.evergreen.org`,
  baseURL: `http://localhost:8088/`,
  timeout: 10000,
});
