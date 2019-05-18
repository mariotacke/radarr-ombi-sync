#!/usr/bin/env sh

docker build \
  --build-arg=COMMIT=$(git rev-parse --short HEAD) \
  --tag mariotacke/radarr-ombi-sync \
  .