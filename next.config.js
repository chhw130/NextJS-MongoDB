/** @type {import('next').NextConfig} */

// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://backend.myfavor.site/:path*",
//       },
//     ];
//   },
// };

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://backend.myfavor.site/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
