/** @type {import('next').NextConfig} */
// Update this to match your GitHub repository name
// For root domain sites (username.github.io or orgname.github.io), set to ''
// For project sites (username.github.io/repo-name), set to '/repo-name'
// This site deploys to: https://synirgy.github.io/synirgy-workshop.github.io/
const repoName = '/synirgy-workshop.github.io'

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './imageLoader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? repoName : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? repoName : '',
  trailingSlash: true,
}

module.exports = nextConfig

