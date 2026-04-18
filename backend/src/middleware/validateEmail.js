// Reusable email validation middleware
export function validateEmail(req, res, next) {
  const { email } = req.body
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email address' })
  }
  next()
}
