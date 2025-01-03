import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  estlint:{
    ignoreDuringBuilds:true,

  },

  /* config options here */
  images: {remotePatterns:[
    {
      protocol :"https",
      hostname : "cdn.sanity.io",
      pathname: "**",
    }
  ]}
};

export default nextConfig;
