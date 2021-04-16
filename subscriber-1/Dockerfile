# Specify a base image
FROM node:15.14.0-alpine3.10 AS alpine

WORKDIR /app

# Install dependencies
COPY package.json .
RUN npm install 
COPY . .

# Default command
CMD ["npm", "run", "start"]
