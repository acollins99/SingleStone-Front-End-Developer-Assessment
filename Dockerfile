FROM node:latest as build

WORKDIR /usr/local/app
COPY ./Endless /usr/local/app/

RUN npm install
RUN npm run build-optimized

FROM nginx:latest

COPY --from=build /usr/local/app/dist/endless /usr/share/nginx/html
EXPOSE 80