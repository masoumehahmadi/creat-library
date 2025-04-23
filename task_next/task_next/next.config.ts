import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'hometask': require.resolve('hometask'),
    };
    return config;
  },
};

export default nextConfig;
