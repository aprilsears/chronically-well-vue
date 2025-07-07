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

<style>
@import url("/src/assets/css/style.css");

.calculator-container {
  height: 100vh;
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  border: 0.3rem solid var(--plum);
  border-radius: .5rem;
  background-color: var(--sage);
  color: var(--bark);
  font-family: Arial, Helvetica, sans-serif;
  box-shadow: 0 4px 15px var(--bark);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;
}

#macroForm {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  border: 0.2rem solid var(--plum);
  border-radius: 1rem;
  gap: 2rem;
  padding: 2rem 0;
  background-color: var(--flora);
  color: var(--bark);
  margin: 1rem auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--sage);
  color: var(--bark);
  font-family: Arial, Helvetica, sans-serif;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.form-group label {
  font-size: 1.5rem;
  color: var(--bark);
  margin: 1rem;
  font-weight: bold;
}

.form-group input,
.form-group select {
  padding: 1rem;
  border: 2px solid var(--plum);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  background-color: var(--ethereal);
}

button {
  width: 65%;
  padding: 1rem;
  margin: 1rem 0;
  align-self: center;
  justify-content: center;
  background-color: var(--plum);
  color: var(--ethereal);
  border: 0.2rem solid var(--bark);
  border-radius: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}
button:hover {
  background-color: var(--sage);
  color: var(--bark);
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}



.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: var(--ethereal);
  color: var(--plum);
  border-radius: 1rem;
  box-shadow: 0 4px 15px var(--bark);
}

</style>