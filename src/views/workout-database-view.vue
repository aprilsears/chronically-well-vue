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
    min-height: 500px;
    max-height: 600px;
    width: 100%;
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
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.exercise-header h3 {
    margin: 0;
    color: var(--ethereal);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
}

.exercise-details {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background-color: var(--sage);
    flex: 1;
    gap: 1rem;
    font-size: 1.2rem;
}

.video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    border: 1px solid var(--bark);
    border-radius: 4px;
    background-color: #000; /* Black background for letterboxing */
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
    flex-direction: column;
    font-size: 1.5rem;
    color: var(--bark);
    gap: 0.5rem;
    font-weight: bold;
    flex: 1;
}

.exercise-info p {
    margin: 0.25rem 0;
}

.modifications-list {
    list-style-type: disc;
    margin-left: 2rem;
    margin-top: 0.5rem;
   
}

.modifications-list li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

@media (min-width: 900px) {
    .card-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
        align-items: stretch;
    }
    
    .exercise-card {
        height: 100%;
        min-height: 550px;
    }
    
    /* Side-by-side layout for larger screens */
    .exercise-details {
        flex-direction: row;
        gap: 1.5rem;
    }
    
    .exercise-video {
        flex: 1;
        min-width: 300px;
    }
    
    .exercise-info {
        flex: 1;
        min-width: 200px;
    }
}

@media (max-width: 900px) {
    .exercise-details {
        flex-direction: column;
        gap: 1rem;
    }
    
    .exercise-card {
        min-height: 450px;
    }
}

@media (max-width: 480px) {
    .exercise-header {
        padding: 0.5rem 0.75rem;
        min-height: 50px;
    }

    .exercise-header h3 {
        font-size: 1.25rem;
    }
    
    .exercise-details {
        padding: 1rem;
    }
    
    .exercise-info {
        font-size: 1.2rem;
    }
    
    .exercise-card {
        min-height: 400px;
    }
}

</style>