/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  i18n: {
    locales: ['pl-PL', 'uk'],
    defaultLocale: 'pl-PL',
  },
};

module.exports = nextConfig;
