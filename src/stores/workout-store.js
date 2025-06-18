import { defineStore } from 'pinia'
import { workoutDatabase } from '../data/workout-database'

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    categories: ['push', 'pull', 'legs'],
    workouts: workoutDatabase || {
      push: { exercises: [] },
      pull: { exercises: [] },
      legs: { exercises: [] }
    }
  }),

  getters: {
    getExercisesByCategory: (state) => (category) => {
      return state.workouts[category]?.exercises || []
    },
    
    getAllCategories: (state) => {
      return state.categories
    }
  },

  actions: {
    initializeWorkouts() {
      // Validate data structure
      this.categories.forEach(category => {
        if (!this.workouts[category] || !this.workouts[category].exercises) {
          console.warn(`Missing data for category: ${category}`)
          this.workouts[category] = { exercises: [] }
        }
      })
    }
  }
})