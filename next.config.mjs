/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: '/',
      destination: '/products',
      permanent: false,
    }
  ],
};

export default nextConfig;
