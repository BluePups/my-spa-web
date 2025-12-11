/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    // Nếu bạn dùng next/image thay public static thì cấu hình domain ở đây.
    unoptimized: true
  }
};

module.exports = nextConfig;
