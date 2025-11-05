/**
 * Custom image loader for Next.js static export with GitHub Pages basePath
 * This automatically prepends the basePath to relative image paths
 */
export default function imageLoader({ src, width, quality }) {
  // basePath for GitHub Pages - matches next.config.js
  const basePath = process.env.NODE_ENV === 'production' ? '/synirgy-workshop.github.io' : ''

  // Don't modify external URLs (CDN images, etc.)
  if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('//')) {
    return src
  }

  // Remove leading slash if present to avoid double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src

  // Prepend basePath for relative paths
  return `${basePath}/${cleanSrc}`
}
