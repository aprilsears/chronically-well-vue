import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home-view.vue'
import Calculator from '../views/calculator-view.vue'
import Nutrition from '../views/nutrition-view.vue'
import Workouts from '../views/workout-database-view.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/nutrition',
    name: 'Nutrition',
    component: Nutrition
  },
  {
    path: '/workouts',
    name: 'Workouts',
    component: Workouts
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router