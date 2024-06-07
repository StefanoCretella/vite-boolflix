<template>
    <div class="movie-details">
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.original_title }}</p>
      <p>
        <img :src="getFlag(movie.language)" alt="Language flag">
        {{ movie.language }}
      </p>
      <p>{{ movie.vote_average }}</p>
    </div>
  </template>
  
  <script>
  import languageFlags from '../config/languageFlags';
  
  export default {
    props: ['movie'],
    methods: {
      getFlag(language) {
        return languageFlags[language] || 'path/to/default-flag.png';
      }
    }
  };
  </script>
  
  <style scoped>
  .movie-details img {
    width: 20px;
    height: auto;
    margin-right: 5px;
  }
  </style>
  