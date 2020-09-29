FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./html/ /usr/share/nginx/html/
RUN  sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories 
RUN \
    apk add --no-cache git nodejs npm bash && \
    git clone https://github.com/jsososo/QQMusicApi.git /usr/share/nginx/html/apiQ/ && \
    cd ./apiQ && \
    npm i
RUN git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git /usr/share/nginx/html/api/ && \
    cd ./api && \
    npm i
RUN git clone https://github.com/jsososo/MixMusicApi.git /usr/share/nginx/html/apiMix/ && \
    cd ./apiMix && \
    npm i
ADD ./start.sh /start.sh
ADD ./nginx.conf /etc/nginx/nginx.conf
COPY ./config.js /usr/share/nginx/html/apiMix/bin/config.js
RUN chmod 777 /start.sh
EXPOSE 3300
EXPOSE 3000
EXPOSE 3600
EXPOSE 80
ENTRYPOINT ["/bin/bash","/start.sh"]
#  docker run -it --name=music -d -p 3300:3300 -p 3600:3600 -p 3000:3000 -p 3080:80 hclasmn/music:test /bin/sh