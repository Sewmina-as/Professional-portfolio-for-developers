const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  allowedDevOrigins: ['192.168.56.1', 'localhost'],
}

module.exports = nextConfig

