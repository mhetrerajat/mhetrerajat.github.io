// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Rajat Mhetre";
export const SITE_DESCRIPTION =
  "";
export const TWITTER_HANDLE = "@mhetrerajat";
export const MY_NAME = "Rajat Mhetre";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
