import axios from 'axios';
import { createStore } from 'vuex';

const apiKey = import.meta.env.VITE_API_KEY;

export default createStore({
  state: {
    movies: []
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    async searchMovies({ commit }, query) {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${apiKey}&language=it-IT`);
        commit('SET_MOVIES', response.data.results);
      } catch (error) {
        console.error('Errore durante la ricerca dei film:', error);
        throw error; 
      }
    }
  }
});
