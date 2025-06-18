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
/* Nutrition-specific styles can go here, or import from your CSS */
</style>

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
    // Calling the backend API endpoint
    const response = await axios.post('/api/nutrition', { query: foodQuery.value })
    nutritionResults.value = response.data
  } catch (err) {
    error.value = err.response?.data?.error || 'Failed to fetch nutrition data.'
  } finally {
    loading.value = false
  }
  <div id="nutrition-results">
  <div v-if="loading">Loading...</div>
  <div v-if="error" style="color: red;">{{ error }}</div>
  <div v-if="nutritionResults">
    <!-- Render your nutrition data here -->
    <pre>{{ nutritionResults }}</pre>
  </div>
    </div>
    }
</script>

<style scoped>
:root {
    --ethereal: #d8daca;
    --bark: #2f2926;    
    --flora: #848170;
    --sage: #b1b093;    
    --cliff: #5a554c;
    --plum: #48252f;
    --header-height: 60px;
    --footer-height: 60px;
    --min-height: calc(100vh - var(--header-height) - var(--footer-height));
}
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
    #nutrition-form input[type="text"] {
    width: 50%;
    padding: 10px;
    margin: 10px;
    border: 2px solid var(--plum);
    font-size: 1.5rem;
    background-color: var(--ethereal);
    color: var(--bark);
}

#nutrition-form input[type="text"]:focus {
    border-color: var(--plum);

}

#nutrition-form button[type="submit"] {
    background-color: var(--ethereal);
    color: var(--plum);
    padding: 10px 20px;
    margin: 1rem;
    border: 4px solid var(--plum);
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

#nutrition-form button[type="submit"]:hover {
    background-color: var(--cliff);
}
#food-query {
    flex: 1;
    min-width: 200px;
    padding: 0.75rem;
    border: 2px solid var(--flora);
    border-radius: 4px;
    font-size: 16px; /
}


</style>