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
    <div v-if="workout.youtubeId" class="video-wrapper">
      <iframe
        :src="`https://www.youtube.com/embed/${workout.youtubeId}`"
        :title="workout.name"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
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

<style scoped>
.exercise-card {
  display: block;
  align-items: flex-start;
  padding: .5rem;
  margin: .5rem;
}
.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  margin: 1rem 0;
}
.video-wrapper iframe {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  min-height: 250px;
  max-width: 600px;
  margin: 0 auto;
  display: block;
}
p {
  font-size: 1.5rem;
}
li {
  font-size: 1.5rem;
}
</style>