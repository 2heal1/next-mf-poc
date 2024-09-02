/** @type {import('next').NextConfig} */
import NextFederationPlugin from '@module-federation/nextjs-mf';

const sharedConfig = {
  react: {
    // singleton: true,
    // import: false,
    // requiredVersion: false
  },
  'react-dom': {
    // singleton: true,
    // import: false,
    // requiredVersion: false
  }
}

const nextConfig = {
  reactStrictMode: true,
  output : 'export',
  distDir : 'dist',
  webpack : (config, options) => {
    const { isServer } = options;
    config.output.publicPath='auto'
    config.plugins.push (
      new NextFederationPlugin ({
        shareStrategy:'loaded-first',
        name : 'remote',
        filename : `static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
        exposes : {
          "./remoteComp" : "./components/fedcomp/module.tsx"
        },
        shared : {},  //if I do like this my remote works in standalone, but not in host using mf
        // shared : sharedConfig,  //if I don this my host is able to load remote comp, but then not standalsone
      })
    );
    return config;
  },
};

export default nextConfig;
