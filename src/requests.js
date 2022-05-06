const API_KEY = "01c8aac5f0f98c370ec5f68692a80330";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchComedyMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=2`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=3`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=4`,
  fetchDocumantaries: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=5`
};
export default requests;