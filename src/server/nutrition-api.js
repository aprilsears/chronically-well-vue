import express from 'express'
import axios from 'axios'

const router = express.Router()

router.post('/api/nutrition', async (req, res) => {
  try {
    const { query } = req.body
    if (!query) {
      return res.status(400).json({ error: 'Query is required' })
    }

    const response = await axios.post(
      'https://trackapi.nutritionix.com/v2/natural/nutrients',
      { query },
      {
        headers: {
          'x-app-id': process.env.NUTRITIONIX_APP_ID,
          'x-app-key': process.env.NUTRITIONIX_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    )

    // fields requested:
    const foods = response.data.foods.map(food => ({
      name: food.food_name,
      calories: food.nf_calories,
      protein: food.nf_protein,
      fat: food.nf_total_fat,
      carbs: food.nf_total_carbohydrate
    }))

    res.json({ foods })
  } catch (error) {
    console.error('Error fetching nutrition data:', error)
    res.status(500).json({ error: 'Failed to fetch nutrition data.' })
  }
})

export default router