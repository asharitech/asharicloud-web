import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  // Enable standalone output for Docker optimization
  output: "standalone",

  // Output file tracing for reduced bundle size
  outputFileTracingRoot: process.cwd(),

  // React strict mode for development
  reactStrictMode: true,

  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Bun-specific optimizations
  experimental: {
    // Optimize for Bun's fast startup
    optimizePackageImports: [
      "react",
      "react-dom",
      "@tailwindcss/postcss",
      "tailwindcss",
      "react-hook-form",
      "zod",
      "framer-motion",
      "lucide-react",
    ],
    // Optimize CSS handling
    cssChunking: "strict",
    // Enable view transitions API
    viewTransition: true,
  },

  // Turbopack configuration (Next.js 15.3+)
  turbopack: {
    // Resolve aliases for Turbopack
    resolveAlias: {
      "node:fs": "fs",
      "node:path": "path",
      "node:url": "url",
    },
  },

  // Performance optimizations
  compress: true,

  // Image optimization
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },

  // Keep webpack config for non-turbo builds
  webpack: (config, { dev }) => {
    // Optimize for Bun's module resolution
    config.resolve.alias = {
      ...config.resolve.alias,
      // Ensure Bun's built-in modules are used when available
      "node:fs": "fs",
      "node:path": "path",
      "node:url": "url",
    };

    // Enable SWC minification (faster than Terser)
    if (!dev) {
      config.optimization.minimize = true;
    }

    return config;
  },

  // Headers for performance and security
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests;",
          },
        ],
      },
      {
        source: "/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
