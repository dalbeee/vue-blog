FROM node:alpine AS build
RUN mkdir -p /app
WORKDIR /app
RUN npm init @vitejs/app . --template vue
COPY ./package.json .
RUN npm install
RUN npm run build

FROM nginx:1.19.8-alpine
RUN mkdir -p /app
COPY --from=build /app/dist /app/build
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 8080
