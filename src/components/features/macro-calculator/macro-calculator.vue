<template>
  <div class="calculator-container">
    <h2>Macronutrient-Calculator</h2>
    <form id="macroForm" @submit.prevent="calculateMacros">
      <div class="form-group">
        <label for="weightManual">Weight (lbs):</label>
        <input type="number" id="weightManual" v-model.number="weight" required min="1" max="1000" step="0.1" />
      </div>
      <div class="form-group">
        <label for="activity">Activity Level:</label>
        <select id="activity" v-model.number="activity" required>
          <option value="6">Sedentary</option>
          <option value="7">Light Activity</option>
          <option value="8">Moderate Activity</option>
          <option value="9">Very Active</option>
          <option value="10">Extra Active</option>
        </select>
      </div>
      <button type="submit">Calculate</button>
    </form>
    <div v-if="showResults" class="results">
      <h3>Your Daily Macronutrient Needs:</h3>
      <p>Maintenance Calories: <span>{{ calories }}</span></p>
      <p>Protein: <span>{{ protein }}</span> grams</p>
      <p>Fat: <span>{{ fat }}</span> grams</p>
      <p>Carbs: <span>{{ carbs }}</span> grams</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const weight = ref('')
const activity = ref(6)
const showResults = ref(false)
const calories = ref(0)
const protein = ref(0)
const fat = ref(0)
const carbs = ref(0)

function calculateMacros() {
  if (!weight.value) {
    alert('Please enter your weight')
    return
  }
  const w = parseFloat(weight.value)
  const a = parseFloat(activity.value)
  calories.value = Math.round(w * 15)
  protein.value = Math.round(w * (a / 10))
  fat.value = Math.round(w * 0.3)
  carbs.value = Math.round((w * 15 * 0.40) / 4)
  showResults.value = true
}
</script>

<style scoped>
@import "@/assets/css/macro-calculator.css";
</style>