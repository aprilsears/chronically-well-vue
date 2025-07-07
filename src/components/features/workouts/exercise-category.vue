<template>
  <div class="exercise-category" v-if="exercises && exercises.length">
    <h2 class="section-header">{{ capitalizedName }} Exercises</h2>
    <div class="card-grid">
      <exercise-card
        v-for="workout in exercises"
        :key="workout.name"
        :workout="workout"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ExerciseCard from './exercise-card.vue'

const props = defineProps({
  name: String,
  exercises: Array
})

const capitalizedName = computed(() => {
  return props.name ? props.name.charAt(0).toUpperCase() + props.name.slice(1) : ''
})
</script>

<style scoped>
.exercise-category {
  margin: 2rem 0;
  padding: 1rem;
}

.section-header {
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--ethereal);
  color: var(--plum);
  font-weight: bold;
  border: 0.5rem solid var(--plum);
  border-radius: 1rem;
  margin: 1rem 0 2rem 0;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: stretch;
}

/* Responsive grid layout */
@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}


.card-grid > * {
  height: 100%;
}
</style>