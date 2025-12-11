/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {},
  // Không thêm appDir: true — App Router mặc định ở Next 14+
  images: {
    // cho phép images từ public (không cần remote)
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
