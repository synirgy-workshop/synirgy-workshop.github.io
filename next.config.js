/** @type {import('next').NextConfig} */
// Update this to match your GitHub repository name
// If your repo is at the root (username.github.io), set to ''
// Otherwise, set to '/your-repo-name'
const repoName = '/synirgy-workshop.github.io'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? repoName : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? repoName : '',
  trailingSlash: true,
}

module.exports = nextConfig

