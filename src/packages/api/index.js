import HTTP from "@/packages/http";
import * as EP from "./endpoints.js";

export default {
  login(data) {
    return HTTP.post(EP.LOGIN, { ...data }).then(({ data }) => data);
  }
};
