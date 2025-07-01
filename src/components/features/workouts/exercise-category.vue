<template>
  <div class="exercise-category" v-if="exercises && exercises.length">
    <h2 class="section-header">{{ capitalizedName }} Exercises</h2>
    <div class="card-row">
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
.card-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 900px) {
  .card-row {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: flex-start;
  }
  .card-row > * {
    flex: 1 1 350px;
    max-width: 400px;
  }
}
</style>