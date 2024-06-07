<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Cerca un film o una serie TV...">
    <button @click="searchMoviesAndTVShows">Cerca</button>

    <ul v-if="movies.length > 0">
      <li v-for="item in movies" :key="item.id">
        <h3>{{ item.title || item.name }}</h3>
        <img :src="getCoverImage(item.poster_path)" alt="Cover image" class="cover-image">
        <p>Titolo Originale: {{ item.original_title || item.original_name }}</p>
        <p>
          Lingua: <img :src="getLanguageFlag(item.original_language)" alt="Language flag" class="flag"> 
          {{ item.original_language }}
        </p>
        <p>Voto: {{ item.vote_average }}</p>
      </li>
    </ul>
    <p v-else-if="loading">Caricamento...</p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Nessun risultato trovato.</p>
  </div>
</template>

<script>
import axios from 'axios';
import languageFlags from '@/confing/languageFlags';

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
    async searchMoviesAndTVShows() {
      try {
        await this.$store.dispatch('searchMoviesAndTVShows', this.searchQuery);
      } catch (error) {
        console.error('Errore durante la ricerca dei film e delle serie TV:', error);
      }
    },
    getCoverImage(posterPath) {
      if (!posterPath) return ''; // Gestisci il caso in cui non ci sia un posterPath
      return `https://image.tmdb.org/t/p/w500/${posterPath}`;
    },
    getLanguageFlag(languageCode) {
      return languageFlags[languageCode] || '';
    }
  }
};
</script>

<style scoped>
.flag {
  width: 20px;
  height: auto;
  margin-right: 5px;
}
.cover-image {
  width: 200px; /* Imposta la larghezza desiderata per le immagini della copertina */
  height: auto;
}
</style>
