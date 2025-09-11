/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['three'],
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config) => {
    // Add rule to handle three.js examples modules
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/three\/examples\/jsm/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: []
        }
      }
    });
    
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  }
};

export default nextConfig;