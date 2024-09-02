/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  output : 'export',
  distDir : 'dist',
  webpack : (config, options) => {
    const { isServer } = options;
    config.plugins.push (
      new NextFederationPlugin ({
        shareStrategy:'loaded-first',
        name : 'host',
        filename : `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
      })
    );
    return config;
  },
};

export default nextConfig;
