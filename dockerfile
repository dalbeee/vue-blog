FROM nginx:1.19.8-alpine

RUN mkdir -p /app/build 
WORKDIR /app/
ADD ./dist ./build

# nginx 의 default.conf 를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host pc 의 nginx.conf 를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

EXPOSE 8080