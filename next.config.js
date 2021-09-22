// next.config.js
module.exports = {
  env: {
    appBaseUrl: process.env.APP_BASE_URL,
    apiBaseUrl: process.env.API_BASE_URL,
    internalApiBaseUrl: process.env.INTERNAL_API_BASE_URL,
    developer: process.env.DEVELOPER,
    appTitle: "WebAppTemplate",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // eslint-disable-next-line no-param-reassign
      config.node = { fs: "empty", module: "empty" };
    }
    return config;
  },
};
