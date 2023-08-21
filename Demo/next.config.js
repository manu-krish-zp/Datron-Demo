/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home/demo",
        permanent:true
      },
      {
        source: "/home",
        destination: "/home/demo",
        permanent:true
      },
    ];
  },
};

module.exports = nextConfig;
