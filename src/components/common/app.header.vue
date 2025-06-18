<template>
  <header class="primary-header" role="banner">
    <div class="container nav-wrapper">
      <router-link to="/" class="site-title">Chronically Well</router-link>
      <PrimaryNav />
    </div>
  </header>
</template>

<script>
import PrimaryNav from './primary.nav.vue'

export default {
  name: 'AppHeader',
  components: {
    PrimaryNav
  }
}
</script>