const API_ENDPOINT =
  process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:1502'
const apiLocal = 'localhost:8000'
module.exports = {
  BASE_API_URL: `${API_ENDPOINT}/api`,
  // BASE_API_URL_LOCAL: `${apiLocal}/`,
}
