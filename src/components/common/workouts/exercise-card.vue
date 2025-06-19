<template>
  <div class="exercise-card">
    <h3>{{ workout.name }}</h3>
    <p><strong>Sets:</strong> {{ workout.sets }}</p>
    <p><strong>Reps:</strong> {{ workout.reps }}</p>
    <p><strong>Impact:</strong> {{ workout.impact }}</p>
    <p><strong>Rest:</strong> {{ workout.rest }}</p>
    <div v-if="workout.modifications && workout.modifications.length">
      <strong>Modifications:</strong>
      <ul>
        <li v-for="mod in workout.modifications" :key="mod">{{ mod }}</li>
      </ul>
    </div>
    <div v-if="workout.youtubeId">
      <iframe
        :src="`https://www.youtube.com/embed/${workout.youtubeId}`"
        :title="workout.name"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        width="300"
        height="169"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  workout: {
    type: Object,
    required: true
  }
})
</script>