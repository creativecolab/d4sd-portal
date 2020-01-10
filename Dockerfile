FROM node:12.2.0-alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm install
RUN npm build

COPY . /app

EXPOSE 3000

CMD ["npm","start"]
