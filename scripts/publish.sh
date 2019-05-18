#!/usr/bin/env sh

PACKAGE_VERSION=$(sed -nE 's/^\s*"version": "(.*?)",$/\1/p' package.json)

docker push mariotacke/radarr-ombi-sync:latest
docker push mariotacke/radarr-ombi-sync:$PACKAGE_VERSION