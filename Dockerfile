# TEACHING MATERIAL: outdated base image, runs as root, no healthcheck.
FROM node:16.14.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

EXPOSE 3000
CMD ["node", "src/index.js"]
