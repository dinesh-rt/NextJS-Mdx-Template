/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        }
      }
      return config
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  }
  
  // next.config.js
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
  })
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  })
  
  module.exports = nextConfig