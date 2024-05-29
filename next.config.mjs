/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'pagedone.io',
        pathname: '**'
      },
      {
        hostname: 'dummyimage.com',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
