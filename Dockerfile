FROM node:latest

WORKDIR /src/server

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "./dist/server.js"]