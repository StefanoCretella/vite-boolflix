export default {
    filteredMovies(state) {
      return state.movies.filter(movie => movie.popularity > 100);
    }
  };
  