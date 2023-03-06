# Dockerfile

FROM node:16.15-alpine3.14


RUN mkdir /app
WORKDIR /app
COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]
