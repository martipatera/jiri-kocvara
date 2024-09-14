import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URL: process.env.MONGO_URL,
    },
    experimental:{
      serverActions: true
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
};

export default withNextVideo(nextConfig);