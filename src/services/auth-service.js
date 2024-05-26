import axios from "axios";
import config from "../config";
import { userDTO, loginDTO } from "./dto";
const { hostUrl } = config;

const userUrls = {
  login: (userType) => `${hostUrl}/login?userType=${userType}`,
  register: `${hostUrl}/register?userType=Certifyee`,
};

// Updated register function to match the new schema
const register = (user) => {
  return axios
    .post(userUrls.register, userDTO(user))
    .then((response) => response.data);
};

// Updated login function to match the new schema
const login = (user, userType) => {
  return axios
    .post(userUrls.login(userType), loginDTO(user))
    .then((response) => response.data);
};

export default {
  login,
  register,
};
/*
const userUrls = {
  login: (userType) => `${hostUrl}/login?userType=${userType}`,
  register: `${hostUrl}/register?userType=Certifyee`,
};

const login = (user, userType) => {
  return axios
    .post(userUrls.login(userType), loginDTO(user))
    .then((response) => response.data);
};

const register = (user) => {
  return axios
    .post(userUrls.register, userDTO(user))
    .then((response) => response.data);
};

export default {
  login,
  register,
};
*/