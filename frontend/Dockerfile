FROM teached-base:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i
RUN npm run build
