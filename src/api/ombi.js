const axios = require('axios');

const ombiHost = process.env.OMBI_HOST;
const ombiApiKey = process.env.OMBI_API_KEY;

const client = axios.create({
  baseURL: ombiHost,
  headers: {
    'ApiKey': ombiApiKey,
  },
});

async function getMovieById(providerId) {
  const { data } = await client.get(`/api/v1/search/movie/info/${providerId}`);

  return data;
}

module.exports = {
  getMovieById,
};