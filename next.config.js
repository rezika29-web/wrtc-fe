module.exports = {
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  env: {
    WRTC_ENV: process.env.NODE_ENV,
    API_URL: process.env.API_URL,
  },
}
