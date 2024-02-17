const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,

}

module.exports = withMDX({
  nextConfig,
  async rewrites () {
    return [
      {
        soruce: "/robots.txt",
        destination: "/src/pages/api/robots.js",
      }
    ]
  }
})



module.exports = {
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};