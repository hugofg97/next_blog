/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [320, 640, 768, 1024, 1600],
  }
}

module.exports = nextConfig
