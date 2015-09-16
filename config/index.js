
module.exports = {
  development: {
    // API_URL: "http://api-dev.tocu.vn",
    API_URL: "http://tocu-api-dev-tranduchieu.c9.io",
  },
  production: {
    API_URL: "http://api.tocu.vn",
  }
}[process.env.NODE_ENV || 'development'];
