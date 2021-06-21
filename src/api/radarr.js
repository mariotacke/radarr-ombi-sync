const axios = require('axios');

const radarrHost = process.env.RADARR_HOST;
const radarrApiKey = process.env.RADARR_API_KEY;

const client = axios.create({
  baseURL: radarrHost,
});

client.interceptors.request.use((config) => {
  config.params = {
    'apikey': radarrApiKey,
    ...config.params,
  };

  return config;
});

async function getMovies () {
  const { data } = await client.get('/api/v3/movie');

  return data;
}

async function removeMovie (movieId) {
  const response = await client.delete(`/api/v3/movie/${movieId}?deleteFiles=false&addImportExclusion=false`);

  return response.data;
}

module.exports = {
  getMovies,
  removeMovie,
};