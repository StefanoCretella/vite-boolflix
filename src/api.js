const apiKey = import.meta.env.VITE_API_KEY;

export const searchMovies = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=it-IT`);
  const data = await response.json();
  return data.results;
};
