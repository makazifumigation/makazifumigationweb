/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
  // i18n: {
  //   locales: ["en", "sw"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
