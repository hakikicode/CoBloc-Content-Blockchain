import { apis } from "service";

const COMMON_URL = `https://nodedemo.dhiwise.co/device/api/v1/user/`;

const API_URLS = { UPDATE_USER_PROFILE: `${COMMON_URL}update-profile` };

export const updateUserProfile = (payload) =>
  apis.put(API_URLS.UPDATE_USER_PROFILE, payload);
