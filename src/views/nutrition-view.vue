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
        <div v-if="error" style="color: red;">{{ error }}</div>
        <div v-if="nutritionResults">
          <pre>{{ nutritionResults }}</pre>
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
.nutrition-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(47, 41, 38, 0.15);
  margin: 1rem;
  background-color: var(--ethereal);
  color: var(--plum);
}

#food-query {
  flex: 1;
  min-width: 200px;
  padding: 0.75rem;
  border: 2px solid var(--flora);
  border-radius: 4px;
  font-size: 16px;
}
</style>