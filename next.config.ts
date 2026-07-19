import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // The portfolio ships pre-sized local illustrations, so they can be served
    // directly without relying on a hosted image-transform binding.
    unoptimized: true,
  },
};

export default nextConfig;
