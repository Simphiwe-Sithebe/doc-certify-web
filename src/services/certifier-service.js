import axios from "axios";
import config from "../config";
import { certifiersModel } from "../models";
const { hostUrl } = config;
const certifiersUrls = {
  certifiers: `${hostUrl}/certifiers`,
};

const getCertifiers = () => {
  return axios
    .get(certifiersUrls.certifiers, {
      headers: {
        "ngrok-skip-browser-warning": true,
      },
    })
    .then((response) => certifiersModel(response.data));
};

export default {
  getCertifiers,
};
