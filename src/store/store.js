import { createStore } from 'vuex';
import axios from 'axios';

const API_KEY = 'e99307154c6dfb0b4750f6603256716d';
const BASE_URL = 'https://api.themoviedb.org/3';

export default createStore({
  state: {
    movies: [],
    loading: false,
    error: null
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  actions: {
    async searchMoviesAndTVShows({ commit }, query) {
      commit('setLoading', true);
      commit('setError', null);

      try {
        const [movieResponse, tvResponse] = await Promise.all([
          axios.get(`${BASE_URL}/search/movie`, {
            params: {
              api_key: API_KEY,
              query,
              language: 'it-IT'
            }
          }),
          axios.get(`${BASE_URL}/search/tv`, {
            params: {
              api_key: API_KEY,
              query,
              language: 'it-IT'
            }
          })
        ]);

        const movies = movieResponse.data.results;
        const tvShows = tvResponse.data.results;

        const combinedResults = [...movies, ...tvShows];
        commit('setMovies', combinedResults);
      } catch (error) {
        commit('setError', 'Errore durante la ricerca. Riprova.');
      } finally {
        commit('setLoading', false);
      }
    }
  }
});
