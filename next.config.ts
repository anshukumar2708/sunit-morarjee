import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

export default nextConfig
