<template>
  <section class="content-section" aria-labelledby="nutrition-tracking-title">
    <div class="container">
      <h2 id="nutrition-tracking-title" class="section-header">Nutrition Tracking</h2>
      <form id="nutrition-form" @submit.prevent="onSearch">
        <input type="text" v-model="foodQuery" placeholder="Enter food item" required>
        <button type="submit">Search</button>
      </form>
      <div id="nutrition-results">
        <div v-if="loading">Loading...</div>
        <div v-if="error" class="error-message">{{ error }}</div>
        <div v-if="nutritionResults && nutritionResults.foods && nutritionResults.foods.length">
          <table>
            <thead>
              <tr>
                <th>Food</th>
                <th>Calories</th>
                <th>Protein (g)</th>
                <th>Fat (g)</th>
                <th>Carbs (g)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in nutritionResults.foods" :key="item.name">
                <td data-label="Food">{{ item.name }}</td>
                <td data-label="Calories">{{ item.calories }}</td>
                <td data-label="Protein (g)">{{ item.protein }}</td>
                <td data-label="Fat (g)">{{ item.fat }}</td>
                <td data-label="Carbs (g)">{{ item.carbs }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else-if="nutritionResults && (!nutritionResults.foods || !nutritionResults.foods.length)">
          <p>No results found.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const foodQuery = ref('')
const nutritionResults = ref(null)
const loading = ref(false)
const error = ref('')

async function onSearch() {
  error.value = ''
  nutritionResults.value = null
  loading.value = true
  try {
    const response = await axios.post('/api/nutrition', { query: foodQuery.value })
    nutritionResults.value = response.data
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to fetch nutrition data.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.content-section {
  width: 100%;
  height: 100vh;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(47, 41, 38, 0.10);
  background-color: var(--flora);
  font-size: 2rem;
}

#nutrition-form {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
}

#nutrition-form input[type="text"] {
  padding: 0.75rem;
  border: 2px solid var(--bark);
  border-radius: 4px;
  font-size: 2rem;
}

#nutrition-form button[type="submit"] {
  background-color: var(--plum);
  color: var(--ethereal);
  padding: 0.75rem 1.5rem;
  border: 2px solid var(--plum);
  border-radius: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

#nutrition-form button[type="submit"]:hover {
  background-color: var(--cliff);
  color: var(--ethereal);
}

#nutrition-results {
  width: 100%;
  margin: 2rem auto 0 auto;
  background: var(--ethereal);
  border-radius: 1rem;
  box-shadow: 0 2px 8px var(--bark);
  padding: 2rem;
}

#nutrition-results table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

#nutrition-results th, #nutrition-results td {
  border: 1px solid var(--cliff);
  padding: 0.75rem 1rem;
  text-align: center;
}

#nutrition-results th {
  background: var(--plum);
  color: var(--ethereal);
}

.error-message {
  color: #d32f2f;
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 650px) {
  #nutrition-results table,
  #nutrition-results thead,
  #nutrition-results tbody,
  #nutrition-results tr,
  #nutrition-results th,
  #nutrition-results td {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  #nutrition-results thead {
    display: none;
  }
  #nutrition-results tr {
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--cliff);
  }
  #nutrition-results td {
    text-align: left;
    padding: 0.5rem 0.75rem;
    border: none;
    position: relative;
  }
  #nutrition-results td::before {
    content: attr(data-label);
    font-weight: bold;
    display: inline-block;
    width: 50%;
    color: var(--bark);
  }
  .content-section {
    padding: 0.5rem;
  }
  .section-header {
    font-size: 1.2rem;
    text-align: center;
    padding: 0.5rem 0;
  }
  #nutrition-form {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
    width: 100%;
    margin-bottom: 1rem;
  }
  #nutrition-form input[type="text"] {
    width: 100%;
    min-width: 0;
    font-size: 1rem;
    padding: 0.5rem;
  }
  #nutrition-form button[type="submit"] {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
  }
  #nutrition-results {
    padding: 0.5rem;
  }
}
</style>