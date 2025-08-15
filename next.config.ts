import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 生成静态html
  // async rewrites() {
  //   return [
  //     {
  //       source: '/institution/:path*', // 客户端请求路径
  //       destination: 'https://inst.htsc.com/:path*', // 目标服务器路径
  //     },
  //   ];
  // },
};

export default nextConfig;
