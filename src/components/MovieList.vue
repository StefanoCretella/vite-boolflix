<template>
    <div>
      <ul v-if="movies.length > 0">
        <li v-for="movie in movies" :key="movie.id">
          <h3>{{ movie.title }}</h3>
          <p>Titolo Originale: {{ movie.original_title }}</p>
          <p>Lingua: {{ movie.original_language }}</p>
          <p>Voto: {{ movie.vote_average }}</p>
        </li>
      </ul>
      <p v-else>Nessun risultato trovato.</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movies: {
        type: Array,
        default: () => []
      }
    }
  };
  </script>
  