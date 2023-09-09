/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  images: {
    domains: ["qucsmgttjfelqvwatpom.supabase.co"],
  },
};

module.exports = nextConfig;
