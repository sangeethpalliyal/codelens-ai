const express = require('express')
const cors = require('cors')
require('dotenv').config()

const healthRoutes = require('./routes/health.routes')
const testRoutes = require('./routes/test.routes')

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/health', healthRoutes)
app.use('/api/test', testRoutes)

app.listen(PORT, () => {
  console.log(`CodeLens AI server running on port ${PORT}`)
})