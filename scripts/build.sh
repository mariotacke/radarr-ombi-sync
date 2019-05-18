#!/usr/bin/env sh

COMMIT=$(git rev-parse --short HEAD)
PACKAGE_VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

docker build \
  --build-arg=COMMIT=$COMMIT \
  --tag mariotacke/radarr-ombi-sync:latest \
  --tag mariotacke/radarr-ombi-sync:$PACKAGE_VERSION \
  .