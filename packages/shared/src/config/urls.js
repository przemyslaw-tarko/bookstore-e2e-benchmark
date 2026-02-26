import { config } from "./config.js";

export const urls = {
  home: () => `${config.baseUrl}/`,
  shop: () => `${config.baseUrl}/shop/`,
  myAccount: () => `${config.baseUrl}/my-account/`,
  checkout: () => `${config.baseUrl}/checkout/`,
  cart: () => `${config.baseUrl}/cart/`,
  admin: () => `${config.baseUrl}/wp-admin/`,
  downloads: () => `${config.baseUrl}/my-account/downloads/`
};
