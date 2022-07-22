/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });
  return config;
  },
  i18n: {
    locales: ['en', 'fr', 'ar'],
    defaultLocale: 'fr',
    /* domains: [
      {
        domain: 'marocartisan.com/en',
        defaultLocale: 'en',
      },
      {
        domain: 'marocartisan.com/fr',
        defaultLocale: 'fr',
      },
      {
        domain: 'marocartisan.com/ar',
        defaultLocale: 'ar',
        http: false,
      },
    ], */
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}
module.exports = nextConfig;