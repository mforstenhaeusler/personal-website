/** @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  reactStrictMode: true,
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      /*"/about": { page: "/about" },*/
    }
  },
  images: {
    loader: "custom",
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
}
