<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Cerca un film...">
    <button @click="searchMovies">Cerca</button>

    <ul v-if="movies.length > 0">
      <li v-for="movie in movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_average }}</p>
      </li>
    </ul>
    <p v-else-if="loading">Caricamento...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Nessun risultato trovato.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    loading() {
      return this.$store.state.loading;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    async searchMovies() {
      try {
        await this.$store.dispatch('searchMovies', this.searchQuery);
      } catch (error) {
        console.error('Errore durante la ricerca dei film:', error);
      }
    }
  }
};
</script>
