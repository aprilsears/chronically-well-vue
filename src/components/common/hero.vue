<template>
  <div class="landing-vertical">
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <h1 id="hero-title">Fitness for Chronic Illness</h1>
        <p>Customized workouts and nutrition planning</p>
      </div>
    </section>
    <div class="landing-row">
      <section id="workouts" class="content-section" aria-labelledby="workouts-title">
        <div class="container">
          <h2 id="workouts-title" class="section-header">
            <router-link to="/workouts">Workout Routines</router-link>
          </h2>
          <div class="content-card">
            <img :src="workoutImg" alt="Lady stretching" class="section-image" />
          </div>
        </div>
      </section>
      <section id="calculator" class="content-section" aria-labelledby="calculator-title">
        <div class="container">
          <h3 id="calculator-title" class="section-header">
            <router-link to="/calculator">Macro-nutrient Calculator</router-link>
          </h3>
          <div class="content-card">
            <img :src="calculatorImg" alt="Preview of macro-nutrient calculator" class="section-image" />
          </div>
        </div>
      </section>
      <section id="nutrition" class="content-section" aria-labelledby="nutrition-title">
        <div class="container">
          <h4 id="nutrition-title" class="section-header">
            <router-link to="/nutrition">Nutrition Planning</router-link>
          </h4>
          <div class="content-card">
            <img :src="nutritionImg" alt="Preview of nutrition planning" class="section-image" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const workoutImg = computed(() => new URL('@/assets/images/dane-wetton-t1NEMSm1rgI-unsplash.jpg', import.meta.url).href)
const calculatorImg = computed(() => new URL('@/assets/images/i-yunmai-5jctAMjz21A-unsplash.jpg', import.meta.url).href)
const nutritionImg = computed(() => new URL('@/assets/images/jannis-brandt-mmsQUgMLqUo-unsplash.jpg', import.meta.url).href)
</script>

<style scoped>
.landing-vertical {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
}

.hero {
  background: var(--ethereal);
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(47, 41, 38, 0.10);
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-sizing: border-box;
}

.landing-row {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
}


@media (min-width: 900px) {
  .landing-row {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    width: 100%;
  }
  .landing-row > section {
    flex: 1 1 0;
    min-width: 0;
    max-width: 350px;
    min-height: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .landing-vertical {
    align-items: stretch;
  }

}
</style>