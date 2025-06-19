<template>
  <div v-if="nutritionResults.length">
    <table>
      <thead>
        <tr>
          <th>Food</th>
          <th>Calories</th>
          <th>Protein (g)</th>
          <th>Fat (g)</th>
          <th>Carbs (g)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in nutritionResults" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.protein }}</td>
          <td>{{ item.fat }}</td>
          <td>{{ item.carbs }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
</script>
<style>
</style>