/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
};

module.exports = nextConfig;
