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
@import url("/src/assets/css/style.css");
#food-query {
    flex: 1;
    min-width: 200px;
    width: 50%;
    padding: 0.75rem;
    margin: 10px;
    border: 2px solid var(--plum);
    border-radius: 4px;
    font-size: 1.5rem;
    background-color: var(--ethereal);
    color: var(--bark);
}


#food-query:focus {
    border-color: var(--plum);
}
.food-name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--plum);
    text-align: center;
}

</style>