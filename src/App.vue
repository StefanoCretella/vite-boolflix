<template>
  <div>
    <input v-model="query" @input="fetchMovies" placeholder="Cerca un film..." />
    <div v-if="movies.length">
      <div v-for="movie in movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <p>{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { searchMovies } from './api';

export default {
  setup() {
    const query = ref('');
    const movies = ref([]);

    const fetchMovies = async () => {
      if (query.value) {
        movies.value = await searchMovies(query.value);
      }
    };

    return { query, movies, fetchMovies };
  }
};
</script>
