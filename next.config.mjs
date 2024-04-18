/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cdn.dummyjson.com',
        port: '',
        pathname: '/products/*/**',
      },
    ],
  },

};



export default nextConfig;
