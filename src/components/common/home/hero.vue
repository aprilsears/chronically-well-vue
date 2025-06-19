<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="container">
      <h1 id="hero-title">Fitness for Chronic Illness</h1>
      <p>Customized workouts and nutrition planning</p>
    </div>
  </section>

  <section id="workouts" class="content-section" aria-labelledby="workouts-title">
    <div class="container">
      <div class="card-headings-row">
        <h2 id="workouts-title" class="section-header">
          <router-link to="/workouts">Workout Routines</router-link>
        </h2>
      </div>
      <div class="content-card">
        <img
          :src="workoutImg"
          alt="Lady stretching"
          class="section-image"
        />
      </div>
    </div>
  </section>

  <section id="calculator" class="content-section" aria-labelledby="calculator-title">
    <div class="container">
      <div class="card-headings-row">
        <h3 id="calculator-title" class="section-header">
          <router-link to="/calculator">Macro-nutrient Calculator</router-link>
        </h3>
      </div>
      <div class="content-card">
        <img
          :src="calculatorImg"
          alt="Preview of macro-nutrient calculator"
          class="section-image"
        />
      </div>
    </div>
  </section>

  <section id="nutrition" class="content-section" aria-labelledby="nutrition-title">
    <div class="container">
      <div class="card-headings-row">
        <h4 id="nutrition-title" class="section-header">
          <router-link to="/nutrition">Nutrition Planning</router-link>
        </h4>
      </div>
      <div class="content-card">
        <img
          :src="nutritionImg"
          alt="Preview of nutrition planning"
          class="section-image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

// Use Vite's asset handling for images in src/assets/images/
const workoutImg = computed(() => new URL('@/assets/css/images/dane-wetton-t1NEMSm1rgI-unsplash.jpg', import.meta.url).href)
const calculatorImg = computed(() => new URL('@/assets/css/images/i-yunmai-5jctAMjz21A-unsplash.jpg', import.meta.url).href)
const nutritionImg = computed(() => new URL('@/assets/css/images/jannis-brandt-mmsQUgMLqUo-unsplash.jpg', import.meta.url).href)
</script>

<style scoped>
@import "@/assets/css/reset.css";
@import "@/assets/main.css";
</style>