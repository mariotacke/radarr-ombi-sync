const radarr = require('./api/radarr');
const ombi = require('./api/ombi');

const pollingIntervalSeconds = parseInt(process.env.POLLING_INTERVAL_SECONDS) || 300;

async function removeAvailableMoviesFromRadarr () {
  console.log('Checking movies.');
  const radarrMovies = await radarr.getMovies();
  console.log(`Found ${radarrMovies.length} movies. Checking for availability.`);

  for (let i = 0; i < radarrMovies.length; i++) {
    const { id: radarrMovieId, tmdbId } = radarrMovies[i];

    const ombiMovie = await ombi.getMovieById(tmdbId);

    if (ombiMovie && ombiMovie.available) {
      console.log(`Found '${ombiMovie.title}' available. Removing from Radarr.`);
      await radarr.removeMovie(radarrMovieId);
      console.log(`Removed '${ombiMovie.title}' (${radarrMovieId}) from Radarr`);
    }
  }

  console.log(`Checks completed. Next run in ${pollingIntervalSeconds}s`);
}

setInterval(async () => {
  await removeAvailableMoviesFromRadarr();
}, pollingIntervalSeconds * 1000);

(async () => {
  await removeAvailableMoviesFromRadarr();
})();