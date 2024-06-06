export default {
    setQuery(state, query) {
      state.query = query;
    },
    setMovies(state, movies) {
      state.movies = movies;
    },
    setSelectedMovie(state, movie) {
      state.selectedMovie = movie;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setError(state, error) {
      state.error = error;
    }
  };
  