// Global error handler — plugged into Express at the bottom of index.js
// FUTURE: add logging service (e.g. Sentry) here
export function errorHandler(err, req, res, next) {
  console.error(err.stack)
  res.status(err.status || 500).json({
    success: false,
    error: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
  })
}
