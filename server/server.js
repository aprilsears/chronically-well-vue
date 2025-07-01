import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import nutritionRoutes from './routes/nutritionRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(nutritionRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})