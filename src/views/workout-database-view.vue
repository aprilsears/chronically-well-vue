<template>
  <workout-database />
</template>

<script>
import WorkoutDatabase from '@/components/features/workouts/workout-database.vue'



export default {
  name: 'WorkoutDatabaseView',
  components: {
    WorkoutDatabase
  }
}
</script>
<style scoped>

.section-header {
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--ethereal);
    color: var(--plum);
    font-weight: bold;
    border: .5rem solid var(--plum);
    border-radius: 1rem;
    margin: 1rem;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.exercise-category {
    display: flex;
    flex-direction: column;
    margin: .5rem;
    padding: .5rem;
}

.exercise-card {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    border: 2px solid var(--flora);
    border-radius: 2rem;
    overflow: hidden;
    box-shadow: 0 2px 4px var(--bark);
    transition: box-shadow 0.3s ease;
}

.exercise-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.exercise-header {
    padding: 0.75rem 1rem;
    background-color: var(--bark);
    color: var(--ethereal);
    border-bottom: 1px solid var(--bark);
    font-size: 2rem;
}

.exercise-header h3 {
    margin: 0;
    color: var(--ethereal);
    font-family: Arial, Helvetica, sans-serif;
}

.exercise-details {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background-color: var(--sage);
}

.video-container {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border: 1px solid var(--bark);
    border-radius: 4px;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.exercise-info {
    display: flex;
    font-size: 1.5rem;
    color: var(--bark);
    gap: 0.75rem;
    font-weight: bold;
}

.modifications-list {
    list-style-type: disc;
    margin-left: 2rem;
    margin-top: 0.5rem;
    
}

.modifications-list li {
    margin-bottom: 0.5rem;
}



@media (min-width: 800px) {
    .exercise-details {
        flex-direction: row;
    }
    
    .exercise-video {
        width: 60%;
        margin-right: 1rem;
    }
    
    .exercise-info {
        width: 50%;
    }
}

@media (max-width: 480px) {
    .exercise-header {
        padding: 0.5rem 0.75rem;
    }

    .exercise-header h3 {
        font-size: 1.25rem;
        padding: 0.5rem 0;
    }
}

</style>