#!/bin/bash
#nginx -g 'daemon off;'
cd /usr/share/nginx/html/apiQ && nohup npm start & 
cd /usr/share/nginx/html/api && nohup node app.js & 
cd /usr/share/nginx/html/apiMix && nohup npm start & 
nginx -g 'daemon off;'
