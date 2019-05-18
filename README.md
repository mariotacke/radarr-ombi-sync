# radarr-ombi-sync
If you find yourself wanting to automatically remove monitored movies from [Radarr](https://github.com/Radarr/Radarr) after they become available, this tool is for you. Once [Ombi](https://github.com/tidusjar/Ombi) marks the movie as available, this service will remove it from the Radarr watch list.

## When should I use this service?
If you have your entire library in Radarr, this tool is not for you. A common use-case is to use Radarr only for its monitoring functionality. Once a movie becomes available, you may want to remove it from the monitored list. If this use-case applies to you, this service is for you.

## Running

### Local
When running locally, make sure to copy `.env.example` to `.env` and fill in
your information.

```
npm install
npm start
```

### Docker
```
docker run \
  --name radarr-ombi-sync \
  -e OMBI_HOST=http://ombi:3579 \
  -e OMBI_API_KEY=ombi-token \
  -e RADARR_HOST=http://radarr:7878 \
  -e RADARR_API_KEY=radarr-token \
  mariotacke/radarr-ombi-sync
```

or via `docker-compose`

```
version: '3'
services:
  radarr-ombi-sync:
    image: mariotacke/radarr-ombi-sync
    restart: unless-stopped
    environment:
      - OMBI_HOST=http://ombi:3579
      - OMBI_API_KEY=ombi-token
      - RADARR_HOST=http://radarr:7878
      - RADARR_API_KEY=radarr-token
```

## Environment variables
Running locally or via Docker supports the following environment variables:
- `OMBI_HOST`, your Ombi host and port, example: `http://ombi:3579`
- `OMBI_API_KEY`, your Ombi API key
- `RADARR_HOST`, your Radarr host and port, example: `http://radarr:7878`
- `RADARR_API_KEY`, your Radarr API key
- `POLLING_INTERVAL_SECONDS`, optional, the number of seconds between each sync

## Requirements
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Ombi](https://github.com/tidusjar/Ombi)
- [Radarr](https://github.com/Radarr/Radarr)