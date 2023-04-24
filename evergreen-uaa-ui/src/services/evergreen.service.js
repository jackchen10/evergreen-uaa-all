import { EVERGREEN_AXIOS } from "@/core/http-client/evergreen";

export default {
  verifyCode(icode) {
    const url = `public/code?icode=${icode}`;
    const finalUrl = EVERGREEN_AXIOS.get(url);
    console.log("finalUrl的值：" + finalUrl);
    console.log("icode的值：" + icode);
    return finalUrl;
  },
};
