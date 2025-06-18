<template>
  <div class="exercise-category" v-if="exercises && exercises.length">
    <h2 class="section-header">{{ capitalizedName }} Exercises</h2>
    <exercise-card
      v-for="workout in exercises"
      :key="workout.name"
      :workout="workout"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ExerciseCard from './exercise-card.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  exercises: {
    type: Array,
    required: true,
    default: () => []
  }
})

const capitalizedName = computed(() => {
  return props.name ? props.name.charAt(0).toUpperCase() + props.name.slice(1) : ''
})

console.log('Category created:', props.name)
console.log('Exercises:', props.exercises)
</script>
