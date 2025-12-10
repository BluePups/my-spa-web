/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    // Vì chúng ta dùng <img> và SafeImage, không config domain bắt buộc.
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
