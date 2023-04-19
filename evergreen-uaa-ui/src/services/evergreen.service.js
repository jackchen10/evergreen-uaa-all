import { EVERGREEN_AXIOS } from "@/core/http-client/evergreen";

export default {
  verifyCode(icode) {
    const url = `?icode=${icode}`;
    return EVERGREEN_AXIOS.get(url);
  },
};