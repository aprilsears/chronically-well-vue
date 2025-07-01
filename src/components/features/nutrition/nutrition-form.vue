<template>
  <form id="nutrition-form" @submit.prevent="$emit('search', foodQuery)">
    <input type="text" v-model="foodQuery" placeholder="Enter food item" required />
    <button type="submit">Search</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const foodQuery = ref('')
</script>

<style>
@import "@/assets/css/nutrition.css";
</style>