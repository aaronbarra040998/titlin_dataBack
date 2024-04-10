const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const sportRouter = require('./routes/sportRouter')
app.use('/api/sports', sportRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`)
})
