<template>
  <header class="primary-header">
    <router-link to="/" class="site-title">Chronically Well</router-link>
    <nav class="primary-nav">
      <router-link to="/calculator">Calculator</router-link>
      <router-link to="/nutrition">Nutrition</router-link>
      <router-link to="/workouts">Workouts</router-link>
    </nav>
  </header>
</template>

<script setup>
// No script needed for static header
</script>

<style scoped>
.primary-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--bark);
  color: var(--ethereal);
  padding: 1rem 0.5rem;
  font-size: 1.1rem;
  min-height: 60px;
  box-sizing: border-box;
}

.site-title {
  font-size: 2rem;
  font-weight: lighter;
  color: var(--ethereal);
  margin-bottom: 0.5rem;
}

.primary-nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
}

.primary-nav a {
  color: var(--ethereal);
  text-decoration: none;
  transition: color 0.2s;
}
.primary-nav a:hover, .primary-nav a:focus {
  color: var(--bark);
  text-decoration: underline;
}

@media (min-width: 900px) {
  .primary-header {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    font-size: 1.3rem;
    min-height: 80px;
  }
  .site-title {
    margin-bottom: 0;
  }
  .primary-nav {
    flex-direction: row;
    gap: 2rem;
    font-size: 1.5rem;
    width: auto;
  }
}
</style>