import axios from 'axios';

export default {
  async searchMovies({ commit, state }) {
    try {
      commit('setLoading', true);
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${state.apiKey}&query=${state.query}&language=it-IT`);
      commit('setMovies', response.data.results);
      commit('setError', null);
    } catch (error) {
      commit('setError', error.message);
    } finally {
      commit('setLoading', false);
    }
  }
};
