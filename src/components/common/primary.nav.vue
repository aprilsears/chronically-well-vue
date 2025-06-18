<template>
  <nav class="primary-nav" role="navigation" aria-label="main navigation">
    <router-link to="/calculator">Calculator</router-link>
    <router-link to="/nutrition">Nutrition</router-link>
    <router-link to="/workouts">Workouts</router-link>
  </nav>
</template>

<script>
export default {
  name: 'PrimaryNav'
}
</script>

<style scoped>
.router-link-active {
  color: var(--sage);
  text-decoration: underline;
}
</style>