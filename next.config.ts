import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Add a rule to handle SVG files
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      }  
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {  icon: true }
        }
      ],
    });
    return config;
  }
};

export default nextConfig;
