/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'assets.aceternity.com']
  },
  output: 'export',
}

module.exports = nextConfig
