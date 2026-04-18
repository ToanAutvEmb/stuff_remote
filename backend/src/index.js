import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import productRoutes from './routes/products.js'
import newsletterRoutes from './routes/newsletter.js'

const app = express()
const PORT = process.env.PORT || 4000

// ── Middleware ───────────────────────────────────────────
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }))
app.use(express.json())

// ── Routes ───────────────────────────────────────────────
app.use('/api/products', productRoutes)
app.use('/api/newsletter', newsletterRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(PORT, () => {
  console.log(`🧣 Roscarf API running → http://localhost:${PORT}`)
})
