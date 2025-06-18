<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <h1 id="hero-title">Fitness for Chronic Illness</h1>
        <p>Customized workouts and nutrition planning</p>
      </div>
    </section>

    <!-- Workouts Section -->
    <section id="workouts" class="content-section" aria-labelledby="workouts-title">
      <div class="container">
        <div class="card-headings-row">
          <h2 id="workouts-title" class="section-header">
            <router-link to="/workouts">Workout Routines</router-link>
          </h2>
        </div>
        <div class="content-card">          <img 
            src="https://placehold.co/600x400?text=Workout+Image" 
            alt="Lady stretching" 
            class="section-image"
          >
        </div>
      </div>
    </section>

    <!-- Calculator Section -->
    <section id="calculator" class="content-section" aria-labelledby="calculator-title">
      <div class="container">
        <div class="card-headings-row">
          <h3 id="calculator-title" class="section-header">
            <router-link to="/calculator">Macro-nutrient Calculator</router-link>
          </h3>
        </div>
        <div class="content-card">
          <img 
            src="/images/i-yunmai-5jctAMjz21A-unsplash.jpg" 
            alt="Preview of macro-nutrient calculator" 
            class="section-image"
          >
        </div>
      </div>
    </section>

    <!-- Nutrition Section -->
    <section id="nutrition" class="content-section" aria-labelledby="nutrition-title">
      <div class="container">
        <div class="card-headings-row">
          <h4 id="nutrition-title" class="section-header">
            <router-link to="/nutrition">Nutrition Planning</router-link>
          </h4>
        </div>
        <div class="content-card">
          <img 
            src="/images/jannis-brandt-mmsQUgMLqUo-unsplash.jpg" 
            alt="Preview of nutrition planning" 
            class="section-image"
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
/* Home page specific styles */
.home {
  width: 100%;
}
</style>