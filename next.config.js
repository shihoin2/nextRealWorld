/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: ['127.0.0.1',
          'localhost']
          // port: '8000',
          // pathname: '/storage/**',
        },
      ],
    },
}

module.exports = nextConfig;
