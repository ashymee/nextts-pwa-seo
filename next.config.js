/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  runtimeCaching,
  dest: 'public',
  register: process.env.NODE_ENV === 'production',
  disable: process.env.NODE_ENV === 'development',
  skipWaiting: true,
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: { ignoreBuildErrors: true },
};

module.exports = withPWA(nextConfig);
