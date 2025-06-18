<template>
  <div id="app">
    <AppHeader />
    <main id="main-content" role="main">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/common/app.header.vue'
import AppFooter from './components/common/app.footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style> 

  @import url("./assets/css/reset.css");
  @import url("./assets/css/style.css");
  
</style>
