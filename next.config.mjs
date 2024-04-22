/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
   domains:["cdn.dummyjson.com","images.rawpixel.com"]
  },
  redirects:async()=>[
    {
      source:'/customer/:customerid',
      destination:'/',
      permanent:false
    }
  ]
};



export default nextConfig;