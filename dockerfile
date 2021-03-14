FROM nginx:1.19.8-alpine

RUN mkdir -p /app/build
WORKDIR /app/
ADD ./dist ./build

RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 8080
