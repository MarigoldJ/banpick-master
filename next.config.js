/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ddragon.leagueoflegends.com",
        port: "",
        pathname: "/cdn/**",
      },
    ],
  },
};

module.exports = nextConfig;
