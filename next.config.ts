import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },

      {
        protocol: 'https',
        hostname: 'www.acmegrade.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'kinsta.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudmatetechnologies.com',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
      {
        protocol: 'https',
        hostname: 'www.akamai.com',
      },
      {
        protocol: 'https',
        hostname: 'jaro-website.s3.ap-south-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'img-c.udemycdn.com',
      },
    ],
  },
  compiler: {
    removeConsole: true,
  },
};

export default nextConfig;
