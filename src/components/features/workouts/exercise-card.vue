<template>
  <div class="exercise-card">
    <div class="exercise-header">
      <h3>{{ workout.name }}</h3>
    </div>
    
    <div class="exercise-details">
      <div class="exercise-video" v-if="workout.youtubeId">
        <div class="video-container">
          <iframe
            :src="`https://www.youtube.com/embed/${workout.youtubeId}`"
            :title="workout.name"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      
      <div class="exercise-info">
        <p><strong>Sets:</strong> {{ workout.sets }}</p>
        <p><strong>Reps:</strong> {{ workout.reps }}</p>
        <p><strong>Impact:</strong> {{ workout.impact }}</p>
        <p><strong>Rest:</strong> {{ workout.rest }}</p>
        
        <div v-if="workout.modifications && workout.modifications.length" class="modifications">
          <p><strong>Modifications:</strong></p>
          <ul class="modifications-list">
            <li v-for="mod in workout.modifications" :key="mod">{{ mod }}</li>
          </ul>
        </div>
      </div>
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
  display: flex;
  flex-direction: column;
  background-color: var(--sage);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 2px 4px var(--bark);
  transition: box-shadow 0.3s ease;
}

.exercise-header {
  background-color: var(--bark);
  color: var(--ethereal);
  padding: 1rem;
  text-align: center;
}

.exercise-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--ethereal);
}

.exercise-details {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: #000;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.exercise-info p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: var(--bark);
}

.modifications {
  margin-top: 1rem;
}

.modifications-list {
  list-style-type: disc;
  margin-left: 1.5rem;
  margin-top: 0.5rem;
}

.modifications-list li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

@media (min-width: 900px) {
  .exercise-details {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
  
  .exercise-video {
    flex: 1;
    align-content: space-around;
  }

  .exercise-info {
    flex: 1;
    align-items: center;

  }
}
</style>