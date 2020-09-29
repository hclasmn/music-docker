```
项目来源https://github.com/jsososo/NeteaseMusic docker化该项目
目前仍存在问题。部署后能登录，能搜索，但无法播放
部署时，需根据自己的IP修改对应文件.
```
反代例（可能有问题）
```
server {
    listen  80;
           server_name  域名;
    location / {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3080;
    }
    location /api/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3000/;
    }
    location /apiMix/ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3600/;
    }
    location /apiQ {
        proxy_set_header  Host  $http_host;
        proxy_set_header  X-Real-IP  $remote_addr;
        proxy_set_header  X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass  http://192.168.1.140:3300/;
    }
}
```
