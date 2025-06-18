<![CDATA[<template>
  <div class="exercise-card">
    <div class="exercise-header">
      <h3>{{ workout.name }}</h3>
    </div>
    
    <div class="exercise-details">
      <div class="exercise-video">
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
        <p><strong>Modifications:</strong></p>
        <ul class="modifications-list">
          <li v-for="(mod, index) in workout.modifications" :key="index">
            {{ mod }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    workout: {
      type: Object,
      required: true
    }
  }
}
</script>]]>
