<template>
  <div class="workout-database">
    <section class="content-section" aria-labelledby="workout-title">
      <div class="container">
        <h1 id="workout-title">Workout Database</h1>
        <div id="workout-container">
          <exercise-category
            v-for="category in categories"
            :key="category"
            :name="category"
            :exercises="getExercisesByCategory(category)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useWorkoutStore } from '@/stores/workout-store'
import ExerciseCategory from './exercise-category.vue'

const workoutStore = useWorkoutStore()
const { categories } = storeToRefs(workoutStore)
const { getExercisesByCategory } = workoutStore

// Initialize workouts when component is created
workoutStore.initializeWorkouts()
</script>