/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  }
};

export default nextConfig;