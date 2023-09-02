/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mars.nasa.gov","mars.jpl.nasa.gov"],
  },
};

module.exports = nextConfig;
