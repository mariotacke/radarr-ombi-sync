FROM node:10-alpine
LABEL maintainer="Mario Tacke <tacke.mario@gmail.com>"
ARG COMMIT=""
LABEL commit=${COMMIT}

WORKDIR /app
COPY package.json package-lock.json /app/

RUN npm install
COPY . /app

ENV COMMIT_SHA=${COMMIT}

CMD node src/index.js
