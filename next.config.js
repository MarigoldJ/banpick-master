/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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
