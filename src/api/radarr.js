const axios = require('axios');

const radarrHost = process.env.RADARR_HOST;
const radarrApiKey = process.env.RADARR_API_KEY;

const client = axios.create({
  baseURL: radarrHost,
  headers: {
    'X-Api-Key': radarrApiKey,
  },
});

async function getMovies () {
  const { data } = await client.get('/api/movie');

  return data;
}

async function removeMovie (movieId) {
  const { data } = await client.delete(`/api/movie/${movieId}?deleteFiles=false&addExclusion=false`);

  return data;
}

module.exports = {
  getMovies,
  removeMovie,
};