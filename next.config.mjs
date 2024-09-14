import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MONGO_URL: process.env.MONGO_URL,
  },
  
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos/',
          outputPath: 'static/videos/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, no-cache, must-revalidate, proxy-revalidate'
          },
          {
            key: 'Expires',
            value: '0'
          },
          {
            key: 'Pragma',
            value: 'no-cache'
          },
          {
            key: 'Surrogate-Control',
            value: 'no-store'
          }
        ]
      }
    ]
  },
};

export default withNextVideo(nextConfig);
