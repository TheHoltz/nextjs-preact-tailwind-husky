const withPreact = require('next-plugin-preact')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true,
    esmExternals: false,
    optimizeCss: true
  }
}

module.exports = withPreact(nextConfig)
