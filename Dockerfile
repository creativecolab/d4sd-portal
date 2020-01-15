ARG build_type
# Stage 1 - Build Process
FROM node:12.2.0-alpine as build-deps

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/
COPY ./config/${build_type}/* /app/

RUN npm install

COPY . /app
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /app/build/ /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
