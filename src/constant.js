const API_ENDPOINT = process.env.API_URL || 'http://localhost:1502'
const apiLocal = 'localhost:8000'
module.exports = {
  BASE_API_URL: `${API_ENDPOINT}`,
  // BASE_API_URL_LOCAL: `${apiLocal}/`,
}
