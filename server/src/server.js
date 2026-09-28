const express = require('express')
const cors = require('cors')
require('dotenv').config()

const healthRoutes = require('./routes/health.routes')

const app = express()

const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/health', healthRoutes)

// Start server
app.listen(PORT, () => {
  console.log(`CodeLens AI server running on port ${PORT}`)
})