FROM nginx:latest

LABEL authors="sergejus"

WORKDIR /app

RUN apt-get update &&  \
    apt-get install -y git 

WORKDIR /git
RUN git clone https://github.com/DariusSo/PostingPortalFront.git .

RUN rm /usr/share/nginx/html/index.html
RUN cp -r ./* /usr/share/nginx/html

EXPOSE 80